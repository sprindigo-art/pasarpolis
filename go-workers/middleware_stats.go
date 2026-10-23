package workers

import (
	"time"
)

type MiddlewareStats struct{}

func (l *MiddlewareStats) Call(queue string, message *Msg, next func() bool) (acknowledge bool) {
	defer func() {
		if e := recover(); e != nil {
			incrementStats("failed")
			panic(e)
		}
	}()

	acknowledge = next()

	incrementStats("processed")

	return
}

func incrementStats(metric string) {
	conn := Config.Pool.Get()
	defer conn.Close()

	today := time.Now().UTC().Format("2006-01-02")

	// Execute commands individually to avoid CROSSSLOT errors in Redis Cluster
	// MULTI/EXEC with multiple keys that hash to different slots fails in cluster mode
	if _, err := conn.Do("incr", Config.Namespace+"stat:"+metric); err != nil {
		Logger.Println("couldn't save stats:", err)
	}
	if _, err := conn.Do("incr", Config.Namespace+"stat:"+metric+":"+today); err != nil {
		Logger.Println("couldn't save stats:", err)
	}
}
