module Pasarpolis
  module Auth
    class HmacReturn
      attr_accessor :verb, :md5_string, :timestamp, :request_type, :partner_code, :hmac

      def initialize options
        self.verb = options[:verb]
        self.md5_string = options[:md5_string]
        self.timestamp = options[:timestamp]
        self.request_type = options[:request_type]
        self.partner_code = options[:partner_code]
        self.hmac = options[:hmac]
      end
    end
  end  
end