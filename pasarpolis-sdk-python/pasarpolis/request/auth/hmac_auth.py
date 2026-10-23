import hashlib
import json
import time
import hmac
import base64
from .hmac_return import HmacReturn

class HmacAuth(object):

    def __init__(self, options):
        self.verb = options["verb"]
        self.path = options["path"]
        self.request_type = options["request_type"]
        self.partner_code = options["partner_code"]
        self.partner_secret = options["partner_secret"]
        self.request_body = options["request_body"]

    def get_hmac(self):
        md5_string = self.get_md5_content_request_body()
        timestamp = int(round(time.time() * 1000, 0))
        signed_payload = self.verb + "\n" + md5_string + "\n" + self.request_type + "\n" + str(timestamp) + "\n" + self.path
        sha256String = hmac.new(self.partner_secret.encode('utf-8'),
         msg=signed_payload.encode('utf-8'), digestmod=hashlib.sha256).digest()
        hmac_string = base64.b64encode(sha256String).decode()
        return HmacReturn({
          'md5_string': md5_string,
          'timestamp': timestamp,
          'hmac': hmac_string,
          'verb': self.verb,
          'partner_code': self.partner_code,
          'request_type': self.request_type
        })      


    def get_md5_content_request_body(self):
        json_string = json.dumps(self.request_body)
        return hashlib.md5(json_string.encode('utf-8')).hexdigest()
