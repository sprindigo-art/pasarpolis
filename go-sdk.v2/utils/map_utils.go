package utils

import (
	"encoding/json"
	"fmt"
)

//GetQueryStringFromMap get query params from map
func GetQueryStringFromMap(hash map[string]interface{}) string {
	queryString := ""
	for k, v := range hash {
		queryString = queryString + "&" + k + "=" + fmt.Sprint(v)
	}
	return queryString
}

//ConvertInterfaceToMap convert interface to map object
func ConvertInterfaceToMap(val interface{}) (hash map[string]interface{}, err error) {
	jsonByte, err := json.Marshal(val)
	if err != nil {
		return nil, err
	}

	err = json.Unmarshal(jsonByte, &hash)
	if err != nil {
		return nil, err
	}

	return hash, nil
}

//GetQueryStringFromMapAggregate get query params from map
func GetQueryStringFromMapAggregate(hash []map[string]interface{}) string {
	queryString := ""
	for i := 0; i < len(hash); i++ {
		for k, v := range hash[i] {
			queryString = queryString + "&" + k + "=" + fmt.Sprint(v)
		}
	}
	return queryString
}
