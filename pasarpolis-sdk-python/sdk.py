
# from pasarpolis import Client
# Client.init("internal","2b58dbec-69dc-4464-90b6-2ceae3e04eef", "https://integrations-sandbox.pasarpolis.io")
# from pasarpolis import Policy
# params = {}
# params["name"]="Jacob"
# params["email_id"]="john.doe@example.com"
# params["phone_no"]="+6200000000000"
# params["reference_id"]="R1"
# params["make"]="Apple"
# params["model"]="iPhone X"
# params["purchase_date"]="2018-12-20"
# params["purchase_value"]=32000.00
# params1 = ["ba3d21949a549d9cbc7a7069d678c1944a6d4924"]
# # policy = Policy.config_create_policy("travel-protection", params)
# policy = Policy.get_policy_status(params1)
# print(policy[0].reference_number)
# print(policy[0].application_number)
# print(policy[0].premium)

from pasarpolis import Client
Client.init("<partner-code>","<partner-secret>", "https://integrations-sandbox.pasarpolis.io")
from pasarpolis import Policy
params = {}
params["order_id"]="1240"
params["name"]="Testpolicy"
params["email"]="john.doe@example.com"
params["phone_no"]="+84-00000000000"
params["reference_id"]="cip-000012140"
params["package_id"]="basic"
params["address"]="test"
params["recon_time"]="2021-02-16 12:50:14"
params["sku"]="PPMSIG0003"
params["dob"]="2003-11-19"
param_list= [params]
policy = Policy.create_aggregate_policy("personal-accident-protection-pro", param_list)

print(policy["cip-000012140"].application_number)