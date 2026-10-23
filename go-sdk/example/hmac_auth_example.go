package main

import(
  "go-sdk/auth"
  "fmt"
)

func main(){
  p1 := map[string]interface{}{"a":"b","b":"a", "c": 1}
  p2 := map[string]interface{}{"a":"b","b":"a"}
  p1["d"] = p2

  auth := auth.HMAC{
    RequestBody: p1,
    Verb: "GET",
    Path: "/a/b/c",
    RequestType: "application/json",
    PartnerId: "edcsdvf",
    PartnerSecret: "dcdvf",
  }

  fmt.Println(auth.GetHMAC())
}