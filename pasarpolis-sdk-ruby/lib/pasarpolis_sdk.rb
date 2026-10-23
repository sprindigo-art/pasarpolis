require_relative 'pasarpolis/client'
require_relative './pasarpolis/policy' 


class PasarpolisSdk

  VERSION= '2.1'

  def self.init(partner_code, partner_secret, host, partner_timeout=nil)
    return ::Pasarpolis::Client.init(partner_code, partner_secret, host, partner_timeout)
  end

end
