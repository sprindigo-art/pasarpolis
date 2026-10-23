[![Build Status](https://travis-ci.org/jrallison/go-workers.png)](https://travis-ci.org/jrallison/go-workers)
[![GoDoc](https://godoc.org/github.com/jrallison/go-workers?status.png)](https://godoc.org/github.com/jrallison/go-workers)

[Sidekiq](http://sidekiq.org/) compatible
background workers in [golang](http://golang.org/).

* reliable queueing for all queues using [brpoplpush](http://redis.io/commands/brpoplpush)
* handles retries
* support custom middleware
* customize concurrency per queue
* responds to Unix signals to safely wait for jobs to finish before exiting.
* provides stats on what jobs are currently running
* well tested
* **TLS/SSL support** for secure Redis connections
* **Connection timeouts** to prevent indefinite hangs

Example usage:

```go
package main

import (
	"github.com/Pasarpolis/go-worker"
)

func myJob(message *workers.Msg) {
  // do something with your message
  // message.Jid()
  // message.Args() is a wrapper around go-simplejson (http://godoc.org/github.com/bitly/go-simplejson)
}

type myMiddleware struct{}

func (r *myMiddleware) Call(queue string, message *workers.Msg, next func() bool) (acknowledge bool) {
  // do something before each message is processed
  acknowledge = next()
  // do something after each message is processed
  return
} 

func main() {
  workers.Configure(map[string]string{
    // location of redis instance
    "server":  "localhost:6379",
    // instance of the database
    "database":  "0",
    // number of connections to keep open with redis
    "pool":    "30",
    // unique process id for this instance of workers (for proper recovery of inprogress jobs on crash)
    "process": "1",
    // enable TLS/SSL for secure Redis connections (optional)
    // "use_tls": "true",
  })

  workers.Middleware.Append(&myMiddleware{})

  // pull messages from "myqueue" with concurrency of 10
  workers.Process("myqueue", myJob, 10)

  // pull messages from "myqueue2" with concurrency of 20
  workers.Process("myqueue2", myJob, 20)

  // Add a job to a queue
  workers.Enqueue("myqueue3", "Add", []int{1, 2})

  // Add a job to a queue with retry
  workers.EnqueueWithOptions("myqueue3", "Add", []int{1, 2}, workers.EnqueueOptions{Retry: true})

  // stats will be available at http://localhost:8080/stats
  // queue lookup is available at POST http://localhost:8080/identifier-lookup
  go workers.StatsServer(8080)


  // Blocks until process is told to exit via unix signal
  workers.Run()
}
```

## TLS/SSL Support

go-workers now supports secure TLS/SSL connections to Redis. This is useful when connecting to cloud-hosted Redis services like AWS ElastiCache or Azure Cache for Redis.

To enable TLS, add `"use_tls": "true"` to your configuration:

```go
workers.Configure(map[string]string{
  "server":   "your-redis-server.com:6380",
  "password": "your-password",
  "database": "0",
  "pool":     "30",
  "process":  "1",
  "use_tls":  "true",
})
```

For more details and examples, see [TLS_SUPPORT.md](TLS_SUPPORT.md).

## Connection Timeouts

The library includes built-in timeouts to prevent Redis connections from hanging indefinitely:

- **Connection timeout**: 5 seconds
- **Read timeout**: 3 seconds
- **Write timeout**: 3 seconds
- **Health check (TestOnBorrow)**: 1 second, skipped for recently used connections (< 30s)

These timeouts are automatically applied to all Redis connections (both TLS and non-TLS), ensuring that operations fail quickly with proper errors instead of hanging when Redis is slow or under load.

**Optimized for AWS ElastiCache Serverless:** The TestOnBorrow function intelligently skips PING checks for warm connections while using a 1-second timeout for older connections, preventing the 3+ second delays common with cold TLS handshakes.

For more details, see [TIMEOUT_FIX.md](TIMEOUT_FIX.md) and [TIMEOUT_AUDIT.md](TIMEOUT_AUDIT.md).