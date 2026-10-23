import random
import unittest
import json
import time
from datetime import datetime, timedelta

from pasarpolis import Client, Policy
from copy import deepcopy
import uuid

Client.init("test-partner", "test-secret", "http://localhost:8099")


class TestPolicy(unittest.TestCase):

    def test_get_client(self):
        self.assertFalse(Client.get_client == None)

    def test_create_policy(self):
        params_str = "{\"note\": \"\", \"userid\": \"\", \"package_id\": 1, \"travel_type\": 1, \"trip_reason\": 5, " \
                     "\"booking_code\": \"242428064\", \"reference_id\": \"146214\", \"transit_type\": 0, " \
                     "\"inception_date\": \"2018-12-22\", \"policy_insured\": [{\"city\": \"*\", \"name\": " \
                     "\"Titie Andelina Wiji\", \"email\": \"neha.shrivastava@pasarpolis.com\", \"gender\": \"Male\", " \
                     "\"address\": \"*\", \"phone_no\": \"*\", \"zip_code\": \"*\", \"handphone_no\": " \
                     "\"089999999999\", " \
                     "\"date_of_birth\": \"\", \"identity_type\": 2, \"insured_status\": 1, \"identity_number\": " \
                     "\"*\", \"policy_holder_status\": 1}], \"flight_information\": [{\"city\": \"Jakarta\", " \
                     "\"type\": 0, \"flight_code\": \"QG-22\", \"airport_code\": \"HLP\", \"departure_date\": " \
                     "\"2018-12-22 08:25:00\"}], \"policy_beneficiary\": [{\"name\": \"Titie Andelina Wiji\", " \
                     "\"relationship\": 11}], \"travel_destination\": 1}"
        product = "travel-protection"
        self.create_policy(params_str, product)

    def create_policy(self, params_str, product):
        params = json.loads(params_str)
        params["reference_id"] = str(int(time.time() * 1000))
        product = product
        policy = Policy.create_policy(product, params)
        self.assertFalse(policy.application_number is None)
        self.assertFalse(policy.reference_number is None)
        return policy

    def test_create_aggregate_policy(self):
        params = json.loads(
            '{"note": "", "package_id": 2, "travel_type": 2, "trip_reason": 1,  "booking_code": "11ASN11968E", "reference_id": "INS11ASN11968E-828-3", "transit_type": 0, "policy_insured": {"name": "Sarah Quinn", "email": "abc@gmail.com", "gender": "Female", "phone_no": "0865267522", "date_of_birth": "", "identity_type": 0, "identity_number": ""}, "flight_information": [{"pnr": "DEVCZ0QJ", "type": 0, "flight_code": "QZ-7518", "airport_code": "CGK", "departure_date": "2019-06-12 19:30:00", "destination_airport_code": "DPS"}, {"pnr": "DEV8WROT", "type": 2, "flight_code": "SJ-275", "airport_code": "DPS", "departure_date": "2019-06-18 13:35:00", "destination_airport_code": "CGK"}], "travel_destination": 1}')
        options = []
        for i in [1, 2]:
            p = deepcopy(params)
            p['reference_id'] = str(uuid.uuid4())
            options.append(p)
        product = "travel-protection-ultra"
        policies = Policy.create_aggregate_policy(product, options)
        ref_num = options[0]['reference_id']
        self.assertFalse(policies[ref_num].application_number == None)
        self.assertFalse(policies[ref_num].reference_number == None)

    # def test_renew_policy(self):
    #     product = "health-protection-plus"
    #     params_str = {
    #         'reference_id': '29840002' + str(random.randint(100000, 999999)),
    #         'product': 'health-protection-plus',
    #         'buyer_name': 'Test name',
    #         'package_id': 1,
    #         'gender': 'male',
    #         'phone_no': '0215651139',
    #         'email': 'email@yahoo.com',
    #         'date_of_birth': '2002-01-31',
    #         'ktp_no': '1234567890' + str(random.randint(100000, 999999))
    #     }
    #     policy = self.create_policy(json.dumps(params_str), product)
    #     start_date = datetime.now() + timedelta(days=31)
    #     params = {
    #         "start_date": start_date.strftime("%Y-%m-%d"),
    #         "end_date": (start_date + timedelta(days=30)).strftime("%Y-%m-%d"),
    #         "premium": 15000,
    #         "internal_id": policy.reference_number
    #     }
    #     product = "health-protection-plus"
    #     time.sleep(90)  # This is to wait until the worker has finished it's job to populate coverage periods
    #     policy = Policy.renew_policy(product, params)
    #     self.assertFalse(policy.application_number is None)
    #     self.assertFalse(policy.reference_number is None)

    def test_get_policy_status(self):
        self.assertFalse('Foo'.isupper())
        policies = Policy.get_policy_status(["56cd220ca8d9a348f92f1651a7019951d8ac3eb8"])
        self.assertEqual(len(policies), 1)
        policy = policies[0]
        self.assertFalse(policy.reference_number == None)
        self.assertFalse(policy.status == None)


if __name__ == '__main__':
    unittest.main()
