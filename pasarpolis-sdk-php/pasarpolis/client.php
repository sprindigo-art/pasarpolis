<?php

class client{

	private static $__client = NULL;
	public $partner_code = NULL;
	public $partner_secret = NULL;
	public $host = NULL;
	
	/**
	* create client object
	* @param string $partner_code : partner code assigned by pasarpolis
	* @param string $partner secret : partner secret provided by pasarpolis
	* @param string $host : domanin name
	*/
	public function __construct($partner_code, $partner_secret, $host) {
		if(self::$__client != NULL) {
			throw new Exception("Client already initialized");
		}
		$this->partner_code = $partner_code;
		$this->partner_secret = $partner_secret;
		$this->host = $host;
		self::$__client = $this;
	}

	/**
	* function to get client instance if present
	* @return client object
	**/
	public static function get_client() {
		if(!isset(self::$__client)) {
			throw new Exception("Client already initialized");
		}
		return self::$__client;
	}

	/**
	* function to initialize a client
	* @param string partner_code : name of partner creating policies
	* @param string partner_secret : secret key associated with partner
	* @param string host : production api domain
	* @return new client object
	*/
	public static function init($partner_code, $partner_secret, $host) {
		return new client($partner_code, $partner_secret, $host);
	}
}