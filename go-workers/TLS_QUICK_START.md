# TLS Support - Quick Start Guide

## 🚀 Quick Configuration

Add `"use_tls": "true"` to your workers configuration:

```go
workers.Configure(map[string]string{
    "server":   "your-redis-server.com:6380",
    "password": "your-password",
    "database": "0",
    "pool":     "30",
    "process":  "1",
    "use_tls":  "true",  // ⭐ Add this line
})
```

## ✅ What Changed

The go-workers library now natively supports the `use_tls` configuration option that was previously causing errors in core-worker.

## 📋 Supported Values

- `"use_tls": "true"` ✅
- `"use_tls": "1"` ✅
- Omit for non-TLS (backward compatible) ✅

## 🔒 Security

- **Default**: Certificate verification **skipped** (compatible with self-signed certificates)
- **Production**: Set `tls_skip_verify: "false"` to enable strict verification
- All Redis commands encrypted over TLS

### For Production (with valid certificates):
```go
workers.Configure(map[string]string{
    "server":          "redis.prod.com:6380",
    "use_tls":         "true",
    "tls_skip_verify": "false",  // Enable strict verification
})
```

## 🌐 Common Use Cases

### AWS ElastiCache

```go
workers.Configure(map[string]string{
    "server":   "your-cluster.cache.amazonaws.com:6379",
    "password": "your-auth-token",
    "process":  "worker-1",
    "use_tls":  "true",
})
```

### Azure Cache for Redis

```go
workers.Configure(map[string]string{
    "server":   "your-cache.redis.cache.windows.net:6380",
    "password": "your-access-key",
    "process":  "worker-1",
    "use_tls":  "true",
})
```

### Local Redis with TLS

```go
workers.Configure(map[string]string{
    "server":   "localhost:6380",
    "process":  "worker-1",
    "use_tls":  "true",
})
```

## 📝 Migration Guide

### Before (would cause error)

```go
workers.Configure(map[string]string{
    "server":   "redis.example.com:6379",
    "password": "secret",
    "process":  "1",
    // "use_tls" not supported - would be ignored or cause issues
})
```

### After (fully supported)

```go
workers.Configure(map[string]string{
    "server":   "redis.example.com:6380",  // Note: often port 6380 for TLS
    "password": "secret",
    "process":  "1",
    "use_tls":  "true",  // ✅ Now fully supported!
})
```

## 📚 More Information

- **Detailed Documentation**: See [TLS_SUPPORT.md](TLS_SUPPORT.md)
- **Complete Changes**: See [CHANGES_SUMMARY.md](CHANGES_SUMMARY.md)
- **Main README**: See [README.md](README.md)

## ⚠️ Important Notes

1. **Port**: TLS-enabled Redis typically uses port 6380 (not 6379)
2. **Certificates**: Ensure your Redis server has valid TLS certificates
3. **Testing**: Test in development environment first
4. **Backward Compatible**: Existing code without `use_tls` continues to work

## 🐛 Troubleshooting

### Certificate Errors
- Verify Redis server certificate is valid and not expired
- Check hostname matches certificate CN/SAN
- Ensure system CA certificates are up to date

### Connection Timeouts
- Verify correct port (usually 6380 for TLS)
- Check firewall rules allow TLS connections
- Confirm Redis server accepts TLS connections

---

**Need Help?** Check the detailed [TLS_SUPPORT.md](TLS_SUPPORT.md) guide for comprehensive troubleshooting and examples.

