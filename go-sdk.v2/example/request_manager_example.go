package main

import (
	"fmt"

	pasarpolis "gitlab.com/pasarpolis/go-sdk.v2"
	pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

func main() {
	// pasarpolis.InitClient("akseleran", "05d6dad6-5f3b-4955-89e0-2cc1586fc86a", "https://integrations-sandbox.pasarpolis.io")
	// params := map[string]interface{}{}
	// params["nama_debitor"] = "Jacob"
	// params["email"] = "john.doe@example.com"
	// params["phone_no"] = "+6200000000000"
	// params["reference_id"] = "cip-000000045"
	// params["package_id"] = "asuransi-kredit-akseleran"
	// params["base_credit_amount"] = 1000000
	// params["contract_start_date"] = "2020-12-03 15:00:00"
	// params["contract_end_date"] = "2021-02-03 15:00:00"
	// params["loan_duration"] = 2
	// params["dob"] = "1994-02-03"
	// params["ktp_no"] = "3175091811880013"
	// params["recon_date"] = "2020-12-03 15:00:00"
	// params["last_property"] = true
	// policy, err := pasarpolis_models.CreatePolicy("credit-insurance-protection", params)
	// fmt.Println(policy)
	// fmt.Println(err)
	// pasarpolis.InitClient("shopee", "ff5ae273-e70b-4265-8f3c-1076ae340655", "https://integrations-sandbox.pasarpolis.io")
	// params := map[string]interface{}{}
	// params["address"] = "India"
	// params["agent_id"] = "789"
	// params["agent_name"] = "Reza"
	// params["email"] = "dhiaz@email.com"
	// params["end_datetime"] = "2021-04-19 19:00:00"
	// params["name"] = "ANkush"
	// params["package_id"] = "bundled"
	// params["phone_no"] = "6281219916270"
	// params["reference_id"] = "ref-02105"
	// params["service_code"] = "AX"
	// params["start_datetime"] = "2021-04-18 18:00:01"
	// policy, err := pasarpolis_models.ConfigCreatePolicy("crackscreen-insurance", params)
	pasarpolis.InitClient("shopee", "ff5ae273-e70b-4265-8f3c-1076ae340655", "https://integrations-sandbox.pasarpolis.io")
	refs := []string{"f4961bffdd5d792388d0f1a016404c03d3c67826", "8fda232d8603f7bedc1639d8b1587fe174a5a7c0"}
	policy, err := pasarpolis_models.GetPolicyStatusV3(refs)
	fmt.Println(policy)
	fmt.Println(policy[0])
	fmt.Println("******************************")
	fmt.Println(policy[0].ApplicationNumber)
	fmt.Println(policy[0].CoverageEndDate)
	fmt.Println(policy[0].CoverageStartDate)
	fmt.Println("-------------------------------")
	fmt.Println(policy[1])
	fmt.Println("******************************")
	fmt.Println(policy[1].ApplicationNumber)
	fmt.Println(policy[1].CoverageEndDate)
	fmt.Println(policy[1].CoverageStartDate)
	fmt.Println(policy[1].EndorsementToken)

	fmt.Println(err)
}
