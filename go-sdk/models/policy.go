package models

import(
 "gitlab.com/pasarpolis/go-sdk"
 "gitlab.com/pasarpolis/go-sdk/utils"
 "gitlab.com/pasarpolis/go-sdk/request" 
 "encoding/json" 
)

type Policy struct{
  ApplicationNumber string `json:"application_no"` 
  ReferenceNumber string `json:"ref"`
  DocumentUrl string `json:"document_url"`
  PolicyNumber string `json:"policy_no"`
  StatusCode int64 `json:"status_code"`
  IssueDate string `json:"issue_date"`
  Status string `json:"status"`
}



func CreatePolicy(product string, params interface{}) (*Policy, error){
  client, err := pasarpolis.GetClient()
  if(err != nil){
    return nil, err
  }
  paramsMap, err := utils.ConvertInterfaceToMap(params)
  if(err != nil){
    return nil, err
  }
  paramsMap["product"] = product  

  path := "/api/v2/createpolicy/"

  requestManager := request.RequestManager{
    Domain: client.Host,
    ContentType: "application/json",
    Path: path,
    Params: paramsMap,
    PartnerId: client.PartnerCode,
    PartnerSecret: client.PartnerSecret,        
  }
  response, err := requestManager.Post()
  if(err != nil){
    return nil, err
  }

  var policy Policy
  err = json.Unmarshal([]byte(response.Body), &policy)
  if(err != nil){
    return nil, err
  }

  return &policy, nil
}


func GetPolicyStatus(referenceNumbers []string) ([]Policy, error){
  policies := []Policy{}
  client, err := pasarpolis.GetClient()
  if(err != nil){
    return policies, err
  }

  path := "/api/v2/policystatus/"
  params := map[string]interface{}{
    "ids": referenceNumbers,
  }

  requestManager := request.RequestManager{
    Domain: client.Host,
    ContentType: "application/json",
    Path: path,
    Params: params,
    PartnerId: client.PartnerCode,
    PartnerSecret: client.PartnerSecret,
  }

  response, err := requestManager.Post()
  if(err != nil){
    return policies, err
  }
  
  err = json.Unmarshal([]byte(response.Body), &policies)
  if(err != nil){
    return policies, err
  }

  return policies, nil

}