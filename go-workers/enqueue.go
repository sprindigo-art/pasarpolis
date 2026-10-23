package workers

import (
	"crypto/rand"
	"encoding/json"
	"fmt"
	"io"
	"strings"
	"time"
)

const (
	NanoSecondPrecision = 1000000000.0
)

type EnqueueData struct {
	Queue      string      `json:"queue,omitempty"`
	Class      string      `json:"class"`
	Args       interface{} `json:"args"`
	Jid        string      `json:"jid"`
	EnqueuedAt float64     `json:"enqueued_at"`
	EnqueueOptions
}

type EnqueueDataProxy EnqueueData

func (e EnqueueData) MarshalJSON() ([]byte, error) {
	o := e.EnqueueOptions
	if e.EnqueueOptions.RetryCount > 0 {
		s := struct {
			EnqueueDataProxy
			Retry      int     `json:"retry,omitempty"`
			RetryCount int     `json:"retry_count"`
			At         float64 `json:"at,omitempty"`
		}{EnqueueDataProxy(e), o.RetryCount, 0, o.At}
		return json.Marshal(s)
	}

	return json.Marshal(struct {
		EnqueueDataProxy
		RetryCount int     `json:"retry_count,omitempty"`
		Retry      bool    `json:"retry,omitempty"`
		At         float64 `json:"at,omitempty"`
	}{EnqueueDataProxy(e), o.RetryCount, o.Retry, o.At})
}

type EnqueueOptions struct {
	RetryCount int     `json:"retry_count,omitempty"`
	Retry      bool    `json:"retry,omitempty"`
	At         float64 `json:"at,omitempty"`
}

func generateJid() string {
	// Return 12 random bytes as 24 character hex
	b := make([]byte, 12)
	_, err := io.ReadFull(rand.Reader, b)
	if err != nil {
		return ""
	}
	return fmt.Sprintf("%x", b)
}

func Enqueue(queue, class string, args interface{}) (string, error) {
	return EnqueueWithOptions(queue, class, args, EnqueueOptions{At: nowToSecondsWithNanoPrecision()})
}

func EnqueueIn(queue, class string, in float64, args interface{}) (string, error) {
	return EnqueueWithOptions(queue, class, args, EnqueueOptions{At: nowToSecondsWithNanoPrecision() + in})
}

func EnqueueAt(queue, class string, at time.Time, args interface{}) (string, error) {
	return EnqueueWithOptions(queue, class, args, EnqueueOptions{At: timeToSecondsWithNanoPrecision(at)})
}

func EnqueueWithOptions(queue, class string, args interface{}, opts EnqueueOptions) (string, error) {
	now := nowToSecondsWithNanoPrecision()
	data := EnqueueData{
		Queue:          queue,
		Class:          class,
		Args:           args,
		Jid:            generateJid(),
		EnqueuedAt:     now,
		EnqueueOptions: opts,
	}

	bytes, err := json.Marshal(data)
	if err != nil {
		return "", err
	}

	if now < opts.At {
		err := enqueueAt(data.At, bytes)
		return data.Jid, err
	}

	conn := Config.Pool.Get()
	defer conn.Close()

	_, err = conn.Do("sadd", Config.Namespace+"queues", queue)
	if err != nil {
		return "", err
	}
	finalQueue := Config.Namespace + "queue:" + queue
	// Apply hash tag for Redis Cluster support (same as fetcher does)
	finalQueueWithHashTag := addHashTagForEnqueue(finalQueue)
	_, err = conn.Do("rpush", finalQueueWithHashTag, bytes)
	if err != nil {
		return "", err
	}

	return data.Jid, nil
}

func enqueueAt(at float64, bytes []byte) error {
	conn := Config.Pool.Get()
	defer conn.Close()

	_, err := conn.Do(
		"zadd",
		Config.Namespace+SCHEDULED_JOBS_KEY, at, bytes,
	)
	if err != nil {
		return err
	}

	return nil
}

func timeToSecondsWithNanoPrecision(t time.Time) float64 {
	return float64(t.UnixNano()) / NanoSecondPrecision
}

func durationToSecondsWithNanoPrecision(d time.Duration) float64 {
	return float64(d.Nanoseconds()) / NanoSecondPrecision
}

func nowToSecondsWithNanoPrecision() float64 {
	return timeToSecondsWithNanoPrecision(time.Now())
}

// addHashTagForEnqueue adds a Redis hash tag to ensure keys hash to the same slot in cluster mode
// This matches the behavior in fetcher.go's addHashTag function
func addHashTagForEnqueue(key string) string {
	// Extract queue name from key format: "namespace:queue:queuename"
	// Find the queue name part after "queue:"
	queuePrefix := Config.Namespace + "queue:"
	if !strings.HasPrefix(key, queuePrefix) {
		// If key doesn't match expected format, return as-is
		return key
	}

	// Extract queue name (everything after "queue:" up to next ":" or end)
	queueNamePart := strings.TrimPrefix(key, queuePrefix)
	queueName := queueNamePart
	if idx := strings.Index(queueNamePart, ":"); idx > 0 {
		queueName = queueNamePart[:idx]
	}

	// Use queue name as hash tag: {queuename}fullkey
	return fmt.Sprintf("{%s}%s", queueName, key)
}
