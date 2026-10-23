require_relative "../pasarpolis_sdk"
require 'json'

PasarpolisSdk.init("pasarpolis","xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "https://integrations-staging.pasarpolis.com")

json_string = "{\"note\": \"\", \"userid\": \"\", \"package_id\": 1, \"travel_type\": 1, \"trip_reason\": 5, \"booking_code\": \"242428064\", \"reference_id\": \"146214\", \"transit_type\": 0, \"inception_date\": \"2018-12-22\", \"policy_insured\": [{\"city\": \"*\", \"name\": \"Titie Andelina Wiji\", \"email\": \"neha.shrivastava@pasarpolis.com\", \"gender\": \"Male\", \"address\": \"*\", \"phone_no\": \"*\", \"zip_code\": \"*\", \"handphone_no\": \"089999999999\", \"date_of_birth\": \"\", \"identity_type\": 2, \"insured_status\": 1, \"identity_number\": \"*\", \"policy_holder_status\": 1}], \"flight_information\": [{\"city\": \"Jakarta\", \"type\": 0, \"flight_code\": \"QG-22\", \"airport_code\": \"HLP\", \"departure_date\": \"2018-12-22 08:25:00\"}], \"policy_beneficiary\": [{\"name\": \"Titie Andelina Wiji\", \"relationship\": 11}], \"travel_destination\": 1}"
params = JSON.parse(json_string)
policy = Pasarpolis::Policy.create_policy("travel-protection", params)

policies = Psarpolis::Policy.get_policy_status([policy.reference_number])

policies = Pasarpolis::Policy.get_policy_status(["48fc2801e487af79ef311621f63e4133c5318b99"])