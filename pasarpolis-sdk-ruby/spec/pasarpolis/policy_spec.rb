require_relative "../../lib/pasarpolis/policy"

RSpec.describe Pasarpolis::Policy do
  before :all do
    @params = JSON.parse(json_string = "{\"note\": \"\", \"userid\": \"\", \"package_id\": 1, \"travel_type\": 1, \"trip_reason\": 5, \"booking_code\": \"242428064\", \"reference_id\": \"146214\", \"transit_type\": 0, \"inception_date\": \"2018-12-22\", \"policy_insured\": [{\"city\": \"*\", \"name\": \"Titie Andelina Wiji\", \"email\": \"neha.shrivastava@pasarpolis.com\", \"gender\": \"Male\", \"address\": \"*\", \"phone_no\": \"*\", \"zip_code\": \"*\", \"handphone_no\": \"089999999999\", \"date_of_birth\": \"\", \"identity_type\": 2, \"insured_status\": 1, \"identity_number\": \"*\", \"policy_holder_status\": 1}], \"flight_information\": [{\"city\": \"Jakarta\", \"type\": 0, \"flight_code\": \"QG-22\", \"airport_code\": \"HLP\", \"departure_date\": \"2018-12-22 08:25:00\"}], \"policy_beneficiary\": [{\"name\": \"Titie Andelina Wiji\", \"relationship\": 11}], \"travel_destination\": 1}")
    @params["reference_id"] = (Time.now.to_f * 1000).to_i.to_s + rand(1000).to_s
    @product = "travel-protection"
    @policy = Pasarpolis::Policy.create_policy(@product, @params)
  end

  it "should return a policy object" do      
    expect(@policy.class).to eq(Pasarpolis::Policy)
  end

  it "should have a reference number and application number" do
    expect(@policy.application_number).not_to be_nil
    expect(@policy.reference_number).not_to be_nil
  end

  it "should raise error on creation of policy with same reference_id" do
    policy2 = Pasarpolis::Policy.create_policy(@product, @params)
    expect(policy2.status_code).to eq(409)
  end

  it "should get status update" do
    ids = [@policy.reference_number]
    policies = Pasarpolis::Policy.get_policy_status(ids)

    expect(policies.count).not_to be_zero
    policy = policies[0]

    expect(policy.class).to eq(Pasarpolis::Policy)    
    expect(policy.reference_number).not_to be_nil
    expect(policy.status).not_to be_nil
  end
end