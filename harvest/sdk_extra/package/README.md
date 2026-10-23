[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Pasarpolis SDK for Nodejs V1.3
This repository contains SDK for integrating Pasapolis API into your Nodejs code.

[TOC]

## Update Package on NPM 

This is required only if some change is made in sdk and those changes have to be pushed on npm.

```javascript
$ npm adduser
```

Use User : pasarpolis (Ask credentials from Amit Saraswat)

Once all the changes are done and tested execute this command to push changes and ask clients/partners to update the package.

```javascript
$ npm publish
```

## Installation

```javascript
$ npm install --save pasarpolis-sdk-nodejs
```

## Run example
```javascript
$ node example/
```

## Initialize
To initialize client call below function
```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)
```
where:  
* <strong>PartnerCode</strong> (string)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (string)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (string)                  : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:        https://integrations-testing.pasarpolis.io
   * <strong>Sandbox</strong>:     https://integrations-sandbox.pasarpolis.io
   * <strong>Production</strong>: https://integrations.pasarpolis.io

### Example
```javascript
const sdk = require('pasarpolis-sdk-nodejs')
 ..............
 ..............
 ..............
const client = sdk.init("MyDummyCode","a8516a5b-6c32-4228-907e-6f14761c61cb", "https://integrations.pasarpolis.io")
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will raise error.
2. Please make sure you initialize client only once i.e. at start of your app else it will raise error.

## 1. Config Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature

```javascript
client.configCreatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection'
const params = {
    "note": "",
    "email_id": "john.doe@example.com",
    "phone_no": "+6200000000000",
    "reference_id": "R1",
    "make": "Apple",
    "model": "iPhone X",
    "purchase_date": "2018-12-20",
    "purchase_value": 32000.00
}
const configCreatePolicy = client.configCreatePolicy(packageName, params)

/** It will give response as promise */ 
configCreatePolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it will give output as

```javascript
{ 
    application_no: 'APP-000001082',
    ref: 'bb078624e8c24d3629ffc6102441f42b22276daf',
    premium: 15000
}
```

## 2. Config Validate Policy

Validate policy will validate a new policy and will return a Policy object having message

### Signature

```javascript
client.configValidatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection'
const params = {
    "note": "",
    "email_id": "john.doe@example.com",
    "phone_no": "+6200000000000",
    "reference_id": "R1",
    "make": "Apple",
    "model": "iPhone X",
    "purchase_date": "2018-12-20",
    "purchase_value": 32000.00
}
const configValidatePolicy = client.configValidatePolicy(packageName, params)

/** It will give response as promise */ 
configValidatePolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it will give output as

```javascript
{
    "message": "Valid request"
}
```

## 3. Create Policy

Create policy will create a new policy and will return a Policy object having ```application_number, premium``` and ```reference_number```.

### Signature
```javascript
client.createPolicy(<Product>, <Params>)
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example
```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection'
const params = {
    "note": "",
    "email_id": "john.doe@example.com",
    "phone_no": "+6200000000000",
    "reference_id": "R1",
    "make": "Apple",
    "model": "iPhone X",
    "purchase_date": "2018-12-20",
    "purchase_value": 32000.00
}
const createPolicy = client.createPolicy(packageName, params)

/** It will give response as promise */ 
createPolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```
it will give output as
```javascript
{ 
    application_no: 'APP-000001082',
    ref: 'bb078624e8c24d3629ffc6102441f42b22276daf',
    premium: 15000
}
```

## 4. Validate Policy

Validate policy will validate a new policy and will return a Policy object having message

### Signature

```javascript
client.validatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>message</strong> (string): Message containing content <b>Valid request</b>.

### Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection'
const params = {
    "note": "",
    "email_id": "john.doe@example.com",
    "phone_no": "+6200000000000",
    "reference_id": "R1",
    "make": "Apple",
    "model": "iPhone X",
    "purchase_date": "2018-12-20",
    "purchase_value": 32000.00
}
const validatePolicy = client.validatePolicy(packageName, params)

/** It will give response as promise */ 
validatePolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it will give output as

```javascript
{
    "message": "Valid request"
}
```

## 5. Bulk Create Policy

Bulk Create policy will create a new policies and will return a Policy object having ```application_number```, premium and ```reference_number```.

### Signature
```javascript
client.createAggregatePolicy(<Product>, <Params>)
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(expect: array) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example
```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection-ultra'
const params = [
        {
           "reference_id":"2c104b94-3705-45d2-bd1e-test1",
           "policy_insured":{
              "name":"John Doe",
              "phone_no":"627888910122",
              "email":"abc5@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456789111"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"FGK",
                 "flight_code":"JT-341",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187651"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-342",
                 "departure_date":"2019-01-01 13:23:00",
                 "destination_airport_code":"DEL",
                 "pnr":"187659"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }, {
           "reference_id":"2c104b94-3705-45d2-bd1e-test2",
           "policy_insured":{
              "name":"Alice Doe",
              "phone_no":"627888910121",
              "email":"abc3@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456712113"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"KLJ",
                 "flight_code":"JT-3422",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187661"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-345",
                 "departure_date":"2019-01-01 14:23:00",
                 "destination_airport_code":"KLP",
                 "pnr":"187662"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }
]
const createPolicy = client.createAggregatePolicy(packageName, params)

/** It will give response as promise */ 
createAgrregatePolicy
    .then(response => {
        if (response.detail !== undefined)
            console.log(response.detail.errors)
        else
            console.log(response)
    })
    .catch(err => console.log(err))
```
it will give output as
```javascript
{ policies:
   { '2c104b94-3705-45d2-bd1e-test1':
      { 
        application_no: 'APP-000001611',
        ref: '1647ef8e3829420918cf558be11739ad4727988c'
      },
     '2c104b94-3705-45d2-bd1e-test2':
      { 
        application_no: 'APP-000001612',
        ref: '093120441b0c5c981be8780063d7f7899a657f8e' 
      } 
   } 
}
```

## 6. Bulk Validate Policy

Bulk Validate policy will validate a new policy and will return a Policy object having message.

### Signature

```javascript
client.validateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(expect: array) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

it will return a ```Policy``` object which contains:  

* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.
* <strong>premium</strong> (interger): Premium amount for policy.

### Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const packageName = 'travel-protection-ultra'
const params = [
        {
           "reference_id":"2c104b94-3705-45d2-bd1e-test1",
           "policy_insured":{
              "name":"John Doe",
              "phone_no":"627888910122",
              "email":"abc5@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456789111"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"FGK",
                 "flight_code":"JT-341",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187651"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-342",
                 "departure_date":"2019-01-01 13:23:00",
                 "destination_airport_code":"DEL",
                 "pnr":"187659"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }, {
           "reference_id":"2c104b94-3705-45d2-bd1e-test2",
           "policy_insured":{
              "name":"Alice Doe",
              "phone_no":"627888910121",
              "email":"abc3@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456712113"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"KLJ",
                 "flight_code":"JT-3422",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187661"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-345",
                 "departure_date":"2019-01-01 14:23:00",
                 "destination_airport_code":"KLP",
                 "pnr":"187662"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }
]
const createPolicy = client.validateAggregatePolicy(packageName, params)

/** It will give response as promise */ 
validateAgrregatePolicy
    .then(response => {
        if (response.detail !== undefined)
            console.log(response.detail.errors)
        else
            console.log(response)
    })
    .catch(err => console.log(err))
```

it will give output as

```javascript
{
    "message": "Valid request"
}
```

## 7. Get Policy Status   

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature

```javascript
client.getPolicyStatus(<ReferenceNumbers>)
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
* <strong>expiry_date</strong> (string): expiry date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.

###Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const getPolicyStatus = client.getPolicyStatus("48fc2801e487af79ef311621f63e4133c")

/** It will give response as promise */ 
getPolicyStatus
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it gives output as:

```javascript
[
    {
        "ref": "48fc2801e487af79ef311621f63e4133c",
        "application_no": "APP-000067293",
        "document_url": "",
        "policy_no": "CIAK0000000032",
        "status_code": 5,
        "status": "COMPLETED",
        "issue_date": "2020-11-05 08:41:24",
        "message": "",
        "partner_ref": "cip-00000029",
        "product_key": "credit-insurance-protection",
        "expiry_date": "2020-12-03 08:10:00",
        "activation_url": ""
    }
]
```

## 8. Cancellation

Cancellation will move an existing policy from COMPLETED state to CANCELLED and will return closure_id for reference  

###Signature

```javascript
client.cancelPolicy(<RefID>, <Params>)
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

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const refID = '456712345679876qwertg23'
const params = {
    "execution_date": "2020-09-01 14:12:12",
    "user": "johndoe@example.com",
    "reason": "wrong policy created"
}
const cancelPolicy = client.cancelPolicy(refID, params)

/** It will give response as promise */ 
cancelPolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it gives output as:

```python
{
    "closure_id": 1
}
```

## 9. Termination

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```python
client.terminatePolicy(<RefID>, <Params>)
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

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const refID = '456712345679876qwertg23'
const params = {
    "execution_date": "2020-09-01 14:12:12",
    "user": "johndoe@example.com",
    "reason": "wrong policy created"
}
const terminatePolicy = client.terminatePolicy(refID, params)

/** It will give response as promise */ 
terminatePolicy
    .then(response => console.log(response))
    .catch(err => console.log(err))
```



it gives output as:

```python
{
    "closure_id": 1
}
```

## 10. Create Config Aggregate Policy

Config Aggregate Policy will create aggreate policy.

###Signature

```javascript
clint.configCreateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(expect: array) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

###Example

```javascript
const packageName = 'travel-protection-ultra'
const params = [
        {
           "reference_id":"2c104b94-3705-45d2-bd1e-test1",
           "policy_insured":{
              "name":"John Doe",
              "phone_no":"627888910122",
              "email":"abc5@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456789111"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"FGK",
                 "flight_code":"JT-341",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187651"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-342",
                 "departure_date":"2019-01-01 13:23:00",
                 "destination_airport_code":"DEL",
                 "pnr":"187659"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }, {
           "reference_id":"2c104b94-3705-45d2-bd1e-test2",
           "policy_insured":{
              "name":"Alice Doe",
              "phone_no":"627888910121",
              "email":"abc3@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456712113"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"KLJ",
                 "flight_code":"JT-3422",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187661"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-345",
                 "departure_date":"2019-01-01 14:23:00",
                 "destination_airport_code":"KLP",
                 "pnr":"187662"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }
]


const createConfigAggregatePolicy = client.configCreateAggregatePolicy(packageName, params);

createConfigAggregatePolicy
			.then(response => console.log(response))
	    .catch(err => console.log(err))

```

it will give output as

```javascript
{ policies:
   { '2c104b94-3705-45d2-bd1e-test1':
      { 
        application_no: 'APP-000001611',
        ref: '1647ef8e3829420918cf558be11739ad4727988c'
      },
     '2c104b94-3705-45d2-bd1e-test2':
      { 
        application_no: 'APP-000001612',
        ref: '093120441b0c5c981be8780063d7f7899a657f8e' 
      } 
   } 
}
```

## 11.  Policy Status V3  

Get policy status will give status of the policy created by providing policy reference number. It will return array of policies object being queried for.  

###Signature

```javascript
client.getPolicyStatusV3(<ReferenceNumbers>)
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
* <strong>expiry_date</strong> (string): expiry date(YYYY-MM-DD hh:mm:ss) of a given policy.
* <strong>activation_url</strong> (string): activation url of a given policy if activation flow present for policy.

###Example

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const getPolicyStatusV3 = client.getPolicyStatusV3("48fc2801e487af79ef311621f63e4133c")

/** It will give response as promise */ 
getPolicyStatusV3
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it gives output as:

```javascript
[
    {
        "ref": "48fc2801e487af79ef311621f63e4133c",
        "application_no": "APP-000067293",
        "document_url": "",
        "policy_no": "CIAK0000000032",
        "status_code": 5,
        "status": "COMPLETED",
        "issue_date": "2020-11-05 08:41:24",
        "message": "",
        "partner_ref": "cip-00000029",
        "product_key": "credit-insurance-protection",
        "expiry_date": "2020-12-03 08:10:00",
        "activation_url": ""
    }
]
```

## 12. Termination V3

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  in V3

###Signature

```python
client.terminatePolicyV3(<RefID>, <Params>)
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

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const refID = '456712345679876qwertg23'
const params = {
    "execution_date": "2020-09-01 14:12:12",
    "user": "johndoe@example.com",
    "reason": "wrong policy created"
}
const terminatePolicyV3 = client.terminatePolicyV3(refID, params)

/** It will give response as promise */ 
terminatePolicyV3
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it gives output as:

```python
{
    "closure_id": 1
}
```

## 13. Cancellation V3

Cancellation will move an existing policy from COMPLETED state to TERMINATED and will return closure_id for reference  

###Signature

```python
client.cancelPolicyV3(<RefID>, <Params>)
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

```javascript
const sdk = require('pasarpolis-sdk-nodejs')
const client = sdk.init(<PartnerCode>, <PartnerSecret>, <Host>)

const refID = '456712345679876qwertg23'
const params = {
    "execution_date": "2020-09-01 14:12:12",
    "user": "johndoe@example.com",
    "reason": "wrong policy created"
}
const cancelPolicyV3 = client.cancelPolicyV3(refID, params)

/** It will give response as promise */ 
cancelPolicyV3
    .then(response => console.log(response))
    .catch(err => console.log(err))
```

it gives output as:

```python
{
    "closure_id": 1
}
```

## 14. Validate Config Aggregate Policy

Config Aggregate Policy will validate the request payload for the aggreate policy.

###Signature

```javascript
clint.configValidateAggregatePolicy(<Product>, <Params>)
```

where:  

* Product(string) : Type of product for which policy is being created.  
* Params(expect: array) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  

###Example

```javascript
const packageName = 'travel-protection-ultra'
const params = [
        {
           "reference_id":"2c104b94-3705-45d2-bd1e-test1",
           "policy_insured":{
              "name":"John Doe",
              "phone_no":"627888910122",
              "email":"abc5@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456789111"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"FGK",
                 "flight_code":"JT-341",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187651"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-342",
                 "departure_date":"2019-01-01 13:23:00",
                 "destination_airport_code":"DEL",
                 "pnr":"187659"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }, {
           "reference_id":"2c104b94-3705-45d2-bd1e-test2",
           "policy_insured":{
              "name":"Alice Doe",
              "phone_no":"627888910121",
              "email":"abc3@example.com",
              "gender":"Male",
              "identity_type":1,
              "identity_number":"123456712113"
           },
           "flight_information":[
              {
                 "type":0,
                 "airport_code":"KLJ",
                 "flight_code":"JT-3422",
                 "departure_date":"2019-01-01 04:30:00",
                 "destination_airport_code":"KUL",
                 "pnr":"187661"
              },
              {
                 "type":1,
                 "airport_code":"KUL",
                 "flight_code":"QG-345",
                 "departure_date":"2019-01-01 14:23:00",
                 "destination_airport_code":"KLP",
                 "pnr":"187662"
              }
           ],
           "booking_code":"ABC123455",
           "travel_type":1,
           "transit_type":1,
           "travel_destination":1,
           "trip_reason":1,
           "note":"",
           "package_id":1
        }
]


const validateConfigAggregatePolicy = client.configValidateAggregatePolicy(packageName, params);

validateConfigAggregatePolicy
			.then(response => console.log(response))
	    .catch(err => console.log(err))

```

it will give output as

```javascript
{
    "message": "Valid request"
}
```



##Testcases

To run testcases for sdk simply go to root of sdk and run following command  

```
$ npm run test
```
it should pass all testcases as follows   
```
......................
Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        2.782s, estimated 4s
```
                                        ***END***