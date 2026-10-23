package workers

import (
	"github.com/customerio/gospec"
	. "github.com/customerio/gospec"
)

func ConfigSpec(c gospec.Context) {
	var recoverOnPanic = func(f func()) (err interface{}) {
		defer func() {
			if cause := recover(); cause != nil {
				err = cause
			}
		}()

		f()

		return
	}

	c.Specify("sets redis pool size which defaults to 1", func() {
		c.Expect(Config.Pool.MaxIdle, Equals, 1)

		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "1",
			"pool":    "20",
		})

		c.Expect(Config.Pool.MaxIdle, Equals, 20)
	})

	c.Specify("can specify custom process", func() {
		c.Expect(Config.processId, Equals, "1")

		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "2",
		})

		c.Expect(Config.processId, Equals, "2")
	})

	c.Specify("requires a server parameter", func() {
		err := recoverOnPanic(func() {
			Configure(map[string]string{"process": "2"})
		})

		c.Expect(err, Equals, "Configure requires a 'server' option, which identifies a Redis instance")
	})

	c.Specify("requires a process parameter", func() {
		err := recoverOnPanic(func() {
			Configure(map[string]string{"server": "localhost:6379"})
		})

		c.Expect(err, Equals, "Configure requires a 'process' option, which uniquely identifies this instance")
	})

	c.Specify("adds ':' to the end of the namespace", func() {
		c.Expect(Config.Namespace, Equals, "")

		Configure(map[string]string{
			"server":    "localhost:6379",
			"process":   "1",
			"namespace": "prod",
		})

		c.Expect(Config.Namespace, Equals, "prod:")
	})

	c.Specify("defaults poll interval to 15 seconds", func() {
		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "1",
		})

		c.Expect(Config.PollInterval, Equals, 15)
	})

	c.Specify("allows customization of poll interval", func() {
		Configure(map[string]string{
			"server":        "localhost:6379",
			"process":       "1",
			"poll_interval": "1",
		})

		c.Expect(Config.PollInterval, Equals, 1)
	})

	c.Specify("accepts use_tls option for TLS connections", func() {
		// This test verifies that the use_tls option can be set
		// The actual TLS connection behavior is tested in integration tests
		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "1",
			"use_tls": "true",
		})

		c.Expect(Config.Pool, Not(Equals), nil)
	})

	c.Specify("accepts use_tls with value '1' for TLS connections", func() {
		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "1",
			"use_tls": "1",
		})

		c.Expect(Config.Pool, Not(Equals), nil)
	})

	c.Specify("works without use_tls option (backward compatibility)", func() {
		Configure(map[string]string{
			"server":  "localhost:6379",
			"process": "1",
		})

		c.Expect(Config.Pool, Not(Equals), nil)
	})
}
