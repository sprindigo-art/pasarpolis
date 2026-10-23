module Pasarpolis
  module Request
    class Response
      attr_accessor :status, :body

      def initialize status, body
        self.status = status
        self.body = body
      end
      
    end
  end
end