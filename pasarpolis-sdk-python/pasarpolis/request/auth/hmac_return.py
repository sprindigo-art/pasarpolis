class HmacReturn:

    def __init__(self, options):
        self.verb = options["verb"]
        self.md5_string = options["md5_string"]
        self.timestamp = options["timestamp"]
        self.request_type = options["request_type"]
        self.partner_code = options["partner_code"]
        self.hmac = options["hmac"]