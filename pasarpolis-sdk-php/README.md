

# Pasarpolis SDK PHP V1.3

[toc]

##Overview

This repository contains SDK for integrating Pasapolis API into your PHP(5.6, 7.0, 7.1, 7.2 & 7.3) code.

## Prerequiste:
1. Install php version 5.6 or php 7.* from [https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions](https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions) 
2. Ensure php curl is installed. (By default present in mac)

## Initialize
To initialize client call below function
```php
require_once('pasarpolis/client.php');
$clientObj = new client(<PartnerCode>, <PartnerSecret>, <HOST>);
```
where:  
* <strong>PartnerCode</strong> (string)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (string)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (string)                  : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:        https://integrations-testing.pasarpolis.io
   * <strong>Sandbox</strong>:     https://integrations-sandbox.pasarpolis.io
   * <strong>Production</strong>: https://integrations.pasarpolis.io

### Example
```php
require_once('pasarpolis/client.php');
 ..............
 ..............
 ..............
$clientObj = new client("laku6","86433ecb-b401-4ec8-9a34-d1d57fbb840c", "https://integrations-testing.pasarpolis.io");
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will raise exception.
2. Please make sure you initialize client only once i.e. at start of your app else it will raise exception.

## 1. Config Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number, premium``` and ```reference_number```.

### Signature

```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->config_create_policy(<Product>, <Params>, <ClientObj>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
* ClientObj(object) : Instance of client class containing client specific details

it will return a ```Policy``` object which contains:  

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (integer): Premium of policy

### Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params = Array();
$params["name"]="Jacob";
$params["email_id"] = "john.doe@example.com"
$params["phone_no"] = "+6200000000000"
$params["reference_id"] = "R1"
$params["make"] = "Apple"
$params["model"] = "iPhone X"
$params["purchase_date"] = "2018-12-20"
$params["purchase_value"] = 32000.00;
$params["last_property"]=true;
$policy = $policyObj->create_policy("gadget-rental-protection", $params, $clientObj);
print_r($policy['reference_number']);
echo '<br>';
print_r($policy['application_number']);
echo '<br>';
print_r($policy['premium']);
```

it will give output as

```php
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
15000
```

## 2. Config Validate Policy

Validate policy will validate a new policy request and will return a message if request is valid.

### Signature

```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->config_validate_policy(<Product>, <Params>, <ClientObj>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
* ClientObj(object) : Instance of client class containing client specific details

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params = Array();
$params["name"]="Jacob";
$params["email_id"] = "john.doe@example.com"
$params["phone_no"] = "+6200000000000"
$params["reference_id"] = "R1"
$params["make"] = "Apple"
$params["model"] = "iPhone X"
$params["purchase_date"] = "2018-12-20"
$params["purchase_value"] = 32000.00;
$params["last_property"]=true;
$policy = $policyObj->config_validate_policy("gadget-rental-protection", $params, $clientObj);
print_r($policy['message']);
```

it will give output as

```php
Valid request
```


## 3. Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number, premium``` and ```reference_number```.

