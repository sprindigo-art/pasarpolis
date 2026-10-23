# Pasarpolis SDK for Go V1.4
This repository contains SDK for integrating Pasapolis API into your Go code.

[TOC]

## Initialize
To initialize client call below function
```go
pasarpolis.InitClient(<PartnerCode>, <PartnerSecret>, <Host>);
```
where:  
* <strong>PartnerCode</strong> (String)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (String)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (String)           : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:        https://integrations-testing.pasarpolis.io
   * <strong>Sandbox</strong>:     https://integrations-sandbox.pasarpolis.io
   * <strong>Production</strong>: https://integrations.pasarpolis.io

### Example
```go
import(
  "gitlab.com/pasarpolis/go-sdk.v2"
)
 ..............
 ..............
 ..............
pasarpolis.InitClient("MyDummyCode","<secret-key>", "https://integrations.pasarpolis.io")
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will throw error.
2. Please make sure you initialize client only once i.e. at start of your app else it will throw error.

## 1. Config Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ConfigCreatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy, error := pasarpolis_models.ConfigCreatePolicy("gadget-rental-protection", params)
fmt.Println(policy.referenceNumber)
fmt.Println(policy.applicationNumber)
fmt.Println(policy.premium)
```

it will give output as

```json
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
15000
```

## 2. Config Validate Policy

Validate policy will validate a new policy and will return a Policy object having message

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ConfigCreatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy, error := pasarpolis_models.ConfigValidatePolicy("gadget-rental-protection", params)
fmt.Println(policy.message)
```

it will give output as

```json
Valid request
```

## 3. Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature
```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.CreatePolicy(<Product>, <Params>)
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(interface{}) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  
* <strong>ReferenceNumber</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>ApplicationNumber</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example
```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy, error := pasarpolis_models.CreatePolicy("gadget-protection", params)
fmt.Println(policy.referenceNumber)
fmt.Println(policy.applicationNumber)
fmt.Println(policy.premium)
```
it will give output as
```go
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
15000
```

## 4. Validate Policy

Validate policy will validate a new policy and will return a Policy object having message

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ValidatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy, error := pasarpolis_models.ValidatePolicy("gadget-protection", params)
fmt.Println(policy.message)
```

it will give output as

```json
Valid request
```

## 5. Create Aggregate Policy

Create aggregte policy will create new policies for a product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.CreateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (interger): Premium amount for policy.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

var params []interface{}

params1 := map[string]interface{}{}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params2 := map[string]interface{}{}
params2["name"]="Jacob2"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params = append(params, params1)
params = append(params, params2)
policy, error := pasarpolis_models.CreateAggregatePolicy("gadget-protection", params)
fmt.Println(policy)
```

it will give output as

```json
{
    "policies": {
        "INS12AQYF40392-973-1": {
            "application_no": "APP-000067265",
            "ref": "259a06539a4e9d75c39ec0e1b292077fee17c840",
            "premium": 48000
        },
        "INS12AQYF40392-974-1": {
            "application_no": "APP-000067266",
            "ref": "259a06539a4e9d75c39ec0e1b292077fee17c841",
            "premium": 48000
        }
    }
}
```

## 6. Validate Aggregate Policy

Validate aggregte policy will validate new policies for a product and will return a Policy object having message.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ValidateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

var params []interface{}

params1 := map[string]interface{}{}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params2 := map[string]interface{}{}
params2["name"]="Jacob2"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
params = append(params, params1)
params = append(params, params2)
policy, error := pasarpolis_models.ValidateAggregatePolicy("travel-protection", params)
fmt.Println(policy)
```

it will give output as

```json
Valid request
```

## 7. Get Policy Status   

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

### Signature
```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.GetPolicyStatus(<ReferenceNumbers>)
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
* <strong>issueDate</strong> (string): Issue date(YYYY-MM-DD h:mm:ss) of given policy.
* <strong>message</strong> (string): Message/Comments on a given policy if any.
* <strong>partnerRef</strong> (string): Unique reference of a given policy.
* <strong>productKey</strong> (string): product name of a given policy.
* <strong>expiryDate</strong> (string): expiry date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>activationURL</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>closureID</strong> (string): closure id in case of cancelltation or termination og policy.
* <strong>coverageStartDate</strong> (string): coverage start date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>coverageEndDate</strong> (string): coverage end date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.

