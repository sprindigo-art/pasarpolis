require_relative './request/request_manager'
module Pasarpolis
  class Policy
    attr_accessor :application_number, :reference_number, :document_url,
    :policy_number, :status_code, :issue_date, :status

    def initialize(options)
      self.application_number = options[:application_number]
      self.reference_number = options[:reference_number]
      self.document_url = options[:document_url]
      self.policy_number = options[:policy_number]
      self.status_code = options[:status_code]
      self.issue_date = options[:issue_date]
      self.status = options[:status]
    end

    def self.create_policy(product, options)
      raise "Invalid params type" unless options.is_a?(Hash)
      client = Pasarpolis::Client.get_client
      options['product'] = product
      request_manager = Pasarpolis::Request::RequestManager.new({
        domain: client.host,
        path: "/api/v2/createpolicy/",
        content_type: "application/json",
        params: options,
        partner_code: client.partner_code,
        partner_secret: client.partner_secret,
        partner_timeout: client.partner_timeout
      })

      response = request_manager.post()

      body = JSON.parse(response.body)

      policy = nil
      if response.status == 200
        policy = Policy.new({
          reference_number: body["ref"],
          application_number: body["application_no"]
        })       
      elsif response.status == 409
        body = body['detail']
        policy = Policy.new({
          reference_number: body["ref"],
          application_number: body["application_no"]
        })
      end

      policy.status_code = response.status

      return policy
    end

    def self.get_policy_status(ids)
      raise("Invalid input, expected Array got #{ids.class}") unless ids.is_a?(Array)
      client = Pasarpolis::Client.get_client
      request_manager = Pasarpolis::Request::RequestManager.new({
        domain: client.host,
        path: "/api/v2/policystatus/",
        content_type: "application/json",
        params: {ids: ids},
        partner_code: client.partner_code,
        partner_secret: client.partner_secret,
        partner_timeout: client.partner_timeout
      })
      response = request_manager.post()
      policies = []

      body = JSON.parse(response.body)

      body.each do |policy|
        policies << Policy.new({
          reference_number: policy["ref"],
          application_number: policy["application_number"],
          document_url: policy["document_url"],
          policy_number: policy["policy_no"],
          status_code: policy["status_code"],
          status: policy["status"],
          issue_date: policy["issue_date"]
        })
      end

      return policies
    end


  end
end