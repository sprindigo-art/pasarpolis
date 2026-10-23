<?php

class hmacAuth{
  public $verb = NULL;
  public $path = NULL;
  public $request_type = NULL;
  public $request_body = NULL;
  public $partner_code = NULL;
  public $partner_secret = NULL;

  public function __construct($options) {
	$this->verb = $options["verb"];   //verb : GET/POST request
    $this->path = $options["path"];   //path : api path
    $this->request_type = $options["request_type"];   //request_type : 'application/json'
    $this->partner_code = $options["partner_code"];   //partner_code : partner code assigned by pasarpolis
    $this->partner_secret = $options["partner_secret"];   //partner_secret : partner secret key provided by pasarpolis
    $this->request_body = $options["request_body"];   //request_body : parameter required in api
  }

  /**
  * function to get hmac for api authentication
  * @return array of md5_string generated, timestamp, hmac_string, partner_core, request_type
  */
  public function get_hmac() {
	$md5_string = $this->get_md5_content_request_body();
    $timestamp = time();
    $signed_payload = $this->verb."\n".$md5_string."\n".$this->request_type."\n".$timestamp."\n".$this->path;
    $sha256String = hash_hmac("SHA256", $signed_payload, $this->partner_secret);
    $hmac_string = base64_encode(hex2bin($sha256String));
    return Array(
      'md5_string'=> $md5_string,
      'timestamp'=> $timestamp,
      'hmac'=> $hmac_string,
      'verb'=> $this->verb,
      'partner_code'=> $this->partner_code,
      'request_type'=> $this->request_type
    );
  }

  /**
  * function to return request_body in md5 
  * @return string md5 request body
  */
  public function get_md5_content_request_body() {
    $json_string = json_encode($this->request_body);
    $json_string = '"'.addslashes($json_string).'"';
    return md5($json_string);
  }
}
			