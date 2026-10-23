package auth

import(  
	"encoding/json"
  "crypto/md5"
  "encoding/hex"
  "strings"
  "strconv"
  "time"  
  hmac_crypto "crypto/hmac"
  "crypto/sha256"
  "encoding/base64"  
)

type HMAC struct{
	Verb string
	Path string
	RequestBody interface{}
	RequestType string	
	PartnerId string
	PartnerSecret string
}


type HMACReturnStruct struct{
  Verb string
  ContentMd5 string
  RequestType string
  Timestamp string
  PartnerId string
  Hmac string
}

func (hmac *HMAC) GetHMAC() (HMACReturnStruct, error){
  hmacReturn := HMACReturnStruct{}
  hmacReturn.Verb = strings.ToUpper(hmac.Verb)
  hmacReturn.ContentMd5 = hmac.GetMD5ContentForBody()
  hmacReturn.RequestType = hmac.RequestType
  hmacReturn.PartnerId = hmac.PartnerId
  hmacReturn.Timestamp = strconv.FormatInt((time.Now().UnixNano()/1000000), 10)  
  signedPayload := hmacReturn.Verb + "\n" + hmacReturn.ContentMd5 + "\n" + hmacReturn.RequestType + "\n" + hmacReturn.Timestamp + "\n" + hmac.Path;  
  mac := hmac_crypto.New(sha256.New, []byte(hmac.PartnerSecret))
  mac.Write([]byte(signedPayload))
  hmacByte := string(mac.Sum(nil))
  hmacReturn.Hmac = base64.StdEncoding.EncodeToString([]byte(hmacByte))
  return hmacReturn, nil
}


func (auth *HMAC) GetMD5ContentForBody() (string){
  jsonString := auth.GetJSONRequestBody()  
  hasher := md5.New()
  hasher.Write([]byte(jsonString))
  return hex.EncodeToString(hasher.Sum(nil))
}

func (auth *HMAC) GetJSONRequestBody()(string){
  jsonByte, err := json.Marshal(auth.RequestBody)  
  if(err != nil){
    jsonByte = auth.RequestBody.([]byte)
  }
  jsonString := string(jsonByte)  
  return jsonString
}