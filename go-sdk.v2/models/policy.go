package models

import (
	"encoding/json"
	"fmt"

	pasarpolis "gitlab.com/pasarpolis/go-sdk.v2"
	"gitlab.com/pasarpolis/go-sdk.v2/request"
	"gitlab.com/pasarpolis/go-sdk.v2/utils"
)

//Policy response structure for apis
type Policy struct {
	ApplicationNumber string `json:"application_no"`
	ReferenceNumber   string `json:"ref"`
	Premium           int64  `json:"premium"`
	DocumentURL       string `json:"document_url"`
	PolicyNumber      string `json:"policy_no"`
	StatusCode        int64  `json:"status_code"`
	Status            string `json:"status"`
	IssueDate         string `json:"issue_date"`
	Message           string `json:"message"`
	PartnerRef        string `json:"partner_ref"`
	ProductKey        string `json:"product_key"`
	ExpiryDate        string `json:"expiry_date"`
	ActivationURL     string `json:"activation_url"`
	ClosureID         int64  `json:"closure_id"`
	CoverageStartDate string `json:"coverage_start_date"`
	CoverageEndDate   string `json:"coverage_end_date"`
}

//PolicyStatusV3 response structure for apis
type PolicyStatusV3 struct {
	ApplicationNumber string `json:"application_no"`
	ReferenceNumber   string `json:"ref"`
	Premium           int64  `json:"premium"`
	DocumentURL       string `json:"document_url"`
	PolicyNumber      string `json:"policy_no"`
	Status            string `json:"status"`
	PartnerRef        string `json:"partner_ref"`
	ProductKey        string `json:"product_key"`
	PackageCode       string `json:"package_code"`
	ActivationURL     string `json:"activation_url"`
	ClosureID         int64  `json:"closure_id"`
	CoverageStartDate string `json:"coverage_start_date"`
	CoverageEndDate   string `json:"coverage_end_date"`
	EndorsementToken  string `json:"endorsement_token"`
	EndorsementStatus string `json:"endorsement_status"`
}

// GetPolicyDetailsRequestDTO represents the structure used to fetch details of a policy
type GetPolicyDetailsRequestDTO struct {
	ID string `json:"id"`
}

