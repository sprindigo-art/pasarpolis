require "base64"
require_relative "../auth/hmac_auth"
require_relative "./response"
require 'faraday'
require_relative "../../pasarpolis_sdk"

module Pasarpolis
  module Request
    class RequestManager
      attr_accessor :domain, :path, :content_type, :params, :partner_code, :partner_secret, :partner_timeout

      def initialize(options)
        self.domain = options[:domain]
        self.path = options[:path]
        self.content_type = options[:content_type]
        self.params = options[:params] || {}
        self.partner_code = options[:partner_code]
        self.partner_secret = options[:partner_secret]
        self.partner_timeout = options[:partner_timeout]
      end

      def call_network verb
        hmac_auth = ::Pasarpolis::Auth::HmacAuth.new({
          verb: verb,
          path: self.path,
          request_type: self.content_type,
          partner_code: self.partner_code,
          partner_secret: self.partner_secret,
          request_body: self.params
        })

        hmac = hmac_auth.get_hmac
        puts hmac.hmac
        signature = Base64.strict_encode64(hmac.partner_code + ":" + hmac.hmac)        

        conn = Faraday.new(:url => self.domain) do |faraday|
          faraday.request  :url_encoded             # form-encode POST params
          faraday.response :logger                  # log requests to $stdout
          faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
        end

        response = nil
        headers = {
          'Content-MD5': hmac.md5_string,
          'Content-Type': hmac.request_type,
          'X-PP-Date': hmac.timestamp,
          'Partner-Code': hmac.partner_code,
          'Signature': signature,
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2',
          'Via': 'ruby-sdk::' + PasarpolisSdk::VERSION
        }
        
        begin
          if(verb == "GET")
            response = conn.get do |req|
              req.url self.path, self.params
              req.headers.merge!(headers)     
              req.options.timeout = self.partner_timeout
            end
          else
            response = conn.post do |req|
              req.url self.path
              req.body = self.params.to_json
              req.headers = headers      
              req.options.timeout = self.partner_timeout
            end
          end
        rescue Faraday::TimeoutError => ex
          raise "Timeout Error"
        end

        raise "Invalid Response" if response.nil?

        status = response.status
        body = response.body

        if((status >=200 && status < 300) || status == 409)
          return Pasarpolis::Request::Response.new(status, body)
        elsif (status >= 400 && status < 600)
          raise response.body
        end
        raise "Some error occured"
      end

      def get
        return self.call_network("GET")
      end

      def post
        return self.call_network("POST")
      end

    end
  end
end