package request

import(
  "net/http"
  "net/url"
  "gitlab.com/pasarpolis/go-sdk/utils"
  "gitlab.com/pasarpolis/go-sdk/auth"  
  "encoding/base64"
  "encoding/json"
  "io"  
  "io/ioutil"
  "strings"
  "errors"
)

type RequestManager struct{
  Domain string
  Path string
  ContentType string
  Params map[string]interface{}
  PartnerId string
  PartnerSecret string
}

type ResponseStruct struct{
  Body string
  StatusCode string
}


func (requestManager *RequestManager) GetStringBody() (string, error){
  bodyString, err := json.Marshal(requestManager.Params)
  if(err != nil){
    return "", err
  }

  return string(bodyString), nil
}
  

func (requestManager *RequestManager) callNetwork(verb string) (*ResponseStruct, error){
  if(requestManager.Params == nil){
    requestManager.Params = map[string]interface{}{}
  }

  var queryString string
  if(verb == "GET"){
    queryString = utils.GetQueryStringFromMap(requestManager.Params)    
  }

  hmac := auth.HMAC{
    RequestBody: requestManager.Params,
    Verb: verb,
    Path: requestManager.Path,
    RequestType: requestManager.ContentType,
    PartnerId: requestManager.PartnerId,
    PartnerSecret: requestManager.PartnerSecret,
  }

  hmacReturn, err := hmac.GetHMAC()

  if(err != nil){
    return nil, err
  }


  signature := hmacReturn.PartnerId + ":" + hmacReturn.Hmac
  base64Signature := base64.StdEncoding.EncodeToString([]byte(signature))

  urlObject, err := url.Parse(requestManager.Domain)
  if(err != nil){
    return nil, err
  }


  urlObject.Path = requestManager.Path
  urlObject.RawQuery = queryString

  client := http.Client{}
  var requestBody io.Reader = nil

  if(verb != "GET"){
    jsonString, err := requestManager.GetStringBody()
    if(err != nil){
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
  request.Header.Set("Partner-Code", hmacReturn.PartnerId)
  request.Header.Set("Signature", base64Signature)  
  request.Header.Set("Accept", "application/json")
  request.Header.Set("User-Agent", 
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")

  resp, err := client.Do(request)
  if err != nil {
    return nil, err
  }

  bodyByte, err := ioutil.ReadAll(resp.Body)
  if(err != nil){
    return nil, err
  }

  body := string(bodyByte)

  if(resp.StatusCode >=200 && resp.StatusCode <300){
    return &ResponseStruct{StatusCode: resp.Status, Body: body}, nil
  } else if resp.StatusCode >=400 && resp.StatusCode <600 {
    return nil, errors.New(body)
  }

  return nil, errors.New("Unknown code error")
}




func (requestManager *RequestManager) Get() (*ResponseStruct, error){
  return requestManager.callNetwork("GET")
}


func (requestManager *RequestManager) Post() (*ResponseStruct, error){
  return requestManager.callNetwork("POST")
}