### Signature
```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->create_policy(<Product>, <Params>, <ClientObj>);
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
* ClientObj(object) : Instance of client class containing client specific details

it will return a ```Policy``` object which contains:  
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (integer): Premium of policy

### Example
```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params = Array();
$params["name"]="Jacob";
$params["email_id"] = "john.doe@example.com"
$params["phone_no"] = "+6200000000000"
$params["reference_id"] = "R1"
$params["make"] = "Apple"
$params["model"] = "iPhone X"
$params["purchase_date"] = "2018-12-20"
$params["purchase_value"] = 32000.00;
$params["last_property"]=true;
$policy = $policyObj->create_policy("gadget-rental-protection", $params, $clientObj);
print_r($policy['reference_number']);
echo '<br>';
print_r($policy['application_number']);
echo '<br>';
print_r($policy['premium']);
```
it will give output as
```php
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
```

## 4. Validate Policy

Validate policy will validate a new policy request and will return a message if request is valid.

### Signature

```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->validate_policy(<Product>, <Params>, <ClientObj>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
* ClientObj(object) : Instance of client class containing client specific details

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params = Array();
$params["name"]="Jacob";
$params["email_id"] = "john.doe@example.com"
$params["phone_no"] = "+6200000000000"
$params["reference_id"] = "R1"
$params["make"] = "Apple"
$params["model"] = "iPhone X"
$params["purchase_date"] = "2018-12-20"
$params["purchase_value"] = 32000.00;
$params["last_property"]=true;
$policy = $policyObj->validate_policy("gadget-rental-protection", $params, $clientObj);
print_r($policy['message']);
```

it will give output as

```php
Valid request
```


## 5. Create Aggregate Policy

Create aggregte policy will create a new policies for a product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature
```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->create_aggregate_policy(<Product>, <Params>, <ClientObj>);
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent. 
* ClientObj(object) : Instance of client class containing client specific details

it will return a dictionary which contains :  
* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following fields:
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (integer): Premium of policy

### Example
```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params1 = Array();
$params1["name"]="Jacob";
$params1["email_id"] = "john.doe@example.com"
$params1["phone_no"] = "+6200000000000"
$params1["reference_id"] = "R1"
$params1["purchase_date"] = "2018-12-20"
$params1["purchase_value"] = 32000.00;
$params1["last_property"] = true;
$params1["last_property"]=true;
$params2 = Array();
$params2["name"]="Jason";
$params2["email_id"] = "john.doe@example.com"
$params2["phone_no"] = "+6200000000000"
$params2["reference_id"] = "R1"
$params2["purchase_date"] = "2018-12-20"
$params2["purchase_value"] = 32000.00;
$params2["last_property"] = true;
$param_list = array($params1, $params2);
$policies = Policy.create_aggregate_policy("travel-protection", $param_list, $clientObj);
print_r($policies)
```
it will give output as
```php
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

Validate aggregate policy will validate a new aggregate policy request and will return a message if request is valid.

### Signature

```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->validate_aggregate_policy(<Product>, <Params>, <ClientObj>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
* ClientObj(object) : Instance of client class containing client specific details

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params1 = Array();
$params1["name"]="Jacob";
$params1["email_id"] = "john.doe@example.com"
$params1["phone_no"] = "+6200000000000"
$params1["reference_id"] = "R1"
$params1["purchase_date"] = "2018-12-20"
$params1["purchase_value"] = 32000.00;
$params1["last_property"] = true;
$params1["last_property"]=true;
$params2 = Array();
$params2["name"]="Jason";
$params2["email_id"] = "john.doe@example.com"
$params2["phone_no"] = "+6200000000000"
$params2["reference_id"] = "R1"
$params2["purchase_date"] = "2018-12-20"
$params2["purchase_value"] = 32000.00;
$params2["last_property"] = true;
$param_list = array($params1, $params2);
$policies = Policy.validate_aggregate_policy("travel-protection", $param_list, $clientObj);
print_r($policies)
```

it will give output as

```php
Valid request
```


## 7. Get Policy Status   

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature
```php
require_once('pasarpolis/policy.php');
$policy = $policyObj->get_policy_status(<ReferenceNumbers>, <ClientObj>);
```
where:  
* <strong>ReferenceNumbers</strong>(string[]): An array of string containing reference numbers.
* ClientObj(object) : Instance of client class containing client specific details

it will return an array of ```Policy``` objects. Each Policy object contains:
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>document_url</strong> (string): Url for policy document (if any).
* <strong>policy_number</strong> (string): Number for policy.
* <strong>status</strong> (string): Status of a given policy.
* <strong>message</strong> (string): Message/Comments on a given policy if any.
* <strong>partner_ref</strong> (string): Unique reference of a given policy.
* <strong>product_key</strong> (string): product name of a given policy.
* <strong>package_code</strong> (string): package code of a given policy.
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>coverage_start_date</strong> (string): polict start date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>coverage_end_date</strong> (string): policy end date(YYYY-MM-DD hh:mm:ss) of a given policy.

###Example
```php
require_once('pasarpolis/policy.php');

$refs = Array("d77d436ad9485b86b8a0c18c3d2f70f77a10c43d");
$policyObj = new policy($params);
$policies = $policyObj->get_policy_status($refs, $clientObj);
print_r($policies[0]);

```
it gives output as:
```php
Policy Object ( [application_number] => APP-002798616 [reference_number] => d2641fe4b1bbdbece34da1c189f7a01a3afae550 [premium] => [document_url] => sample_url [policy_number] => APP-002798616 [status_code] => 2 [issue_date] => 2021-06-15 11:22:18 [status] => COMPLETED [message] => [partner_ref] => TESTX010X [product_key] => credit-insurance [expiry_date] => 2021-07-10 16:59:59 [activation_url] => )
```

## 8. Cancellation

Cancellation will move an existing policy from COMPLETED state to CANCELLED and will return closure_id for reference  

###Signature

```php
require_once('pasarpolis/policy.php');
$policy = $policyObj->get_policy_status(<ReferenceNumbers>, <Params>, <ClientObj>);
```

where:  

* <strong>ReferenceNumber</strong>(string): Reference number of policy that needs to be cancelled
* <strong>Params</strong>(map): Request Body
  * <strong>execution_date</strong>(string): Date of cancellation
  * <strong>reason</strong>(string): Reason for cancellation
  * <strong>user</strong>(string): User email

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>closure_id</strong> (string): Reference number for cancellation request

###Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params = Array();
$params["execution_date"]="2020-04-01 00:00:00";
$params["reason"]="Wrong policy created";
$params["user"]="client@xyz.com"
$ref_id = "d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"
$policy = $policyObj->cancel_policy($ref_id, $params, $clientObj);
print_r($policy);
```

it gives output as:

```php
{
    "closure_id": 1
}
```

## 9. Termination

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```python
from pasarpolis import Policy
policies = Policy.terminate_policy(<ReferenceNumber>, <Params>, <ClientObj>);
```

where:  

* <strong>ReferenceNumber</strong>(string): Reference number of policy that needs to be cancelled
* <strong>Params</strong>(map): Request Body
  * <strong>execution_date</strong>(string): Date of cancellation
  * <strong>reason</strong>(string): Reason for cancellation
  * <strong>user</strong>(string): User email

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>closure_id</strong> (string): Reference number for cancellation request

###Example

```php
from pasarpolis import Policy

$policyObj = new policy($params);
$params = Array();
$params["execution_date"]="2020-04-01 00:00:00";
$params["reason"]="Wrong policy created";
$params["user"]="client@xyz.com"
$ref_id = "d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"
$policy = $policyObj->cancel_policy($ref_id, $params, $clientObj);
print(policy)

```

it gives output as:

```php
{
    "closure_id": 1
}
```

## 10. Config Create Aggregate Policy

Create aggregte policy will create a new policies for a config product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```php
require_once('pasarpolis/policy.php');
$policyObj = new policy($params);
$policy = $policyObj->config_create_aggregate_policy(<Product>, <Params>, <ClientObj>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent. 
* ClientObj(object) : Instance of client class containing client specific details

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following fields:
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (integer): Premium of policy

### Example

```php
require_once('pasarpolis/policy.php');

$policyObj = new policy($params);
$params1 = Array();
$params1["name"]="Jacob";
$params1["email_id"] = "john.doe@example.com"
$params1["phone_no"] = "+6200000000000"
$params1["reference_id"] = "R1"
$params1["purchase_date"] = "2018-12-20"
$params1["purchase_value"] = 32000.00;
$params1["last_property"] = true;
$params1["last_property"]=true;
$params2 = Array();
$params2["name"]="Jason";
$params2["email_id"] = "john.doe@example.com"
$params2["phone_no"] = "+6200000000000"
$params2["reference_id"] = "R1"
$params2["purchase_date"] = "2018-12-20"
$params2["purchase_value"] = 32000.00;
$params2["last_property"] = true;
$param_list = array($params1, $params2);
$policies = Policy.config_create_aggregate_policy("travel-protection", $param_list, $clientObj);
print_r($policies)
```

it will give output as

```php
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

##11. Get Policy Status V3 

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature

```php
require_once('pasarpolis/policy.php');
$policy = $policyObj->get_policy_status_v3(<ReferenceNumbers>, <ClientObj>);
```

where:  

* <strong>ReferenceNumbers</strong>(string[]): An array of string containing reference numbers.
* ClientObj(object) : Instance of client class containing client specific details

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>document_url</strong> (string): Url for policy document (if any).
* <strong>policy_number</strong> (string): Number for policy.
* <strong>status</strong> (string): Status of a given policy.
* <strong>partner_ref</strong> (string): Unique reference of a given policy.
* <strong>product_key</strong> (string): product name of a given policy.
* <strong>package_code</strong> (string): package code of a given policy.
* <strong>premium</strong> (number): premium of a given policy.
* <strong>endorsement_status</strong> (string): endorsement status in case when endorsement flow is present
* <strong>endorsement_token</strong> (string): token required for authentication in case endorsement flow present
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>coverage_start_date</strong> (string): polict start date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>coverage_end_date</strong> (string): policy end date(YYYY-MM-DD hh:mm:ss) of a given policy.

###Example

```php
require_once('pasarpolis/policy.php');

$refs = Array("d77d436ad9485b86b8a0c18c3d2f70f77a10c43d");
$policyObj = new policy($params);
$policies = $policyObj->get_policy_status_v3($refs, $clientObj);
print_r($policies[0]);

```

it gives output as:

```php
Policy Object ( [application_number] => APP-002798616 [reference_number] => d2641fe4b1bbdbece34da1c189f7a01a3afae550 [premium] => [document_url] => sample_url [policy_number] => APP-002798616 [issue_date] => 2021-06-15 11:22:18 [status] => COMPLETED [partner_ref] => TESTX010X [product_key] => credit-insurance [package_code] => plan-a [expiry_date] => 2021-07-10 16:59:59 [activation_url] => [endorsement_status] => PENDING [endorsement_token] => token [premium] => 210)
```

## 12. Cancellation V3

Cancellation will move an existing policy from COMPLETED state to CANCELLED and will return closure_id for reference  

###Signature

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.CancelPolicyV3(<ReferenceNumbers>, <Params>)
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
policy, error := pasarpolis_models.CancelPolicyV3("123454321123", params)
fmt.Println(policy)
```

it gives output as:

```go
{
    "closure_id": 1
}
```

## 13. Termination V3

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```go
import(
  pasarpolis_models "gitlab.com/pasarpolis/go-sdk.v2/models"
)

policies, error := pasarpolis_models.TerminatePolicyV3(<ReferenceNumbers>, <Params>)
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
policy, error := pasarpolis_models.TerminatePolicyV3("123454321123", params)
fmt.Println(policy)
```

it gives output as:

```go
{
    "closure_id": 1
}
```

## 

                                        ***END***