package main

import(
  "gitlab.com/pasarpolis/go-sdk/request"
  "fmt"
)

func main(){
  p1 := map[string]interface{}{"a":"b","b":"a", "c": 1}
  p2 := map[string]interface{}{"a":"b","b":"a"}
  p1["d"] = p2

  requestManager := request.RequestManager{
    Domain: "http://localhost/",    
    Path: "/api/v2/policystatus/",
    ContentType: "application/json",
    PartnerId: "pasarpolis",
    PartnerSecret: "dcdvf",
    Params: p1,
  }

  fmt.Println(requestManager.Post())
}