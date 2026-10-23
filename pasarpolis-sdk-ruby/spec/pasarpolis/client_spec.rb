require_relative "../../lib/pasarpolis/client"

RSpec.describe Pasarpolis::Client do
  
  before :all do
    @client = Pasarpolis::Client.init("pasarpolis","xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "https://integrations-staging.pasarpolis.com", 5)
  end      

  it "should initialize the with not null client" do
    expect(@client).not_to be_nil
  end

  it "should not re-initialize client" do
    expect{
      Pasarpolis::Client.init("pasarpolis","xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", "https://integrations-staging.pasarpolis.com")
    }.to raise_error(RuntimeError)
  end

  it "should not give blank client" do
    client = Pasarpolis::Client.get_client
    expect(client).not_to be_nil
  end

  it "should not give same client object everytime" do
    client1 = Pasarpolis::Client.get_client
    client2 = Pasarpolis::Client.get_client
    expect(client1).to eq(@client)
    expect(client2).to eq(@client)
    expect(client2).to eq(client1)
  end

  it "should give correct timeout value" do
    expect(@client.partner_timeout).to eq(5)
  end

end