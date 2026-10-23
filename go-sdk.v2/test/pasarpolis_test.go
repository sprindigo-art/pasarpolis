package test

import (
	"testing"

	pasarpolis "gitlab.com/pasarpolis/go-sdk.v2"
)

func TestInitClient(t *testing.T) {
	client, err := pasarpolis.InitClient("dummy", "<secret-key>", "https://integrations-testing.pasarpolis.io")
	if client == nil {
		t.Errorf("Client is null event after initialization")
		return
	}

	if err != nil {
		t.Errorf(err.Error())
		return
	}
}

func TestGetClient(t *testing.T) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		t.Errorf(err.Error())
		return
	}
	if client == nil {
		t.Errorf("Null client found")
		return
	}
}
