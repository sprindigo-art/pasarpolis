from .client import Client
import json
from .request import RequestManager


class Policy:

    def __init__(self, options):
        self.application_number = options.get('application_number', None)
        self.reference_number = options.get('reference_number', None)
        self.premium = options.get('premium', None)
        self.document_url = options.get('document_url', None)
        self.policy_number = options.get('policy_number', None)
        self.status_code = options.get('status_code', None)
        self.issue_date = options.get('issue_date', None)
        self.status = options.get('status', None)
        self.message = options.get('message', None)
        self.partner_ref = options.get('partner_ref', None)
        self.product_key = options.get('product_key', None)
        self.expiry_date = options.get('expiry_date', None)
        self.activation_url = options.get('activation_url', None)
        self.closure_id = options.get('closure_id', None)
        self.coverage_start_date = options.get('coverage_start_date', None)
        self.coverage_end_date = options.get('coverage_end_date', None)
        self.package_code = options.get('package_code', None)
        self.endorsement_token = options.get('endorsement_token', None)
        self.endorsement_status = options.get('endorsement_status', None)
    
    @staticmethod
    def config_create_policy(product, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        path = "/api/v1/config/createpolicy/" + product
        request_manager = RequestManager({
            'domain': client.host,
            'path': path,
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'reference_number': body["ref"],
            'application_number': body["application_no"],
            'premium': body["premium"]
        })
    
    @staticmethod
    def config_validate_policy(product, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        path = "/api/v1/config/validatepolicy/" + product
        request_manager = RequestManager({
            'domain': client.host,
            'path': path,
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'message': body.get("message", None),
        })

    @staticmethod
    def create_policy(product, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        options['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v2/createpolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'reference_number': body["ref"],
            'application_number': body["application_no"],
            'premium': body["premium"]
        })

    @staticmethod
    def validate_policy(product, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        options['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v2/validatepolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'message': body.get("message", None),
        })

    @staticmethod
    def create_aggregate_policy(product, options):
        if (not isinstance(options, list)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        for option in options:
            option['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v3/createaggregatepolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        data = response.body["policies"]
        policies = {}
        for key in data:
            policies[key] = Policy({
                'reference_number': data[key]["ref"],
                'application_number': data[key]["application_no"],
                'premium': data[key]["premium"]
            })
        return policies

    @staticmethod
    def validate_aggregate_policy(product, options):
        if (not isinstance(options, list)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        for option in options:
            option['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v2/validateaggregatepolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'message': body.get("message", None),
        })

    @staticmethod
    def get_policy_status(ids):
        if (not isinstance(ids, list)):
            raise Exception("Invalid input, expected Array")
        client = Client.get_client()
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v2/policystatus/",
            'content_type': "application/json",
            'params': {'ids': ids},
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })
        response = request_manager.post()
        policies = []
        body = response.body
        length = len(body)
        i = 0

        while (i < length):
            policy = body[i]
            print(policy)
            policies.append(Policy({
                'reference_number': policy.get("ref", None),
                'application_number': policy.get("application_no", None),
                'document_url': policy.get("document_url", None),
                'policy_number': policy.get("policy_no", None),
                'status_code': policy.get("status_code", None),
                'status': policy.get("status", None),
                'issue_date': policy.get("issue_date", None),
                'message': policy.get("message", None),
                'partner_ref': policy.get("partner_ref", None),
                'product_key': policy.get("product_key", None),
                'package_code': policy.get("package_code", None),
                'expiry_date': policy.get("expiry_date", None),
                'activation_url': policy.get("activation_url", None),
                'coverage_start_date': policy.get("coverage_start_date", None),
                'coverage_end_date': policy.get("coverage_end_date", None),
            }))
            i = i + 1
        return policies
    
    @staticmethod
    def get_policy_status_v3(ids):
        if (not isinstance(ids, list)):
            raise Exception("Invalid input, expected Array")
        client = Client.get_client()
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v3/policystatus/",
            'content_type': "application/json",
            'params': {'ids': ids},
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })
        response = request_manager.post()
        policies = []
        body = response.body
        length = len(body)
        i = 0

        while (i < length):
            policy = body[i]
            print(policy)
            policies.append(Policy({
                'reference_number': policy.get("ref", None),
                'application_number': policy.get("application_no", None),
                'document_url': policy.get("document_url", None),
                'policy_number': policy.get("policy_no", None),
                'status': policy.get("status", None),
                'partner_ref': policy.get("partner_ref", None),
                'product_key': policy.get("product_key", None),
                'package_code': policy.get("package_code", None),
                'activation_url': policy.get("activation_url", None),
                'coverage_start_date': policy.get("coverage_start_date", None),
                'coverage_end_date': policy.get("coverage_end_date", None),
                'endorsement_token': policy.get("endorsement_token", None),
                'endorsement_status': policy.get("endorsement_status", None),
            }))
            i = i + 1
        return policies

    @staticmethod
    def cancel_policy(ref_id, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        path = "/api/v3/cancellation/" + ref_id
        request_manager = RequestManager({
            'domain': client.host,
            'path': path,
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'closure_id': body.get("closure_id", None),
        })

    @staticmethod
    def terminate_policy(ref_id, options):
        if (not isinstance(options, dict)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        path = "/api/v3/termination/" + ref_id
        request_manager = RequestManager({
            'domain': client.host,
            'path': path,
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'closure_id': body.get("closure_id", None),
        })

    @staticmethod
    def config_create_aggregate_policy(product, options):
        if (not isinstance(options, list)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        for option in options:
            option['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v1/config/createaggregatepolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        data = response.body["policies"]
        policies = {}
        for key in data:
            policies[key] = Policy({
                'reference_number': data[key]["ref"],
                'application_number': data[key]["application_no"],
                'premium': data[key]["premium"]
            })
        return policies

    @staticmethod
    def config_validate_aggregate_policy(product, options):
        if (not isinstance(options, list)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        for option in options:
            option['product'] = product
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v1/config/validateaggregatepolicy/",
            'content_type': "application/json",
            'params': options,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        body = response.body
        return Policy({
            'message': body.get("message", None),
        })

    @staticmethod
    def create_multiple_policy_by_id(product, options, aggregate_reference_id):
        if (not isinstance(options, list)):
            raise Exception("Invalid params type")
        client = Client.get_client()
        for option in options:
            option['product'] = product
        
        request_body = {}
        request_body["aggregate_reference_id"] = aggregate_reference_id
        request_body["data"] = options
        request_manager = RequestManager({
            'domain': client.host,
            'path': "/api/v3/createmultiplepolicybyid/",
            'content_type': "application/json",
            'params': request_body,
            'partner_code': client.partner_code,
            'partner_secret': client.partner_secret
        })

        response = request_manager.post()
        return response.body

    