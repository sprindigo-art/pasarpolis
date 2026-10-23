package workers

import (
	"fmt"
	"strings"
	"time"

	"github.com/garyburd/redigo/redis"
)

type Fetcher interface {
	Queue() string
	Fetch()
	Acknowledge(*Msg)
	Ready() chan bool
	FinishedWork() chan bool
	Messages() chan *Msg
	Close()
	Closed() bool
}

type fetch struct {
	queue        string
	ready        chan bool
	finishedwork chan bool
	messages     chan *Msg
	stop         chan bool
	exit         chan bool
	closed       chan bool
}

func NewFetch(queue string, messages chan *Msg, ready chan bool) Fetcher {
	return &fetch{
		queue,
		ready,
		make(chan bool),
		messages,
		make(chan bool),
		make(chan bool),
		make(chan bool),
	}
}

func (f *fetch) Queue() string {
	return f.queue
}

func (f *fetch) processOldMessages() {
	messages := f.inprogressMessages()

	for _, message := range messages {
		<-f.Ready()
		f.sendMessage(message)
	}
}

func (f *fetch) Fetch() {
	f.processOldMessages()

	go func() {
		for {
			// f.Close() has been called
			if f.Closed() {
				break
			}
			<-f.Ready()
			f.tryFetchMessage()
		}
	}()

	for {
		select {
		case <-f.stop:
			// Stop the redis-polling goroutine
			close(f.closed)
			// Signal to Close() that the fetcher has stopped
			close(f.exit)
			break
		}
	}
}

func (f *fetch) tryFetchMessage() {
	conn := Config.Pool.Get()
	defer conn.Close()

	// Use hash tags to ensure both keys hash to the same slot in Redis Cluster
	// This is required for brpoplpush to work in cluster mode
	sourceQueue := addHashTag(f.queue)
	inprogressQueue := addHashTag(f.inprogressQueue())

	message, err := redis.String(conn.Do("brpoplpush", sourceQueue, inprogressQueue, 1))

	if err != nil {
		// If redis returns null, the queue is empty. Just ignore the error.
		if err.Error() != "redigo: nil returned" {
			Logger.Println("ERR: brpoplpush failed for", sourceQueue, ":", err)
			time.Sleep(1 * time.Second)
		}
	} else {
		f.sendMessage(message)
	}
}

func (f *fetch) sendMessage(message string) {
	msg, err := NewMsg(message)

	if err != nil {
		Logger.Println("ERR: Couldn't create message from", message, ":", err)
		return
	}

	f.Messages() <- msg
}

func (f *fetch) Acknowledge(message *Msg) {
	conn := Config.Pool.Get()
	defer conn.Close()
	// Use hash tag to match the key used in brpoplpush
	inprogressQueue := addHashTag(f.inprogressQueue())
	conn.Do("lrem", inprogressQueue, -1, message.OriginalJson())
}

func (f *fetch) Messages() chan *Msg {
	return f.messages
}

func (f *fetch) Ready() chan bool {
	return f.ready
}

func (f *fetch) FinishedWork() chan bool {
	return f.finishedwork
}

func (f *fetch) Close() {
	f.stop <- true
	<-f.exit
}

func (f *fetch) Closed() bool {
	select {
	case <-f.closed:
		return true
	default:
		return false
	}
}

func (f *fetch) inprogressMessages() []string {
	conn := Config.Pool.Get()
	defer conn.Close()

	// Use hash tag to match the key used in brpoplpush
	inprogressQueue := addHashTag(f.inprogressQueue())
	messages, err := redis.Strings(conn.Do("lrange", inprogressQueue, 0, -1))
	if err != nil {
		Logger.Println("ERR: ", err)
	}

	return messages
}

func (f *fetch) inprogressQueue() string {
	return fmt.Sprint(f.queue, ":", Config.processId, ":inprogress")
}

// addHashTag adds a Redis hash tag to ensure keys hash to the same slot in cluster mode
// Extracts the queue name from keys like "pp-core:queue:myqueue" and uses it as hash tag
func addHashTag(key string) string {
	// Extract queue name from key format: "namespace:queue:queuename" or "namespace:queue:queuename:..."
	// Split by "queue:" to get the queue name part
	parts := strings.Split(key, "queue:")
	if len(parts) < 2 {
		// If key doesn't match expected format, return as-is
		return key
	}

	// Extract just the queue name (up to next ":" or end of string)
	queueNamePart := parts[1]
	queueName := queueNamePart
	if idx := strings.Index(queueNamePart, ":"); idx > 0 {
		queueName = queueNamePart[:idx]
	}

	// Use queue name as hash tag: {queuename}fullkey
	return fmt.Sprintf("{%s}%s", queueName, key)
}
