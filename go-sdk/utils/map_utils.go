package utils

import(
  "fmt"
  "encoding/json"
)

func GetQueryStringFromMap(hash map[string]interface{}) string{
  queryString := ""
  for k, v := range hash {
    queryString = queryString + "&" + k + "=" + fmt.Sprint(v)
  }
  return queryString
}


func ConvertInterfaceToMap(val interface{}) (hash map[string]interface{}, err error){
  jsonByte, err := json.Marshal(val)
  if(err != nil){
    return nil, err
  }

  err = json.Unmarshal(jsonByte, &hash)
  if(err != nil){
    return nil, err
  }

  return hash, nil
}