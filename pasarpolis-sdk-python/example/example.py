# import pasarpolis
import json
import time
from copy import deepcopy
import uuid
from pasarpolis import Policy
from pasarpolis import Client

#Config Validate Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"package_id":"pkg1", "name":"Nm1"}'
params = json.loads(json_string)
params["reference_id"] = str(int(time.time() * 1000))
policy = Policy.config_validate_policy("test-p-10045", params)

#Config Create Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"package_id":"pkg1", "name":"Nm1"}'
params = json.loads(json_string)
params["reference_id"] = str(int(time.time() * 1000))
policy = Policy.config_create_policy("test-p-10045", params)


#Validate Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"dob": "1974-02-09", "uuid": "<partner-secret>", "email": "neha.shrivastava@pasarpolis.com", "userid": "", "nominee": "Dini Hartati Lumban Gaol", "package": "default", "premium": "49000", "frame_no": "MHKA6GJ6JHJ033672", "driver_id": "", "engine_no": "3NRH092894", "full_name": "ROGANDA LUMBAN GAOL", "handphone": "089999999999", "license_no": "740207143077", "vehicle_year": "2018", "vehicle_brand": "TOYOTA", "vehicle_model": "CALYA 1.2 G MT", "vehicle_plate": "BK1213EG", "referred_by_agent": "", "relationship_with_nominee": "Anak", "product": "go-car-simple"}'
params = json.loads(json_string)
params["uuid"] = str(int(time.time() * 1000))
params["vehicle_plate"] = str(int(time.time() * 1000))
policy = Policy.validate_policy("go-car-simple", params)    


#Create Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"dob": "1974-02-09", "uuid": "<partner-secret>", "email": "neha.shrivastava@pasarpolis.com", "userid": "", "nominee": "Dini Hartati Lumban Gaol", "package": "default", "premium": "49000", "frame_no": "MHKA6GJ6JHJ033672", "driver_id": "", "engine_no": "3NRH092894", "full_name": "ROGANDA LUMBAN GAOL", "handphone": "089999999999", "license_no": "740207143077", "vehicle_year": "2018", "vehicle_brand": "TOYOTA", "vehicle_model": "CALYA 1.2 G MT", "vehicle_plate": "BK1213EG", "referred_by_agent": "", "relationship_with_nominee": "Anak", "product": "go-car-simple"}'
params = json.loads(json_string)
params["uuid"] = str(int(time.time() * 1000))
params["vehicle_plate"] = str(int(time.time() * 1000))
policy = Policy.create_policy("go-car-simple", params)    


#Aggregate Validate Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"note": "", "package_id": 2, "travel_type": 2, "trip_reason": 1,  "booking_code": "11ASN11968E", "reference_id": "INS11ASN11968E-828-3", "transit_type": 0, "policy_insured": {"name": "Sarah Quinn", "email": "abc@gmail.com", "gender": "Female", "phone_no": "0865267522", "date_of_birth": "", "identity_type": 0, "identity_number": ""}, "flight_information": [{"pnr": "DEVCZ0QJ", "type": 0, "flight_code": "QZ-7518", "airport_code": "CGK", "departure_date": "2019-06-12 19:30:00", "destination_airport_code": "DPS"}, {"pnr": "DEV8WROT", "type": 2, "flight_code": "SJ-275", "airport_code": "DPS", "departure_date": "2019-06-18 13:35:00", "destination_airport_code": "CGK"}], "travel_destination": 1}'
options = []
for i in [1,2]:
  params = deepcopy(json.loads(json_string))
  params["reference_id"] = str(uuid.uuid4())  
  options.append(params)
policies = Policy.validate_aggregate_policy("travel-protection-ultra", options)


#Aggregate Create Policy Example
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"note": "", "package_id": 2, "travel_type": 2, "trip_reason": 1,  "booking_code": "11ASN11968E", "reference_id": "INS11ASN11968E-828-3", "transit_type": 0, "policy_insured": {"name": "Sarah Quinn", "email": "abc@gmail.com", "gender": "Female", "phone_no": "0865267522", "date_of_birth": "", "identity_type": 0, "identity_number": ""}, "flight_information": [{"pnr": "DEVCZ0QJ", "type": 0, "flight_code": "QZ-7518", "airport_code": "CGK", "departure_date": "2019-06-12 19:30:00", "destination_airport_code": "DPS"}, {"pnr": "DEV8WROT", "type": 2, "flight_code": "SJ-275", "airport_code": "DPS", "departure_date": "2019-06-18 13:35:00", "destination_airport_code": "CGK"}], "travel_destination": 1}'
options = []
for i in [1,2]:
  params = deepcopy(json.loads(json_string))
  params["reference_id"] = str(uuid.uuid4())  
  options.append(params)
policies = Policy.create_aggregate_policy("travel-protection-ultra", options)    


#Policy Status
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
ids = ["b35cdd1af5691b5815834d05317960f770dd3ce1"]
policy = Policy.get_policy_status(ids)


# Cancellation API
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"execution_date":"2020-03-03 16:00:00","reason":"wrong policy created","user":"test@pasarpolis.com"}'
params = json.loads(json_string)
ref_id = "13bdf56c703ecee54186b1d745700cc7ae54ae4a"
policy = Policy.cancel_policy(ref_id, params)


#Termination API
Client.init("<partner-code>","<partner-secret>", "https://integrations-testing.pasarpolis.io")
json_string = '{"execution_date":"2020-03-03 16:00:00","reason":"wrong policy created","user":"test@pasarpolis.com"}'
params = json.loads(json_string)
ref_id = "13bdf56c703ecee54186b1d745700cc7ae54ae4a"
policy = Policy.termainate_policy(ref_id, params)
