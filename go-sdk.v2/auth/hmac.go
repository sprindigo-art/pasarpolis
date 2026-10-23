package auth

import (
	hmac_crypto "crypto/hmac"
	"crypto/md5"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"strconv"
	"strings"
	"time"
)

type HMAC struct {
	Verb          string
	Path          string
	RequestBody   interface{}
	RequestType   string
	PartnerID     string
	PartnerSecret string
}

type HMACReturnStruct struct {
	Verb        string
	ContentMd5  string
	RequestType string
	Timestamp   string
	PartnerID   string
	Hmac        string
}

func (hmac *HMAC) GetHMAC() (HMACReturnStruct, error) {
	hmacReturn := HMACReturnStruct{}
	hmacReturn.Verb = strings.ToUpper(hmac.Verb)
	hmacReturn.ContentMd5 = hmac.GetMD5ContentForBody()
	hmacReturn.RequestType = hmac.RequestType
	hmacReturn.PartnerID = hmac.PartnerID
	hmacReturn.Timestamp = strconv.FormatInt((time.Now().UnixNano() / 1000000), 10)
	signedPayload := hmacReturn.Verb + "\n" + hmacReturn.ContentMd5 + "\n" + hmacReturn.RequestType + "\n" + hmacReturn.Timestamp + "\n" + hmac.Path
	mac := hmac_crypto.New(sha256.New, []byte(hmac.PartnerSecret))
	mac.Write([]byte(signedPayload))
	hmacByte := string(mac.Sum(nil))
	hmacReturn.Hmac = base64.StdEncoding.EncodeToString([]byte(hmacByte))
	return hmacReturn, nil
}

func (auth *HMAC) GetMD5ContentForBody() string {
	jsonString := auth.GetJSONRequestBody()
	hasher := md5.New()
	hasher.Write([]byte(jsonString))
	return hex.EncodeToString(hasher.Sum(nil))
}

func (auth *HMAC) GetJSONRequestBody() string {
	jsonByte, err := json.Marshal(auth.RequestBody)
	if err != nil {
		jsonByte = auth.RequestBody.([]byte)
	}
	jsonString := string(jsonByte)
	return jsonString
}
