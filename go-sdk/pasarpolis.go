package pasarpolis

import "errors"

var client *PasarpolisClient = nil

// Define pasarpolis client
type PasarpolisClient struct{
  PartnerCode string
  PartnerSecret string
  Host string
}



func InitClient(partnerCode, partnerSecret, host string) (*PasarpolisClient, error){

  if client != nil{    
    return client, errors.New("Client is already created")
  }

  client = &PasarpolisClient{PartnerCode: partnerCode, PartnerSecret: partnerSecret, Host: host}
  return client, nil
}

func GetClient() (*PasarpolisClient, error){
  if client == nil{
    return client, errors.New("Client not implemented")
  }

  return client, nil  
}