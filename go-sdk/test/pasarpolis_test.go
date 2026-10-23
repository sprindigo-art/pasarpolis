package test

import (
  "testing"
  "gitlab.com/pasarpolis/go-sdk"
)


func TestInitClient(t *testing.T){
  client, err := pasarpolis.InitClient("pasarpolis","a8516a5b-6ce2-4268-947e-6f10761c91cb","https://integrations-testing.pasarpolis.com")
  if(client == nil){
    t.Errorf("Client is null event after initialization")
    return
  }

  if(err != nil){
    t.Errorf(err.Error())
    return
  }
}


func TestGetClient(t *testing.T){
  client, err := pasarpolis.GetClient()
  if(err != nil){
    t.Errorf(err.Error())
    return
  }
  if(client == nil){
    t.Errorf("Null client found")
    return
  }
}

