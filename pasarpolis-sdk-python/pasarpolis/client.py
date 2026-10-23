class Client(object):

    client = None

    def __init__(self, partner_code, partner_secret, host):
        if (Client.client != None):
            raise Exception('Client already initialized') 
        self.partner_code = partner_code
        self.partner_secret = partner_secret
        self.host = host
        Client.client = self

    @staticmethod
    def init(partner_code, partner_secret, host):
        return Client(partner_code, partner_secret, host)

    @staticmethod  
    def get_client():
        if Client.client == None:
            raise Exception('Client not initialized')
        return Client.client