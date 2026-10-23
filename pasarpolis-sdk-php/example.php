<?php

require_once('pasarpolis/client.php');
require_once('pasarpolis/policy.php');
//https://integrations-testing.pasarpolis.io
$clientObj = new client("umra","5d954139-2aa3-44fe-9703-209e3675ffd1", "https://integrations-sandbox.pasarpolis.io");

$json_string = '[{"product":"umrah-protection","package_id":"combined","reference_id":"Insurea001120","name":"Neha","email":"neha.shrivastava@pasarpolis.com","date_of_birth":"2001-05-22","phone_no":"62-85864472000","policy_insured":{"name":"combinedo1","passport_no":"axddgws1qqs8","date_of_birth":"2001-05-22","address":"Some Address1","phone_no":"62-85864472001","flight_destination":["GHB"],"travel_start_date":"2019-11-15","travel_end_date":"2019-11-25"},"flight_information":[{"type":0,"flight_code":"QG-221","airport_code":"HLP","departure_date":"2019-11-17 08:25:00","destination_airport_code":"CGK","pnr":"JKGDSDF"},{"type":2,"flight_code":"QG-222","airport_code":"CGK","departure_date":"2019-11-19 05:10:00","destination_airport_code":"HLP","pnr":"MNXDYFD"}]},{"product":"umrah-protection","package_id":"combined","reference_id":"combinea1002121","name":"Neha","email":"neha.shrivastava@pasarpolis.com","date_of_birth":"2001-05-22","phone_no":"62-85864472000","policy_insured":{"name":"Neha1","passport_no":"aioplpsba9","date_of_birth":"2001-05-22","address":"Some Address1","phone_no":"62-85864472001","flight_destination":["GHB"],"travel_start_date":"2019-11-15","travel_end_date":"2019-11-25"},"flight_information":[{"type":0,"flight_code":"QG-221","airport_code":"HLP","departure_date":"2019-11-17 08:25:00","destination_airport_code":"CGK","pnr":"JKGDSDF"},{"type":2,"flight_code":"QG-222","airport_code":"CGK","departure_date":"2019-11-19 05:10:00","destination_airport_code":"HLP","pnr":"MNXDYFD"}]}]';

$params = json_decode($json_string, true);
$ids = Array('d8f5694b35f18d86eb162417ef8999083fe27150', '00c057fb2a27e0974a0ed4e8925569e3a5462703');
try{
   if(isset($_GET['function_name'])) {
      $func_name = $_GET['function_name'];
      $policyObj = new policy($params);
      if($func_name == 'create_policy') {
         $policy = $policyObj->create_policy("gadget-rental-protection", $params, $clientObj);      
      } else if($func_name == 'create_aggregate_policy') {
         $policy = $policyObj->create_aggregate_policy("umrah-protection", $params, $clientObj);
      // } else if($func_name == 'renew_policy') {
      //    $policy = $policyObj->create_aggregate_policy("gadget-rental-protection", $params, $clientObj);
      } else {
         $policy = $policyObj->get_policy_status($ids, $clientObj);
      }
   }
	print_r($policy);
} catch(Exception $ex) {
	print_r($ex);
}


