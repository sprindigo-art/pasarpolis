package workers

import "testing"

// TestScheduledTargetQueueMatchesFetcher checks that a job moved by the
// scheduled/retry poller lands in the exact list the fetcher pops from and
// Enqueue pushes to. It only builds key strings, so it needs no Redis.
func TestScheduledTargetQueueMatchesFetcher(t *testing.T) {
	was := Config
	defer func() { Config = was }()

	for _, tc := range []struct {
		namespace string
		queue     string
		want      string
	}{
		{"pp-core", "creation-default", "{creation-default}pp-core:queue:creation-default"},
		{"pp-core", "default", "{default}pp-core:queue:default"},
		{"", "creation-default", "{creation-default}queue:creation-default"},
		{"", "default", "{default}queue:default"},
	} {
		Configure(map[string]string{
			"server":    "localhost:6379",
			"process":   "1",
			"namespace": tc.namespace,
		})

		m := newManager(tc.queue, nil, 1)
		fetcherKey := addHashTag(m.fetch.Queue())
		enqueueKey := addHashTagForEnqueue(Config.Namespace + "queue:" + tc.queue)

		if fetcherKey != tc.want {
			t.Errorf("namespace %q queue %q: fetcher key = %q, want %q", tc.namespace, tc.queue, fetcherKey, tc.want)
		}
		if enqueueKey != fetcherKey {
			t.Errorf("namespace %q queue %q: enqueue key %q != fetcher key %q", tc.namespace, tc.queue, enqueueKey, fetcherKey)
		}

		// The retry middleware stores the manager's queue name (namespaced),
		// EnqueueIn/EnqueueAt store the bare queue name.
		for _, msgQueue := range []string{m.queueName(), tc.queue} {
			if got := scheduledTargetQueue(msgQueue); got != fetcherKey {
				t.Errorf("namespace %q message queue %q: poller key %q != fetcher key %q", tc.namespace, msgQueue, got, fetcherKey)
			}
		}
	}
}
