# Pasarpolis SDK for Go 
This repository contains SDK for integrating Pasapolis API into your Go code.

## Initialize
To initialize client call below function
```
pasarpolis.InitClient(<PartnerCode>, <PartnerSecret>, <Host>);
```
where:  
* <strong>PartnerCode</strong> (String)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (String)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (String)           : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:    https://integrations-testing.pasarpolis.com.  
   * <strong>Sandbox</strong>:    https://integrations-sandbox.pasarpolis.com.  
   * <strong>Production</strong>: https://integrations.pasarpolis.com.  

### Example
```
import(
  "gitlab.com/pasarpolis/go-sdk"
)
 ..............
 ..............
 ..............
pasarpolis.InitClient("MyDummyCode","a8516a5b-6c32-4228-907e-6f14761c61cb", "https://integrations.pasarpolis.com")
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will throw error.
2. Please make sure you initialize client only once i.e. at start of your app else it will throw error.


## Create Policy
Create policy will create a new policy and will return a Policy object having ```ApplicationNumber``` and ```ReferenceNumber```.

### Signature
```
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk/models"
)

policy := pasarpolis_models.CreatePolicy(<Product>, <Params>);
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(interface{}) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
   
it will return a ```Policy``` object which contains:  
* <strong>ReferenceNumber</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>ApplicationNumber</strong> (string): Number provided for future reference.

### Example
```
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk/models"
  "fmt"
)


params := map[string]interface{}{};
params["name"]="Jacob"
........................
........................
........................
params["last_property"]=true
policy := pasarpolis_models.CreatePolicy("travel-protection", params);
fmt.Println(policy.referenceNumber);
fmt.Println(policy.applicationNumber);
```
it will give output as
```
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
```
   
## Get Policy Status   
Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature
```
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk/models"
)

policies := pasarpolis_models.GetPolicyStatus(<ReferenceNumbers>);
```
where:  
* <strong>ReferenceNumbers </strong>(string[]): An array of string containing reference numbers.

it will return an array of ```Policy``` objects. Each Policy object contains:
* <strong>ReferenceNumber</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>ApplicationNumber</strong> (string): Number provided for future reference.
* <strong>DocumentUrl</strong> (string): Url for policy document (if any).
* <strong>PolicyNumber</strong> (string): Number for policy.
* <strong>Status</strong> (string): Status of a given policy.
* <strong>StatusCode</strong> (int64): Status code of a given policy.

###Example
```
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk/models"
  "fmt"
)


String[] refs = {"d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"};
policies = pasarpolis_models.GetPolicyStatus(refs);
fmt.Println(policies[0].status);

```
it gives output as:
```
PENDING
```


##Testcases
To run testcases for sdk simply go to root of sdk and run following command  
```
cd test && go test ./...
```
it should pass all testcases as follows   
```
ok    gitlab.com/pasarpolis/go-sdk/test 0.005s
ok    gitlab.com/pasarpolis/go-sdk/test/models  2.497s
```
                                        ***END***