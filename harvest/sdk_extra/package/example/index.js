const sdk = require('../index')

const client = sdk.init('<partner>', '<secret>', 'https://integrations-testing.pasarpolis.com')
const create = client.createPolicy(
    'travel-protection',
    {
        "note": "",
        "package_id": 1,
        "travel_type": 1,
        "trip_reason": 5,
        "booking_code": "200080104",
        "reference_id": 'node-sdk-test' + `${+new Date}`,
        "transit_type": 0,
        "inception_date": "2018-10-06",
        "policy_insured": [
            {
                "city": "*",
                "name": "bobert",
                "email": "bobert@pasarpolis.com",
                "gender": "Female",
                "address": "*",
                "phone_no": "*",
                "zip_code": "*",
                "handphone_no": "62-82189661748",
                "date_of_birth": "",
                "identity_type": 2,
                "insured_status": 1,
                "identity_number": "*",
                "policy_holder_status": 1
            }
        ],
        "flight_information": [
            {
                "city": "Jakarta",
                "type": 0,
                "flight_code": "QZ-7534",
                "airport_code": "CGK",
                "departure_date": "2018-11-28 22:45:00"
            }
        ],
        "policy_beneficiary": [
            {
                "name": "Mulyana Mulyana",
                "relationship": 11
            }
        ],
        "travel_destination": 1,
    }
)
create
    .then(response => console.log(response))
    .catch(err => console.log(err))

const status = client.getPolicyStatus('48fc2801e487af79ef311621f63e4133c5318b99')
status
    .then(response => console.log(response))
    .catch(err => console.log(err))

const createAgrregatePolicy = client.createAggregatePolicy(
    'travel-protection-ultra',
    [
        {
           "reference_id":"2c104b94-3705-45d2-bd1e-testa" + `${+new Date}`,
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
           "reference_id":"2c104b94-3705-45d2-bd1e-testb" + `${+new Date}`,
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
)

createAgrregatePolicy
    .then(response => {
        if (response.detail !== undefined)
            console.log(response.detail.errors)
        else
            console.log(response)
    })
    .catch(err => console.log(err))