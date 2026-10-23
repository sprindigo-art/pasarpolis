# TLS Support for go-workers

## Overview

The go-workers library now supports TLS/SSL connections to Redis. This is particularly useful when connecting to Redis instances that require encrypted connections, such as AWS ElastiCache, Azure Cache for Redis, or other cloud-hosted Redis services.

## Configuration

To enable TLS support, simply add the `use_tls` option to your workers configuration:

### Basic TLS Configuration

```go
workers.Configure(map[string]string{
    "server":   "your-redis-server.com:6380",
    "database": "0",
    "pool":     "30",
    "process":  "1",
    "use_tls":  "true",  // Enable TLS
    // "tls_skip_verify": "false",  // Optional: Enable strict certificate verification (default: true for compatibility)
})
```

### With Authentication

```go
workers.Configure(map[string]string{
    "server":   "your-redis-server.com:6380",
    "password": "your-redis-password",
    "database": "0",
    "pool":     "30",
    "process":  "1",
    "use_tls":  "true",  // Enable TLS
})
```

## Configuration Options

### use_tls

The `use_tls` option accepts the following values:
- `"true"` - Enables TLS
- `"1"` - Enables TLS
- Any other value or omitting the option will use standard non-TLS connection

### tls_skip_verify (Optional)

Controls TLS certificate verification:
- `"true"` or omitted - Skip certificate verification (default, works with self-signed certificates)
- `"false"` or `"0"` - Enable strict certificate verification (recommended for production with valid certificates)

## Implementation Details

When TLS is enabled, the library:
1. Establishes a TCP connection to the Redis server with configurable timeouts
2. Performs TLS handshake with configurable certificate verification
3. All subsequent Redis commands are encrypted over the TLS connection

The current implementation defaults:
- **Connection timeout**: 5 seconds
- **Read timeout**: 3 seconds
- **Write timeout**: 3 seconds
- `InsecureSkipVerify: true` by default for compatibility with self-signed certificates
- Set `tls_skip_verify: "false"` to enable strict certificate verification
- When verification is enabled, uses the system's certificate pool

### Timeouts

The library uses sensible timeout defaults to prevent indefinite hangs:
- **DialConnectTimeout**: 5 seconds - Maximum time to establish connection
- **DialReadTimeout**: 3 seconds - Maximum time to read responses
- **DialWriteTimeout**: 3 seconds - Maximum time to write commands

These timeouts apply to both TLS and non-TLS connections, ensuring that Redis operations fail quickly rather than hanging indefinitely during network issues or when Redis is under heavy load.

## Security Considerations

- **Default behavior**: Certificate verification is skipped (`InsecureSkipVerify: true`) for compatibility
- **For production**: Set `tls_skip_verify: "false"` and ensure your Redis server has valid certificates from a trusted CA
- **Self-signed certificates**: The default setting works with self-signed certificates
- **Development vs Production**: Use default for development, enable verification for production
- Consider using certificate pinning for additional security if needed

### Enabling Strict Certificate Verification

For production environments with valid CA-signed certificates:

```go
workers.Configure(map[string]string{
    "server":          "redis.production.com:6380",
    "password":        "your-password",
    "use_tls":         "true",
    "tls_skip_verify": "false",  // Enable strict verification
})
```

## Example: AWS ElastiCache with TLS

```go
package main

import (
    "github.com/Pasarpolis/go-worker"
)

func myJob(message *workers.Msg) {
    // Process your message
}

func main() {
    workers.Configure(map[string]string{
        "server":   "your-elasticache-cluster.cache.amazonaws.com:6379",
        "password": "your-auth-token",
        "database": "0",
        "pool":     "30",
        "process":  "1",
        "use_tls":  "true",
    })

    workers.Process("myqueue", myJob, 10)
    workers.Run()
}
```

## Example: Azure Cache for Redis with TLS

```go
package main

import (
    "github.com/Pasarpolis/go-worker"
)

func myJob(message *workers.Msg) {
    // Process your message
}

func main() {
    workers.Configure(map[string]string{
        "server":   "your-cache.redis.cache.windows.net:6380",
        "password": "your-access-key",
        "database": "0",
        "pool":     "30",
        "process":  "1",
        "use_tls":  "true",
    })

    workers.Process("myqueue", myJob, 10)
    workers.Run()
}
```

## Troubleshooting

### Certificate Verification Errors

If you encounter certificate verification errors:
1. Ensure your Redis server has a valid TLS certificate
2. Check that the server hostname matches the certificate CN/SAN
3. Verify that the certificate is not expired
4. Ensure your system's CA certificates are up to date

### Connection Timeouts

If connections are timing out:
1. Verify the Redis server port (typically 6380 for TLS, 6379 for non-TLS)
2. Check firewall rules allow TLS connections
3. Ensure the Redis server is configured to accept TLS connections

## Code Changes

The TLS support was added to the `config.go` file with the following changes:

1. **Import added**: `crypto/tls` package
2. **Configuration logic**: The `Dial` function now checks for the `use_tls` option
3. **Conditional TLS**: When enabled, `redis.DialTLSConfig` is used with secure defaults

### Modified Code Section

```go
// Check if TLS should be used
if options["use_tls"] == "true" || options["use_tls"] == "1" {
    c, err = redis.Dial("tcp", options["server"],
        redis.DialTLSConfig(&tls.Config{
            InsecureSkipVerify: false,
        }),
    )
} else {
    c, err = redis.Dial("tcp", options["server"])
}
```

## Backward Compatibility

This change is fully backward compatible. Existing code without the `use_tls` option will continue to work exactly as before, using standard non-TLS connections.

