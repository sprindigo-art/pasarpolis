import requests
try:
    from urllib.parse import urljoin
except ImportError:
    from urlparse import urljoin
from .response import Response
from .auth import HmacAuth
import base64
import json


class RequestManager(object):

    def __init__(self, options):
        self.domain = options['domain']
        self.path = options['path']
        self.content_type = options['content_type']
        self.params = options['params']
        self.partner_code = options['partner_code']
        self.partner_secret = options['partner_secret']

    def call_network(self, verb):
        hmac_auth = HmacAuth({
            'verb': verb,
            'path': self.path,
            'request_type': self.content_type,
            'request_body': self.params,
            'partner_code': self.partner_code,
            'partner_secret': self.partner_secret
        })
        hmac = hmac_auth.get_hmac()
        signature = base64.standard_b64encode((hmac.partner_code + ":" + hmac.hmac).encode('utf-8'))

        headers = {
            'Content-MD5': hmac.md5_string,
            'Content-Type': hmac.request_type,
            'X-PP-Date': str(hmac.timestamp),
            'Partner-Code': hmac.partner_code,
            'Signature': signature,
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) '
                          'Gecko/20100316 Firefox/3.6.2',
            'API-Call-Source': 'sdk-python'
        }

        url = urljoin(self.domain, self.path)

        if verb == "GET":
            res = requests.get(url, headers=headers, params=self.params)
        elif verb == "POST":
            res = requests.post(url, headers=headers, data=json.dumps(self.params))
        else:
            raise Exception("Invalid verb passed")

        status = res.status_code
        print(status)

        if 200 <= status < 300:
            print(res)
            return Response(res.status_code, res.json())
        elif 400 <= status < 600:
            print(res.text)
            response = res.content
            try:
                response = res.json()
            except Exception as e:
                raise Exception(response)
            raise Exception(response)
        else:
            raise Exception("Unknown exception")

        return None

    def get(self):
        return self.call_network("GET")

    def post(self):
        return self.call_network("POST")
