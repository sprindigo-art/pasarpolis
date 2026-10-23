package workers

import (
	"strings"
	"time"

	"github.com/garyburd/redigo/redis"
)

type scheduled struct {
	keys   []string
	closed chan bool
	exit   chan bool
}

func (s *scheduled) start() {
	go (func() {
		for {
			select {
			case <-s.closed:
				return
			default:
			}

			s.poll()

			time.Sleep(time.Duration(Config.PollInterval) * time.Second)
		}
	})()
}

func (s *scheduled) quit() {
	close(s.closed)
}

func (s *scheduled) poll() {
	conn := Config.Pool.Get()
	defer conn.Close()

	// Test connection
	if _, err := conn.Do("PING"); err != nil {
		Logger.Println("ERR: scheduled processor - Redis connection failed:", err)
		return
	}

	now := nowToSecondsWithNanoPrecision()

	for _, key := range s.keys {
		key = Config.Namespace + key
		for {
			messages, err := redis.Strings(conn.Do("zrangebyscore", key, "-inf", now, "limit", 0, 1))
			if err != nil {
				Logger.Println("ERR: scheduled processor - zrangebyscore failed for", key, ":", err)
				break
			}

			if len(messages) == 0 {
				break
			}

			message, err := NewMsg(messages[0])
			if err != nil {
				Logger.Println("ERR: scheduled processor - NewMsg failed:", err)
				break
			}

			removed, err := redis.Bool(conn.Do("zrem", key, messages[0]))
			if err != nil {
				Logger.Println("ERR: scheduled processor - zrem failed for", key, ":", err)
				break
			}

			if removed {
				queue, err := message.Get("queue").String()
				if err != nil {
					Logger.Println("ERR: scheduled processor - failed to get queue from message:", err)
					continue
				}
				message.Set("enqueued_at", nowToSecondsWithNanoPrecision())
				targetQueue := scheduledTargetQueue(queue)
				_, err = conn.Do("lpush", targetQueue, message.ToJson())
				if err != nil {
					Logger.Println("ERR: scheduled processor - lpush failed for", targetQueue, ":", err)
				} else {
					Logger.Println("scheduled processor: moved job to queue", targetQueue)
				}
			}
		}
	}
}

// scheduledTargetQueue returns the list a due scheduled or retried job is
// pushed to. It must be the same hash-tagged key Enqueue pushes to and the
// fetcher pops from, otherwise the job lands in a list no worker reads.
func scheduledTargetQueue(queue string) string {
	queue = strings.TrimPrefix(queue, Config.Namespace)
	return addHashTagForEnqueue(Config.Namespace + "queue:" + queue)
}

func newScheduled(keys ...string) *scheduled {
	return &scheduled{keys, make(chan bool), make(chan bool)}
}
