require 'digest'
require 'openssl'
require_relative './hmac_return'
require 'base64'
require 'json'

module Pasarpolis
  module Auth
    class HmacAuth

      attr_accessor :verb, :path, :request_type, :partner_code, :partner_secret, :request_body

      def initialize options
        self.verb = options[:verb]
        self.path = options[:path]
        self.request_type = options[:request_type]
        self.partner_code = options[:partner_code]
        self.partner_secret = options[:partner_secret]
        self.request_body = options[:request_body]
      end

      def get_hmac
        md5_string = self.get_md5_content_request_body
        timestamp = (Time.now.to_f * 1000).round.to_s
        signed_payload = self.verb + "\n" + md5_string + "\n" + self.request_type + "\n" + timestamp + "\n" + self.path
        sha256String = OpenSSL::HMAC.digest("SHA256", self.partner_secret, signed_payload)
        hmac_string = Base64.strict_encode64(sha256String)        
        return ::Pasarpolis::Auth::HmacReturn.new({
          md5_string: md5_string,
          timestamp: timestamp,
          hmac: hmac_string,
          verb: self.verb,
          partner_code: self.partner_code,
          request_type: self.request_type
        })
      end

      def get_md5_content_request_body
        json = self.request_body.to_json
        return Digest::MD5.hexdigest(json)
      end

    end
  end
end