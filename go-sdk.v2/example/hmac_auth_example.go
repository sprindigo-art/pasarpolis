package main

import (
	"fmt"

	"go-sdk.v2/auth"
)

func mainTest() {
	p1 := map[string]interface{}{"a": "b", "b": "a", "c": 1}
	p2 := map[string]interface{}{"a": "b", "b": "a"}
	p1["d"] = p2

	auth := auth.HMAC{
		RequestBody:   p1,
		Verb:          "GET",
		Path:          "/a/b/c",
		RequestType:   "application/json",
		PartnerID:     "edcsdvf",
		PartnerSecret: "dcdvf",
	}

	fmt.Println(auth.GetHMAC())
}
