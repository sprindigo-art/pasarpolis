module Pasarpolis
  class Client

    @@client = nil
    attr_accessor :partner_code, :partner_secret, :host, :partner_timeout

    def initialize(partner_code, partner_secret, host, partner_timeout=nil)
      self.partner_code = partner_code
      self.partner_secret = partner_secret
      self.host = host
      self.partner_timeout = partner_timeout
    end

    def self.init(partner_code, partner_secret, host, partner_timeout=nil)
      raise "Client already initialized" unless @@client.nil?
      @@client = ::Pasarpolis::Client.new(partner_code, partner_secret, host, partner_timeout)
      return @@client
    end

    def self.get_client
      raise "Client not initialized" if @@client.nil?      
      puts @@client
      return @@client
    end

  end
end