//ConfigCreatePolicy function to create a single policy for new config products
func ConfigCreatePolicy(product string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}

	path := fmt.Sprintf("/api/v1/config/createpolicy/%s", product)

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		err = json.Unmarshal([]byte(responseString), &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//ConfigValidatePolicy function to validate a single policy request for new config products
func ConfigValidatePolicy(product string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}

	path := fmt.Sprintf("/api/v1/config/validatepolicy/%s", product)

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		err = json.Unmarshal([]byte(responseString), &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//CreatePolicy function to create a single policy
func CreatePolicy(product string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}
	paramsMap["product"] = product

	path := "/api/v2/createpolicy/"

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		var transformResponse interface{}
		err := json.Unmarshal([]byte(responseString), &transformResponse)
		if err != nil {
			return nil, err
		}
		resp := transformResponse.(map[string]interface{})
		details := resp["detail"].(map[string]interface{})
		detailBytes, err := json.Marshal(details)
		if err != nil {
			return nil, err
		}
		err = json.Unmarshal(detailBytes, &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//ValidatePolicy function to validate a single policy request for products created with traditional flow
func ValidatePolicy(product string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}
	paramsMap["product"] = product

	path := "/api/v2/validatepolicy/"

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		var transformResponse interface{}
		err := json.Unmarshal([]byte(responseString), &transformResponse)
		if err != nil {
			return nil, err
		}
		resp := transformResponse.(map[string]interface{})
		details := resp["detail"].(map[string]interface{})
		detailBytes, err := json.Marshal(details)
		if err != nil {
			return nil, err
		}
		err = json.Unmarshal(detailBytes, &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//CreateAggregatePolicy function to create multiple policies
func CreateAggregatePolicy(product string, params []interface{}) (map[string]interface{}, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap := make([]map[string]interface{}, 0, 100)
	for i := 0; i < len(params); i++ {
		paramMap, err := utils.ConvertInterfaceToMap(params[i])
		if err != nil {
			return nil, err
		}
		paramMap["product"] = product
		paramsMap = append(paramsMap, paramMap)
	}

	path := "/api/v3/createaggregatepolicy/"

	requestManager := request.AggregateRequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.AggregatePost()
	if err != nil {
		return nil, err
	}
	policies := map[string]interface{}{}
	if response.Code == 200 || response.Code == 201 || response.Code == 409 {
		err = json.Unmarshal([]byte(response.Body), &policies)
		if err != nil {
			return nil, err
		}
	}
	return policies, nil
}

//ValidateAggregatePolicy function to validate multiple policies
func ValidateAggregatePolicy(product string, params []interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap := make([]map[string]interface{}, 0, 100)
	for i := 0; i < len(params); i++ {
		paramMap, err := utils.ConvertInterfaceToMap(params[i])
		if err != nil {
			return nil, err
		}
		paramMap["product"] = product
		paramsMap = append(paramsMap, paramMap)
	}

	path := "/api/v2/validateaggregatepolicy/"

	requestManager := request.AggregateRequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.AggregatePost()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		var transformResponse interface{}
		err := json.Unmarshal([]byte(responseString), &transformResponse)
		if err != nil {
			return nil, err
		}
		resp := transformResponse.(map[string]interface{})
		details := resp["detail"].(map[string]interface{})
		detailBytes, err := json.Marshal(details)
		if err != nil {
			return nil, err
		}
		err = json.Unmarshal(detailBytes, &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	return &policy, nil
}

//ConfigCreateAggregatePolicy function to create multiple config policies
func ConfigCreateAggregatePolicy(product string, params []interface{}) (map[string]interface{}, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap := make([]map[string]interface{}, 0, 100)
	for i := 0; i < len(params); i++ {
		paramMap, err := utils.ConvertInterfaceToMap(params[i])
		if err != nil {
			return nil, err
		}
		paramMap["product"] = product
		paramsMap = append(paramsMap, paramMap)
	}

	path := "/api/v1/config/createaggregatepolicy/"

	requestManager := request.AggregateRequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.AggregatePost()
	if err != nil {
		return nil, err
	}
	policies := map[string]interface{}{}
	if response.Code == 200 || response.Code == 201 || response.Code == 409 {
		err = json.Unmarshal([]byte(response.Body), &policies)
		if err != nil {
			return nil, err
		}
	}
	return policies, nil
}

//ConfigValidateAggregatePolicy function to validate multiple config policies
func ConfigValidateAggregatePolicy(product string, params []interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap := make([]map[string]interface{}, 0, 100)
	for i := 0; i < len(params); i++ {
		paramMap, err := utils.ConvertInterfaceToMap(params[i])
		if err != nil {
			return nil, err
		}
		paramMap["product"] = product
		paramsMap = append(paramsMap, paramMap)
	}

	path := "/api/v1/config/validateaggregatepolicy/"

	requestManager := request.AggregateRequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.AggregatePost()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 409 {
		responseString := (*response).Body
		var transformResponse interface{}
		err := json.Unmarshal([]byte(responseString), &transformResponse)
		if err != nil {
			return nil, err
		}
		resp := transformResponse.(map[string]interface{})
		details := resp["detail"].(map[string]interface{})
		detailBytes, err := json.Marshal(details)
		if err != nil {
			return nil, err
		}
		err = json.Unmarshal(detailBytes, &policy)
		if err != nil {
			return nil, err
		}
	} else if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	return &policy, nil
}

//GetPolicyStatus function to fetch policy status using ref_id
func GetPolicyStatus(referenceNumbers []string) ([]Policy, error) {
	policies := []Policy{}
	client, err := pasarpolis.GetClient()
	if err != nil {
		return policies, err
	}

	path := "/api/v2/policystatus/"
	params := map[string]interface{}{
		"ids": referenceNumbers,
	}

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        params,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}

	response, err := requestManager.Post()
	if err != nil {
		return policies, err
	}

	err = json.Unmarshal([]byte(response.Body), &policies)
	if err != nil {
		return policies, err
	}
	return policies, nil
}

//GetPolicyStatusV3 function to fetch policy status using ref_id
func GetPolicyStatusV3(referenceNumbers []string) ([]PolicyStatusV3, error) {
	policies := []PolicyStatusV3{}
	client, err := pasarpolis.GetClient()
	if err != nil {
		return policies, err
	}

	path := "/api/v3/policystatus/"
	params := map[string]interface{}{
		"ids": referenceNumbers,
	}

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        params,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}

	response, err := requestManager.Post()
	if err != nil {
		return policies, err
	}

	err = json.Unmarshal([]byte(response.Body), &policies)
	if err != nil {
		return policies, err
	}
	return policies, nil
}

//CancelPolicy function to cancel a single policy
func CancelPolicy(refID string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}

	path := fmt.Sprintf("/api/v3/cancellation/%s", refID)

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//TerminatePolicy function to terminate a single policy
func TerminatePolicy(refID string, params interface{}) (*Policy, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap, err := utils.ConvertInterfaceToMap(params)
	if err != nil {
		return nil, err
	}

	path := fmt.Sprintf("/api/v3/termination/%s", refID)

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	var policy Policy
	if response.Code == 200 || response.Code == 201 {
		err = json.Unmarshal([]byte(response.Body), &policy)
		if err != nil {
			return nil, err
		}
	}
	policy.StatusCode = int64(response.Code)
	return &policy, nil
}

//CreateMultiplePolicyByID function to create multiple policies but no aggregate policy created event generated
func CreateMultiplePolicyByID(product string, params []interface{}, aggregateReferenceID string) (map[string]interface{}, error) {
	client, err := pasarpolis.GetClient()
	if err != nil {
		return nil, err
	}
	paramsMap := make(map[string]interface{})
	dataMap := make([]map[string]interface{}, 0, 100)
	for i := 0; i < len(params); i++ {
		param, err := utils.ConvertInterfaceToMap(params[i])
		if err != nil {
			return nil, err
		}
		param["product"] = product
		dataMap = append(dataMap, param)
	}
	paramsMap["aggregate_reference_id"] = aggregateReferenceID
	paramsMap["data"] = dataMap

	path := "/api/v3/createmultiplepolicybyid/"

	requestManager := request.RequestManager{
		Domain:        client.Host,
		ContentType:   "application/json",
		Path:          path,
		Params:        paramsMap,
		PartnerID:     client.PartnerCode,
		PartnerSecret: client.PartnerSecret,
	}
	response, err := requestManager.Post()
	if err != nil {
		return nil, err
	}
	policies := map[string]interface{}{}
	if response.Code == 200 || response.Code == 201 || response.Code == 409 {
		err = json.Unmarshal([]byte(response.Body), &policies)
		if err != nil {
			return nil, err
		}
	}
	return policies, nil
}
