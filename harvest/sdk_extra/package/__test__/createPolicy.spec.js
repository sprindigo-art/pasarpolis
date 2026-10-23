const sdk = require('../lib/client')
const shortid = require('shortid')

const packageName = 'travel-protection'
const params = {
    "note": "",
    "package_id": 1,
    "travel_type": 1,
    "trip_reason": 5,
    "booking_code": "200080104",
    "reference_id": shortid.generate('0123456789'),
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

// Should throw TypeError, due not init sdk with credentials first
test('Should throw a TypeError', () => {
    try {
        sdk.createPolicy(packageName, params)
    } catch (error) {
        expect(error).toBe('please complete your credentials')
    }
})

// init credentials first
const client = sdk.init('<partner>', '<secret>', 'https://integrations-testing.pasarpolis.com')

// Create policy should success
test('Should success register', (done) => {
    const status = client.createPolicy(packageName, params)
    status
        .then(response => {
            expect(response).toHaveProperty('application_no')
            done()
        })
        .catch(err => console.log(err))
})

// Create policy should failed cause duplicate reference_id
test('Should failed register', (done) => {
    const status = client.createPolicy(packageName, Object.assign(params, {"reference_id": "10910"}))
    status
        .then(response => {
            expect(response).toHaveProperty('error')
            done()
        })
        .catch(err => console.log(err))
})