### Example
```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

refs := []string{"b5eb6e464107bdb875c1139ee2ae5b6e78a8f390"}
policies, err := pasarpolis_models.GetPolicyStatus(refs)
fmt.Println(policies[0])
fmt.Println(err)

```
it gives output as:
```go
{
  "ref": "d77d436ad9485b86b8a0c18c3d2f70f77a10c43d",
  "application_no": "MI100073",
  "document_url": "NA",
  "policy_no": "-",
  "status_code": 2,
  "status": "COMPLETED",
  "issue_date": "2021-01-20 08:24:11",
  "message": "",
  "partner_ref": "b4b35667-ab56-38a6-8642-bd38b21e087d",
  "product_key": "go-car-complete",
  "expiry_date": "2022-01-20 23:59:59",
  "activation_url": "",
  "coverage_start_date": "2021-01-20 09:31:41",
  "coverage_end_date": "2022-01-20 23:59:59"
}
nil
```

## 8. Cancellation

Cancellation will move an existing policy from COMPLETED state to CANCELLED and will return closure_id for reference  

###Signature

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.CancelPolicy(<ReferenceNumbers>, <Params>)
```

where:  

* <strong>ReferenceNumber</strong>(string): Reference number of policy that needs to be cancelled
* <strong>Params</strong>(map): Params Body
  * <strong>Execution Date</strong>(string): Date of cancellation
  * <strong>Reason</strong>(string): Reason for cancellation
  * <strong>User</strong>(string): User email

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>closure_id</strong> (string): Reference number for cancellation request

###Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["execution_date"]="2020-10-04 15:12:00"
params["reason"]="Wrong policy"
params["user"]="johndoe@gmail.com"
policy, error := pasarpolis_models.CancelPolicy("123454321123", params)
fmt.Println(policy)
```

it gives output as:

```go
{
    "closure_id": 1
}
```

## 9. Termination

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.TerminatePolicy(<ReferenceNumbers>, <Params>)
```

where:  

* <strong>ReferenceNumber</strong>(string): Reference number of policy that needs to be cancelled
* <strong>Params</strong>(map): Params Body
  * <strong>Execution Date</strong>(string): Date of cancellation
  * <strong>Reason</strong>(string): Reason for cancellation
  * <strong>User</strong>(string): User email

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>closure_id</strong> (string): Reference number for cancellation request

###Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

params := map[string]interface{}{}
params["execution_date"]="2020-10-04 15:12:00"
params["reason"]="Wrong policy"
params["user"]="johndoe@gmail.com"
policy, error := pasarpolis_models.TerminatePolicy("123454321123", params)
fmt.Println(policy)
```

it gives output as:

```go
{
    "closure_id": 1
}
```

## 10. Get Policy Status V3

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

### Signature

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.GetPolicyStatusV3(<ReferenceNumbers>)
```

where:  

* <strong>ReferenceNumbers </strong>(string[]): An array of string containing reference numbers.

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>ReferenceNumber</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>ApplicationNumber</strong> (string): Number provided for future reference.
* <strong>DocumentUrl</strong> (string): Url for policy document (if any).
* <strong>PolicyNumber</strong> (string): Number for policy.
* <strong>Status</strong> (string): Status of a given policy.
* <strong>issueDate</strong> (string): Issue date(YYYY-MM-DD h:mm:ss) of given policy.
* <strong>partnerRef</strong> (string): Unique reference of a given policy.
* <strong>productKey</strong> (string): product name of a given policy.
* <strong>activationURL</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>coverageStartDate</strong> (string): coverage start date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>coverageEndDate</strong> (string): coverage end date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>premium</strong> (number): premium of a given policy.
* <strong>endorsement_status</strong> (string): endorsement status in case when endorsement flow is present
* <strong>endorsement_token</strong> (string): token required for authentication in case endorsement flow present

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

refs := []string{"b5eb6e464107bdb875c1139ee2ae5b6e78a8f390"}
policies, err := pasarpolis_models.GetPolicyStatusV3(refs)
fmt.Println(policies[0])
fmt.Println(err)

```

it gives output as:

```go
{APP-002719131 f4961bffdd5d792388d0f1a016404c03d3c67826 525 https://storage.googleapis.com/pp_insurance_docs/f4961bffdd5d792388d0f1a016404c03d3c67826/APP-002719131.2021-05-28-164031.633023.pdf APP-002719131 CANCELLED ref0000002 crackscreen-insurance paket-1  0 2020-12-12 10:30:30 2021-01-11 23:59:59 3555b77c1df482f1b183a8c103c78687 PENDING}
 nil
```

