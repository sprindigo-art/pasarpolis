package models

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"testing"
	"time"

	pasarpolis "gitlab.com/pasarpolis/go-sdk.v2"
	models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

func TestPolicyCreation(t *testing.T) {
	_, err := pasarpolis.InitClient("dummy", "<secret-key>", "https://integrations-testing.pasarpolis.io")
	if err != nil {
		t.Errorf(err.Error())
	}
	jsonString := "{\"note\": \"\", \"userid\": \"\", \"package_id\": 1, \"travel_type\": 1, \"trip_reason\": 5, \"booking_code\": \"242428064\", \"reference_id\": \"146316\", \"transit_type\": 0, \"inception_date\": \"2018-12-22\", \"policy_insured\": [{\"city\": \"*\", \"name\": \"Titie Andelina Wiji\", \"email\": \"neha.shrivastava@pasarpolis.com\", \"gender\": \"Male\", \"address\": \"*\", \"phone_no\": \"*\", \"zip_code\": \"*\", \"handphone_no\": \"089999999999\", \"date_of_birth\": \"\", \"identity_type\": 2, \"insured_status\": 1, \"identity_number\": \"*\", \"policy_holder_status\": 1}], \"flight_information\": [{\"city\": \"Jakarta\", \"type\": 0, \"flight_code\": \"QG-22\", \"airport_code\": \"HLP\", \"departure_date\": \"2018-12-22 08:25:00\"}], \"policy_beneficiary\": [{\"name\": \"Titie Andelina Wiji\", \"relationship\": 11}], \"travel_destination\": 1}"
	var params map[string]interface{}
	json.Unmarshal([]byte(jsonString), &params)
	params["reference_id"] = fmt.Sprintf("%d-%d", time.Now().Unix(), rand.Intn(1000))
	policy, err := models.CreatePolicy("travel-protection", params)
	if err != nil {
		t.Errorf(err.Error())
		return
	}

	if policy.ReferenceNumber == "" {
		t.Errorf("Invalid reference number received")
		return
	}

	if policy.ApplicationNumber == "" {
		t.Errorf("Invalid application number received")
		return
	}
}

func TestPolicyStatus(t *testing.T) {
	jsonString := "{\"note\": \"\", \"userid\": \"\", \"package_id\": 1, \"travel_type\": 1, \"trip_reason\": 5, \"booking_code\": \"242428064\", \"reference_id\": \"146316\", \"transit_type\": 0, \"inception_date\": \"2018-12-22\", \"policy_insured\": [{\"city\": \"*\", \"name\": \"Titie Andelina Wiji\", \"email\": \"neha.shrivastava@pasarpolis.com\", \"gender\": \"Male\", \"address\": \"*\", \"phone_no\": \"*\", \"zip_code\": \"*\", \"handphone_no\": \"089999999999\", \"date_of_birth\": \"\", \"identity_type\": 2, \"insured_status\": 1, \"identity_number\": \"*\", \"policy_holder_status\": 1}], \"flight_information\": [{\"city\": \"Jakarta\", \"type\": 0, \"flight_code\": \"QG-22\", \"airport_code\": \"HLP\", \"departure_date\": \"2018-12-22 08:25:00\"}], \"policy_beneficiary\": [{\"name\": \"Titie Andelina Wiji\", \"relationship\": 11}], \"travel_destination\": 1}"
	var params map[string]interface{}
	json.Unmarshal([]byte(jsonString), &params)
	params["reference_id"] = fmt.Sprintf("%d-%d", time.Now().Unix(), rand.Intn(1000))
	policy, err := models.CreatePolicy("travel-protection", params)
	if err != nil {
		t.Errorf(err.Error())
		return
	}

	policies, err := models.GetPolicyStatus([]string{policy.ReferenceNumber})

	if err != nil {
		t.Errorf(err.Error())
		return
	}

	if len(policies) == 0 {
		t.Errorf("Zero policies received")
		return
	}

	policy1 := policies[0]

	if policy1.Status == "" {
		t.Errorf("Invalid status received")
		return
	}

}
