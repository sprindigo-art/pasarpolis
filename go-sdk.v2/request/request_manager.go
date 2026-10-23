package request

import (
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"

	"gitlab.com/pasarpolis/go-sdk.v2/auth"
	"gitlab.com/pasarpolis/go-sdk.v2/utils"
)

//RequestManager request struct
type RequestManager struct {
	Domain        string
	Path          string
	ContentType   string
	Params        map[string]interface{}
	PartnerID     string
	PartnerSecret string
}

//AggregateRequestManager request struct
type AggregateRequestManager struct {
	Domain        string
	Path          string
	ContentType   string
	Params        []map[string]interface{}
	PartnerID     string
	PartnerSecret string
}

//ResponseStruct response struct for api
type ResponseStruct struct {
	Body       string
	StatusCode string
	Code       int
}

// APIError custom error
type APIError struct {
	Code    int
	Message string
}

func (e APIError) Error() string {
	return fmt.Sprintf("Error occured: Status Code: %d Error Message: %s", e.Code, e.Message)
}

//GetStringBody convert json to string
func (requestManager *RequestManager) GetStringBody() (string, error) {
	bodyString, err := json.Marshal(requestManager.Params)
	if err != nil {
		return "", err
	}

	return string(bodyString), nil
}

func (requestManager *RequestManager) callNetwork(verb string) (*ResponseStruct, error) {
	if requestManager.Params == nil {
		requestManager.Params = map[string]interface{}{}
	}

	var queryString string
	if verb == "GET" {
		queryString = utils.GetQueryStringFromMap(requestManager.Params)
	}

	hmac := auth.HMAC{
		RequestBody:   requestManager.Params,
		Verb:          verb,
		Path:          requestManager.Path,
		RequestType:   requestManager.ContentType,
		PartnerID:     requestManager.PartnerID,
		PartnerSecret: requestManager.PartnerSecret,
	}

	hmacReturn, err := hmac.GetHMAC()

	if err != nil {
		return nil, err
	}

	signature := hmacReturn.PartnerID + ":" + hmacReturn.Hmac
	base64Signature := base64.StdEncoding.EncodeToString([]byte(signature))

	urlObject, err := url.Parse(requestManager.Domain)
	if err != nil {
		return nil, err
	}

	urlObject.Path = requestManager.Path
	urlObject.RawQuery = queryString

	client := http.Client{}
	var requestBody io.Reader = nil

	if verb != "GET" {
		jsonString, err := requestManager.GetStringBody()
		if err != nil {
			return nil, err
		}
		requestBody = strings.NewReader(jsonString)
	}

	request, err := http.NewRequest(verb, urlObject.String(), requestBody)
	if err != nil {
		return nil, err
	}

	// Set Headers
	request.Header.Set("Content-MD5", hmacReturn.ContentMd5)
	request.Header.Set("Content-Type", hmacReturn.RequestType)
	request.Header.Set("X-PP-Date", hmacReturn.Timestamp)
	request.Header.Set("Partner-Code", hmacReturn.PartnerID)
	request.Header.Set("Signature", base64Signature)
	request.Header.Set("Accept", "application/json")
	request.Header.Set("Via", "go-sdk.v2")
	request.Header.Set("User-Agent",
		"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
	request.Header.Set("API-Call-Source", "sdk-golang")

	resp, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	bodyByte, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	body := string(bodyByte)

	if resp.StatusCode >= 200 && resp.StatusCode < 300 || resp.StatusCode == 409 {
		return &ResponseStruct{StatusCode: resp.Status, Body: body, Code: resp.StatusCode}, nil
	} else if resp.StatusCode >= 400 && resp.StatusCode < 600 {
		return nil, APIError{Code: resp.StatusCode, Message: body}
	}

	return nil, errors.New("Unknown code error")
}

//Get get api call
func (requestManager *RequestManager) Get() (*ResponseStruct, error) {
	return requestManager.callNetwork("GET")
}

//Post post api call
func (requestManager *RequestManager) Post() (*ResponseStruct, error) {
	return requestManager.callNetwork("POST")
}

//AggregatePost post api call
func (requestManager *AggregateRequestManager) AggregatePost() (*ResponseStruct, error) {
	return requestManager.aggregateCallNetwork("POST")
}

func (requestManager *AggregateRequestManager) aggregateCallNetwork(verb string) (*ResponseStruct, error) {
	if requestManager.Params == nil {
		requestManager.Params = []map[string]interface{}{}
	}

	var queryString string
	if verb == "GET" {
		queryString = utils.GetQueryStringFromMapAggregate(requestManager.Params)
	}

	hmac := auth.HMAC{
		RequestBody:   requestManager.Params,
		Verb:          verb,
		Path:          requestManager.Path,
		RequestType:   requestManager.ContentType,
		PartnerID:     requestManager.PartnerID,
		PartnerSecret: requestManager.PartnerSecret,
	}

	hmacReturn, err := hmac.GetHMAC()

	if err != nil {
		return nil, err
	}

	signature := hmacReturn.PartnerID + ":" + hmacReturn.Hmac
	base64Signature := base64.StdEncoding.EncodeToString([]byte(signature))

	urlObject, err := url.Parse(requestManager.Domain)
	if err != nil {
		return nil, err
	}

	urlObject.Path = requestManager.Path
	urlObject.RawQuery = queryString

	client := http.Client{}
	var requestBody io.Reader = nil

	if verb != "GET" {
		jsonString, err := requestManager.GetStringBodyAggregate()
		if err != nil {
			return nil, err
		}
		requestBody = strings.NewReader(jsonString)
	}

	request, err := http.NewRequest(verb, urlObject.String(), requestBody)
	if err != nil {
		return nil, err
	}

	// Set Headers
	request.Header.Set("Content-MD5", hmacReturn.ContentMd5)
	request.Header.Set("Content-Type", hmacReturn.RequestType)
	request.Header.Set("X-PP-Date", hmacReturn.Timestamp)
	request.Header.Set("Partner-Code", hmacReturn.PartnerID)
	request.Header.Set("Signature", base64Signature)
	request.Header.Set("Accept", "application/json")
	request.Header.Set("Via", "go-sdk.v2")
	request.Header.Set("User-Agent",
		"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
	request.Header.Set("API-Call-Source", "sdk-golang")

	resp, err := client.Do(request)
	if err != nil {
		return nil, err
	}

	bodyByte, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	body := string(bodyByte)

	if resp.StatusCode >= 200 && resp.StatusCode < 300 || resp.StatusCode == 409 {
		return &ResponseStruct{StatusCode: resp.Status, Body: body, Code: resp.StatusCode}, nil
	} else if resp.StatusCode >= 400 && resp.StatusCode < 600 {
		return nil, APIError{Code: resp.StatusCode, Message: body}
	}

	return nil, errors.New("Unknown code error")
}

//GetStringBodyAggregate convert json to string
func (requestManager *AggregateRequestManager) GetStringBodyAggregate() (string, error) {
	bodyString, err := json.Marshal(requestManager.Params)
	if err != nil {
		return "", err
	}

	return string(bodyString), nil
}