## 11. Config Create Aggregate Policy

Config validate aggregte policy will validate new policies for a product and will return a Policy object having message.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ConfigValidateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (interger): Premium amount for policy.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

var params []interface{}

params1 := map[string]interface{}{}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params2 := map[string]interface{}{}
params2["name"]="Jacob2"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params = append(params, params1)
params = append(params, params2)
policy, error := pasarpolis_models.ConfigCreateAggregatePolicy("gadget-protection", params)
fmt.Println(policy)
```

it will give output as

```json
{
    "policies": {
        "INS12AQYF40392-973-1": {
            "application_no": "APP-000067265",
            "ref": "259a06539a4e9d75c39ec0e1b292077fee17c840",
            "premium": 48000
        },
        "INS12AQYF40392-974-1": {
            "application_no": "APP-000067266",
            "ref": "259a06539a4e9d75c39ec0e1b292077fee17c841",
            "premium": 48000
        }
    }
}
```

## 12. Config Validate Aggregate Policy

Config Validate aggregte policy will validate new policies for a config product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.ConfigCreateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

* It will return a dictionary which contains :  
  * reference_id passed for policy creation as key
  * ```Policy``` object as its value which contains following details
    * <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

var params []interface{}

params1 := map[string]interface{}{}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params2 := map[string]interface{}{}
params2["name"]="Jacob2"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params = append(params, params1)
params = append(params, params2)
policy, error := pasarpolis_models.ConfigValidateAggregatePolicy("gadget-protection", params)
fmt.Println(policy)
```

it will give output as

```json
Valid Request
```

## 13. Create Multiple Policy By ID

Create aggregte policy will create new policies for a product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```go
import (
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policy, error := pasarpolis_models.CreateMultiplePolicyByID(<Product>, <Params>, <AggregateReferenceID>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  
* AggregateReferenceID(string) : To identify the policies linked together

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (interger): Premium amount for policy.

### Example

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
  "fmt"
)

var params []interface{}

params1 := map[string]interface{}{}
params1["customer_id"]="MTcyNTg3Ng"
params1["driver_id"]="940404582"
params1["drop_address"]="JKT"
params1["email"]="john.doe@example.com"
params1["goods_description"]="Mobile"
params1["name"]="Apple"
params1["order_id"]="TK-11-1614818"
params1["package_id"]="shipping-plus"
params1["pickup_address"]="JKT"
params1["shipment_pickup_time"] = "2021-08-20 05:54:00"
params2 := map[string]interface{}{}
params2["customer_id"]="MTcyNTg3Ng"
params2["driver_id"]="940404582"
params2["drop_address"]="JKT"
params2["email"]="john.doe@example.com"
params2["goods_description"]="Mobile"
params2["name"]="Apple"
params2["order_id"]="TK-11-1614819"
params2["package_id"]="shipping-plus"
params2["pickup_address"]="JKT"
params2["shipment_pickup_time"] =  "2021-08-20 05:54:00"
params = append(params, params1)
params = append(params, params2)
policy, error := pasarpolis_models.CreateMultiplePolicyByID("hyperlocal-shipping-protection", params, "HSPGK-0000001")
fmt.Println(policy)
```

it will give output as

```json
{
    "policies": {
        "TK-11-1614818": {
            "application_no": "APP-000067135",
            "ref": "cda3e34c3192a2d106d4ba36200e91df2c6a764d",
            "premium": 88000
        },
        "TK-11-1614819": {
            "application_no": "APP-000067134",
            "ref": "b13aa96f6daa2193bd0b0a0b58d10e2a11d3f897",
            "premium": 88000
        }
    },
    "aggregate_reference_id": "HSPGK-0000001"
}
```

##  

## 

## Testcases

To run testcases for sdk simply go to root of sdk and run following command  
```
cd test && go test ./...
```
it should pass all testcases as follows   
```
ok    gitlab.com/pasarpolis/go-sdk.v2/test 0.005s
ok    gitlab.com/pasarpolis/go-sdk.v2/test/models  2.497s
```
## Step to use SDK:

1. Install golang https://golang.org/doc/install
2. Initialize client and policy object as mentioned above

                                        ***END***