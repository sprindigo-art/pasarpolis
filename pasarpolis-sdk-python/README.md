# Pasarpolis SDK for Python

[toc]

##Overview

This repository contains SDK for integrating Pasapolis API into your Python code.

## Initialize
To initialize client call below function
```python
from pasapolis import Client
Client.init(<PartnerCode>, <PartnerSecret>, <Host>)
```
where:  
* <strong>PartnerCode</strong> (string)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (string)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (string)                  : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:        https://integrations-testing.pasarpolis.io
   * <strong>Sandbox</strong>:     https://integrations-sandbox.pasarpolis.io  
   * <strong>Production</strong>: https://integrations.pasarpolis.io

### Example
```python
from pasarpolis import Client
 ..............
 ..............
 ..............
Client.init("MyDummyCode","a8516a5b-6c32-4228-907e-6f14761c61cb", "https://integrations.pasarpolis.io")
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will raise exception.
2. Please make sure you initialize client only once i.e. at start of your app else it will raise exception.

## 1. Config Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature

```python
from pasarpolis import Policy
policy = Policy.config_create_policy(<Product>, <Params>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example

```python
from pasarpolis import Policy

params = {}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
policy = Policy.config_create_policy("travel-protection", params);
print(policy.reference_number,"\n")
print(policy.application_number,"\n")
print(policy.premium,"\n")
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

```python
from pasarpolis import Policy
policy = Policy.config_validate_policy(<Product>, <Params>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```python
from pasarpolis import Policy

params = {}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy = Policy.config_validate_policy("travel-protection", params);
print(policy.message)
```

it will give output as

```json
Valid request
```

## 3. Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature
```python
from pasarpolis import Policy
policy = Policy.create_policy(<Product>, <Params>);
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example
```python
from pasarpolis import Policy

params = {}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy = Policy.create_policy("travel-protection", params);
print(policy.reference_number,"\n")
print(policy.application_number,"\n")
print(policy.premium,"\n")
```
it will give output as
```json
d77d436ad9485b86b8a0c18c3d2f70f77a10c43d
APP-000000224
15000
```

## 4. Validate Policy

Validate policy will validate a new policy and will return a Policy object having message

### Signature

```python
from pasarpolis import Policy
policy = Policy.validate_policy(<Product>, <Params>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```python
from pasarpolis import Policy

params = {}
params["name"]="Jacob"
params["email_id"]="john.doe@example.com"
params["phone_no"]="+6200000000000"
params["reference_id"]="R1"
params["make"]="Apple"
params["model"]="iPhone X"
params["purchase_date"]="2018-12-20"
params["purchase_value"]=32000.00
params["last_property"]=true
policy = Policy.validate_policy("travel-protection", params);
print(policy.message)
```

it will give output as

```json
Valid request
```

## 5. Create Aggregate Policy

Create aggregte policy will create new policies for a product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature
```python
from pasarpolis import Policy
policy = Policy.create_aggregate_policy(<Product>, <Params>);
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
```python
from pasarpolis import Policy

params1 = {}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params1["last_property"]=true
params2 = {}
params2["name"]="Jason"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R2"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
param_list = [params1, params2]
policies = Policy.create_aggregate_policy("travel-protection", param_list);
print(policies)
```
it will give output as
```json
{
  "R1": <Policy object>,
  "R2": <Policy object>
}
```

## 6. Validate Aggregate Policy

Validate aggregte policy will validate new policies for a product and will return a Policy object having message.

### Signature

```python
from pasarpolis import Policy
policy = Policy.validate_aggregate_policy(<Product>, <Params>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```python
from pasarpolis import Policy

params1 = {}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params1["last_property"]=true
params2 = {}
params2["name"]="Jason"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
param_list = [params1, params2]
policies = Policy.validate_aggregate_policy("travel-protection", param_list);
print(policies["message"])
```

it will give output as

```json
Valid Request
```

## 7. Get Policy Status   

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature
```python
from pasarpolis import Policy
policies = Policy.get_policy_status(<ReferenceNumbers>);
```
where:  
* <strong>ReferenceNumbers</strong>(string[]): An array of string containing reference numbers.

it will return an array of ```Policy``` objects. Each Policy object contains:
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>document_url</strong> (string): Url for policy document (if any).
* <strong>policy_number</strong> (string): Number for policy.
* <strong>status</strong> (string): Status of a given policy.
* <strong>status_code</strong> (integer): Status code of a given policy.
* <strong>issue_date</strong> (string): Issue date(YYYY-MM-DD h:mm:ss) of given policy.
* <strong>message</strong> (string): Message/Comments on a given policy if any.
* <strong>partner_ref</strong> (string): Unique reference of a given policy.
* <strong>product_key</strong> (string): product name of a given policy.
* <strong>package_code</strong> (string): package code of a given policy.
* <strong>expiry_date</strong> (string): expiry date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>coverage_start_date</strong> (string): coverage start date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>coverage_end_date</strong> (string): coverage end date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.

###Example
```python
from pasarpolis import Policy

refs = ["d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"]
policies = Policy.get_policy_status(refs)
print(policies[0].application_number)
print(policies[0].__dict__)

```
it gives output as:
```python
MI100073
{u'status': u'COMPLETED', u'issue_date': u'2021-05-31 21:32:50', u'endorsement_token': u'72f4ea3ad7973ea098ee8d1280cb28b2', u'policy_no': u'APP-000000001', u'coverage_end_date': u'2022-05-18 23:59:59', u'status_code': 2, u'activation_url': u'', u'product_key': u'gadget-insurance', u'expiry_date': u'2022-05-18 16:59:59', u'document_url': u'https://storage.googleapis.com/test/sample.pdf', u'application_no': u'APP-002258557', u'endorsement_status': u'PENDING', u'package_code': u'paket-1', u'message': u'', u'partner_ref': u'958338', u'ref': u'b35cdd1af5691b5815834d05317960f770dd3ce2', u'coverage_start_date': u'2021-05-18 00:00:00'}
```

## 8. Cancellation

Cancellation will move an existing policy from COMPLETED state to CANCELLED and will return closure_id for reference  

###Signature

```python
from pasarpolis import Policy
policy = Policy.cancel_policy(<ReferenceNumber>, <Params>);
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

```python
from pasarpolis import Policy

params = {}
params["execution_date"]="2020-03-03 16:00:00"
params["reason"]="Wrong policy created"
params["user"]="client@xyz.com"
ref_id = "d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"
policy = Policy.cancel_policy(ref_id, params)
print(policy.closure_id)

```

it gives output as:

```python
1
```

## 9. Termination

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```python
from pasarpolis import Policy
policy = Policy.terminate_policy(<ReferenceNumber>, <Params>);
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

```python
from pasarpolis import Policy

params = {}
params["execution_date"]="2020-03-03 16:00:00"
params["reason"]="Wrong policy created"
params["user"]="client@xyz.com"
ref_id = "d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"
policy = Policy.terminate_policy(ref_id, params)
print(policy.closure_id)

```

it gives output as:

```python
1
```

## 10. Get Policy Status V3

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature

```python
from pasarpolis import Policy
policies = Policy.get_policy_status_v3(<ReferenceNumbers>);
```

where:  

* <strong>ReferenceNumbers</strong>(string[]): An array of string containing reference numbers.

it will return an array of ```Policy``` objects. Each Policy object contains:

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>document_url</strong> (string): Url for policy document (if any).
* <strong>policy_number</strong> (string): Number for policy.
* <strong>status</strong> (string): Status of a given policy.
* <strong>partner_ref</strong> (string): Unique reference of a given policy.
* <strong>product_key</strong> (string): product name of a given policy.
* <strong>package_code</strong> (string): package code of a given policy.
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.
* <strong>coverage_start_date</strong> (string): coverage start date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>coverage_end_date</strong> (string): coverage end date(YYYY-MM-DD hh:mm:ss) of a given policy in local time.
* <strong>endorsement_token</strong> (string): token to be used for endorsing policy.
* <strong>endorsement_status</strong> (string): status of endorsement if applicable.

###Example

```python
from pasarpolis import Policy

refs = ["d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"]
policies = Policy.get_policy_status_v3(refs)
print(policies[0].application_number)
print(policies[0].__dict__)

```

it gives output as:

```python
MI100073
{u'status': u'COMPLETED', u'endorsement_token': u'72f4ea3ad7973ea098ee8d1280cb28b2', u'policy_no': u'APP-000000001', u'coverage_end_date': u'2022-05-18 23:59:59', u'activation_url': u'', u'product_key': u'gadget-insurance', u'document_url': u'https://storage.googleapis.com/test/sample.pdf', u'application_no': u'APP-002258557', u'endorsement_status': u'PENDING', u'package_code': u'paket-1', u'partner_ref': u'958338', u'ref': u'b35cdd1af5691b5815834d05317960f770dd3ce2', u'coverage_start_date': u'2021-05-18 00:00:00'}
```

## 11. Config Create Aggregate Policy

Config create aggregte policy will create new policies for a config product and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```python
from pasarpolis import Policy
policy = Policy.config_create_aggregate_policy(<Product>, <Params>);
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

```python
from pasarpolis import Policy

params1 = {}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params1["last_property"]=true
params2 = {}
params2["name"]="Jason"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R2"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
param_list = [params1, params2]
policies = Policy.config_create_aggregate_policy("travel-protection", param_list);
print(policies)
```

it will give output as

```json
{
  "R1": <Policy object>,
  "R2": <Policy object>
}
```

## 12. Config Validate Aggregate Policy

Config validate aggregte policy will validate new policies for a config product and will return a Policy object having message.

### Signature

```python
from pasarpolis import Policy
policy = Policy.config_validate_aggregate_policy(<Product>, <Params>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```python
from pasarpolis import Policy

params1 = {}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params1["last_property"]=true
params2 = {}
params2["name"]="Jason"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R1"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
param_list = [params1, params2]
policies = Policy.config_validate_aggregate_policy("travel-protection", param_list);
print(policies["message"])
```

it will give output as

```json
Valid Request
```

## 13. Create Multiple Policy By ID

Create multiple policy by id will create new policies for a product (policies can have different package codes) and will return a dictionary with reference number passed as key Policy object having ```application_number```, premium and ```reference_number``` as value.

### Signature

```python
from pasarpolis import Policy
policy = Policy.config_create_aggregate_policy(<Product>, <Params>, <AggregateReferenceID>);
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(list) : Product specific list of data to be sent.  
* AggregateReferenceID(string): Aggregate reference id for polices

it will return a dictionary which contains :  

* reference_id passed for policy creation as key
* ```Policy``` object as its value which contains following details
  * <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
  * <strong>application_number</strong> (string): Number provided for future reference.
  * <strong>premium</strong> (interger): Premium amount for policy.

### Example

```python
from pasarpolis import Policy

params1 = {}
params1["name"]="Jacob"
params1["email_id"]="john.doe@example.com"
params1["phone_no"]="+6200000000000"
params1["reference_id"]="R1"
params1["make"]="Apple"
params1["model"]="iPhone X"
params1["purchase_date"]="2018-12-20"
params1["purchase_value"]=32000.00
params1["last_property"]=true
params2 = {}
params2["name"]="Jason"
params2["email_id"]="john.doe@example.com"
params2["phone_no"]="+6200000000000"
params2["reference_id"]="R2"
params2["make"]="Apple"
params2["model"]="iPhone X"
params2["purchase_date"]="2018-12-20"
params2["purchase_value"]=32000.00
params2["last_property"]=true
param_list = [params1, params2]
policies = Policy.create_multiple_policy_by_id("travel-protection", param_list, "aggregate-xxxxxx");
print(policies)
```

it will give output as

```json
{
    "policies": {
        "ref-00001": {
            "application_no": "APP-000067135",
            "ref": "cda3e34c3192a2d106d4ba36200e91df2c6a764d",
            "premium": 88000
        },
        "ref-00002": {
            "application_no": "APP-000067134",
            "ref": "b13aa96f6daa2193bd0b0a0b58d10e2a11d3f897",
            "premium": 88000
        }
    },
    "aggregate_reference_id": "123789990"
}
```

##Testcases

To run testcases for sdk simply go to root of sdk and run following command  
```shell
python -m unittest -v test
```
it should pass all testcases as follows   
```shell
test_create_policy (test.TestPolicy) ... ok
test_get_client (test.TestPolicy) ... ok
test_get_policy_status (test.TestPolicy) ... ok

----------------------------------------------------------------------
Ran 3 tests in 2.397s

OK
```
## Installation Steps:

1. Install Python 3.6.5 (brew install python python3)
2. Install requests (pip install requests)
3. Copy pasarpolis folder from sdk zip shared to your project in which you want to use this sdk.
4. Import Client and Policy class from pasarpolis into your python code from where api call is made.
5. Intialize Client as mentioned above in and call the desired api using Policy class.

                                        ***END***