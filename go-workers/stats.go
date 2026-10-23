package workers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

type stats struct {
	Processed int         `json:"processed"`
	Failed    int         `json:"failed"`
	Jobs      interface{} `json:"jobs"`
	Enqueued  interface{} `json:"enqueued"`
	Retries   int64       `json:"retries"`
}

func Stats(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	jobs := make(map[string][]*map[string]interface{})
	enqueued := make(map[string]string)

	for _, m := range managers {
		queue := m.queueName()
		jobs[queue] = make([]*map[string]interface{}, 0)
		enqueued[queue] = ""
		for _, worker := range m.workers {
			message := worker.currentMsg
			startedAt := worker.startedAt

			if message != nil && startedAt > 0 {
				jobs[queue] = append(jobs[queue], &map[string]interface{}{
					"message":    message,
					"started_at": startedAt,
				})
			}
		}
	}

	stats := stats{
		0,
		0,
		jobs,
		enqueued,
		0,
	}

	conn := Config.Pool.Get()
	defer conn.Close()

	// Execute commands individually to avoid CROSSSLOT errors in Redis Cluster
	// MULTI/EXEC with multiple keys that hash to different slots fails in cluster mode
	processed, err := conn.Do("get", Config.Namespace+"stat:processed")
	if err == nil && processed != nil {
		stats.Processed, _ = strconv.Atoi(string(processed.([]byte)))
	}

	failed, err := conn.Do("get", Config.Namespace+"stat:failed")
	if err == nil && failed != nil {
		stats.Failed, _ = strconv.Atoi(string(failed.([]byte)))
	}

	retries, err := conn.Do("zcard", Config.Namespace+RETRY_KEY)
	if err == nil && retries != nil {
		stats.Retries = retries.(int64)
	}

	for key, _ := range enqueued {
		queueLen, err := conn.Do("llen", fmt.Sprintf("%squeue:%s", Config.Namespace, key))
		if err == nil && queueLen != nil {
			enqueued[key] = fmt.Sprintf("%d", queueLen.(int64))
		}
	}

	body, _ := json.MarshalIndent(stats, "", "  ")
	fmt.Fprintln(w, string(body))
}

type queueMessage struct {
	Queue      string `json:"queue"`
	Identifier string `json:"identifier"`
}

type identifierStatus struct {
	Status  bool                   `json:"status"`
	Error   error                  `json:"error"`
	Details map[string]interface{} `json:"details"`
}

// CheckQueueData checks whether identifier is part of args in messages in queue
func CheckQueueData(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var payload queueMessage
	response := identifierStatus{Status: false}

	decoder := json.NewDecoder(req.Body)
	err := decoder.Decode(&payload)
	if err != nil {
		response.Error = err
		return
	}
	response.Status, response.Details, response.Error = IdentifierInQueue(payload.Queue, payload.Identifier)
	if !response.Status {
		response.Status, response.Details, response.Error = CheckIdentifierInRetry(payload.Identifier)
	}
	body, _ := json.Marshal(response)
	fmt.Fprintln(w, string(body))
}

// IdentifierInQueue checks whether identifier is present in message of worker queue
func IdentifierInQueue(srcQueue, identifier string) (bool, map[string]interface{}, error) {
	for _, m := range managers {
		queue := m.queueName()
		if queue == srcQueue {
			for _, worker := range m.workers {
				message := worker.currentMsg
				startedAt := worker.startedAt
				if message != nil && startedAt > 0 {
					args, err := message.Args().Array()
					if err != nil {
						return false, nil, err
					}
					for _, arg := range args {
						if arg == identifier {
							return true, map[string]interface{}{
								"message":    message,
								"started_at": startedAt,
							}, nil
						}
					}
				}
			}
		}
	}
	return false, nil, nil
}

// CheckIdentifierInRetry checks whether identifier is present in retry queue
// Caution: In case of large retry queue, this function can be slow
func CheckIdentifierInRetry(identifier string) (bool, map[string]interface{}, error) {
	conn := Config.Pool.Get()
	defer conn.Close()
	// Execute command directly to avoid CROSSSLOT errors in Redis Cluster
	// Single key operation doesn't need MULTI/EXEC
	r, err := conn.Do("ZRANGE", Config.Namespace+RETRY_KEY, 0, -1)
	if err != nil {
		return false, nil, err
	}
	results := r.([]interface{})

	var object map[string]interface{}
	for _, alpha := range results {
		err = json.Unmarshal(alpha.([]byte), &object)
		if err != nil {
			return false, nil, err
		}
		if args, ok := object["args"]; ok {
			for _, arg := range args.([]interface{}) {
				if arg.(string) == identifier {
					return true, map[string]interface{}{
						"message": object,
					}, nil
				}
			}
		}
	}
	return false, nil, nil
}
