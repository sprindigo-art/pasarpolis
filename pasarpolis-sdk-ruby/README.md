# Pasarpolis SDK for Ruby 
This repository contains SDK for integrating Pasapolis API into your Go code.

## Installation
To add this gem, add following line to your Gemfile
```
gem 'pasarpolis_sdk', git: 'https://gitlab.com/pasarpolis/pasarpolis-sdk-ruby.git', tag: '2.1' 
```

## Initialize
To initialize client call below function
```
require 'pasarpolis_sdk'
PasarpolisSdk.init(<PartnerCode>, <PartnerSecret>, <Host>)
```
where:  
* <strong>PartnerCode</strong> (string)    : Provided by Pasarpolis for Authentication.  
* <strong>PartnerSecret</strong> (string)  : Secret Key provided by Pasarpolis.  
* <strong>Host</strong> (string)           : Fully qualified domain name as specified below.  
   * <strong>Testing</strong>:    https://integrations-testing-v2.pasarpolis.com.  
   * <strong>Sandbox</strong>:    https://integrations-sandbox.pasarpolis.com.  
   * <strong>Production</strong>: https://integrations.pasarpolis.com.  

### Example
```
require 'pasarpolis_sdk'
 ..............
 ..............
 ..............
PasarpolisSdk.init("MyDummyCode","a8516a5b-6c32-4228-907e-6f14761c61cb", "https://integrations.pasarpolis.com")
```
The above code snippet will intialize Pasarpolis client at initialization of app.

### Note
1. Initialize client before calling any functionality of SDK else it will raise error.
2. Please make sure you initialize client only once i.e. at start of your app else it will raise error.


## Create Policy
Create policy will create a new policy and will return a Policy object having ```application_number``` and ```reference_number```.

### Signature
```
policy = Pasarpolis::Policy.create_policy(<Product>, <Params>);
```
where:  
* Product(string) : Type of product for which policy is being created.  
* Params(hash) : Product specific data to be sent. Signature of every product specific data is provided [here](https://gitlab.com/pasarpolis/pasarpolis-sdk-java/tree/master/product_type_doc).  
   
it will return a ```Policy``` object which contains:  
* <strong>reference_number</strong> (string): Hexadecimal number provided by Pasarpolis for future reference.
* <strong>application_number</strong> (string): Number provided for future reference.

### Example
```
require "pasarpolis_sdk"


params = {}
params["name"]="Jacob"
........................
........................
........................
params["last_property"]=true
policy = Pasarpolis::Policy.create_policy("travel-protection", params);
puts policy.reference_number
puts policy.application_number
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
policies = Pasarpolis::Policy.get_policy_status(<ReferenceNumbers>);
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

###Example
```
require 'pasarpolis_sdk'


refs = ["d77d436ad9485b86b8a0c18c3d2f70f77a10c43d"]
policies = Pasarpolis::Policy.get_policy_status(refs)
puts policies[0].status

```
it gives output as:
```
PENDING
```


##Testcases
To run testcases for sdk simply <strong>change the secret key</strong> in spec folder, then go to root of sdk and run following command  
```
rspec spec
```
it should pass all testcases as follows   
```
......................

Finished in 3.67 seconds (files took 0.14976 seconds to load)
8 examples, 0 failures

```
                                        ***END***