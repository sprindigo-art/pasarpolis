package workers

import (
	"crypto/tls"
	"net"
	"strconv"
	"time"

	"github.com/garyburd/redigo/redis"
)

type config struct {
	processId    string
	Namespace    string
	PollInterval int
	Pool         *redis.Pool
	Fetch        func(queue string) Fetcher
}

var Config *config

func Configure(options map[string]string) {
	var poolSize int
	var namespace string
	var pollInterval int

	if options["server"] == "" {
		panic("Configure requires a 'server' option, which identifies a Redis instance")
	}
	if options["process"] == "" {
		panic("Configure requires a 'process' option, which uniquely identifies this instance")
	}
	if options["pool"] == "" {
		options["pool"] = "1"
	}
	if options["namespace"] != "" {
		namespace = options["namespace"] + ":"
	}
	if seconds, err := strconv.Atoi(options["poll_interval"]); err == nil {
		pollInterval = seconds
	} else {
		pollInterval = 15
	}

	poolSize, _ = strconv.Atoi(options["pool"])

	Config = &config{
		options["process"],
		namespace,
		pollInterval,
		&redis.Pool{
			MaxIdle:     poolSize,
			IdleTimeout: 240 * time.Second,
			Dial: func() (redis.Conn, error) {
				var c redis.Conn
				var err error

				// Configure timeouts for AWS ElastiCache
				// Increased timeouts to handle network latency and load
				connectTimeout := 10 * time.Second
				readTimeout := 30 * time.Second // Allow for brpoplpush (1s) + network latency
				writeTimeout := 10 * time.Second

				// Check if TLS should be used
				if options["use_tls"] == "true" || options["use_tls"] == "1" {
					// Determine if certificate verification should be skipped
					// Default to true for compatibility with self-signed certificates
					skipVerify := true
					if options["tls_skip_verify"] == "false" || options["tls_skip_verify"] == "0" {
						skipVerify = false
					}

					// Extract hostname from "hostname:port" format for TLS ServerName
					// This ensures proper SNI (Server Name Indication) in TLS handshake
					serverAddr := options["server"]
					hostname := serverAddr
					if host, _, err := net.SplitHostPort(serverAddr); err == nil {
						hostname = host
					}

					// Use tls.DialWithDialer to properly establish TLS connection with timeouts
					// This ensures read/write timeouts are applied to the underlying TLS connection
					// This is the same pattern used in main.go and product/index.go
					tlsConn, err := tls.DialWithDialer(
						&net.Dialer{
							Timeout: connectTimeout,
						},
						"tcp",
						serverAddr, // Still use full "hostname:port" for connection
						&tls.Config{
							ServerName:         hostname, // Explicitly set hostname for SNI
							InsecureSkipVerify: skipVerify,
						},
					)
					if err != nil {
						return nil, err
					}

					// Wrap TLS connection with Redis connection, properly setting read/write timeouts
					c = redis.NewConn(tlsConn, readTimeout, writeTimeout)
				} else {
					// Non-TLS connection (unchanged)
					c, err = redis.Dial("tcp", options["server"],
						redis.DialConnectTimeout(connectTimeout),
						redis.DialReadTimeout(readTimeout),
						redis.DialWriteTimeout(writeTimeout),
					)
					if err != nil {
						return nil, err
					}
				}

				// Handle AUTH and SELECT
				if options["password"] != "" {
					if _, err := c.Do("AUTH", options["password"]); err != nil {
						c.Close()
						return nil, err
					}
				}
				if options["database"] != "" {
					if _, err := c.Do("SELECT", options["database"]); err != nil {
						c.Close()
						return nil, err
					}
				}
				return c, err
			},
			TestOnBorrow: func(c redis.Conn, t time.Time) error {
				// Skip test for recently used connections (within 30 seconds)
				// This prevents unnecessary PINGs that can cause latency
				if time.Since(t) < 30*time.Second {
					return nil
				}
				// Use DoWithTimeout to prevent PING from hanging (max 1 second)
				// This is critical for AWS ElastiCache Serverless where cold TLS
				// handshakes can take 3+ seconds
				_, err := redis.DoWithTimeout(c, 1*time.Second, "PING")
				return err
			},
		},
		func(queue string) Fetcher {
			return NewFetch(queue, make(chan *Msg), make(chan bool))
		},
	}
}
