<?php

require_once('auth/hmac_auth.php');

class requestManager{
	public $_domain = NULL;
    public $_path = NULL;
    public $_content_type = NULL;
    public $_params = NULL;
    public $_partner_code = NULL;
    public $_partner_secret = NULL;

    public function __construct($options) {
		$this->_domain = $options['domain'];      //domain : base url for api (domain)
        $this->_path = $options['path'];        //path : relative path of api
        $this->_content_type = $options['content_type'];        //content_type : 'application/json'
        $this->_params = $options['params'];        //params : parameters for policy creation or status
        $this->_partner_code = $options['partner_code'];        //partner_code : partner code assigned by pasarpolis
        $this->_partner_secret = $options['partner_secret'];        //partner_secret : partner secret key provided by pasarpolis
	}


    /**
    * function to call policy creation api
    * @param string verb : get or post request
    * @return array response of policy api
    */
	public function call_network($verb){
		$options = Array("verb"=>$verb, "path"=>$this->_path,"request_type"=>$this->_content_type,  "request_body"=>$this->_params, "partner_code"=>$this->_partner_code, "partner_secret"=>$this->_partner_secret);
		$hmac_auth = new hmacAuth($options);
		$hmac = $hmac_auth->get_hmac();
		$signature = utf8_encode(base64_encode($hmac['partner_code'] . ":" . $hmac['hmac']));
		$headers = Array(
            'Content-MD5:'.$hmac['md5_string'],
            'Content-Type:'.$hmac['request_type'],
            'X-PP-Date:'.$hmac['timestamp'],
            'Partner-Code:'.$hmac['partner_code'],
            'Signature:'.$signature,
            'Accept:'.'application/json',
            'User-Agent:'.'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36',
            'API-Call-Source:'.'sdk-php'
        );

        $url = $this->urljoin($this->_domain,$this->_path);

        if($verb == "GET" || $verb == "POST")
            try {
                $res = $this->curlpost($url, $this->_params, $headers);
            } catch(Exception $ex) {
                print_r($ex);
            }
        else
            throw new Exception("Invalid verb passed");

        $result = json_decode($res['response'], true);
        $status = isset($res['status_code']) ? $res['status_code'] : 0;

        if($status >=200 && $status < 300) {
            return $result;
        } else if($status >=400 && $status < 600) {
            throw new Exception($res['response']);
        } else{
            throw new Exception("Unknown exception : " . $res);
        }

        return Array();

	}

	public function get() {
		return $this->call_network("GET");
	}

	public function post() {
		return $this->call_network("POST");
	}

	/**
     * function to make php curl request
     * @param string $url : url to call
     * @param array $data : request body parameters
     * @param array $header : headers in curl request
     * @return json_string
     */
    public function curlpost($url,$data,$header) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        $response = curl_exec($ch);
        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        return Array("response"=>$response, "status_code"=>$httpcode);
    }

    /**
    * function to join domain with url path
    * @param string $base : domain name
    * @param string $rel : relative path
    * @return string complete url
    */
    function urljoin($base, $rel) {
        $pbase = parse_url($base);
        $prel = parse_url($rel);

        $merged = array_merge($pbase, $prel);
        if ($prel['path'][0] != '/') {
            // Relative path
            $dir = preg_replace('@/[^/]*$@', '', $pbase['path']);
            $merged['path'] = $dir . '/' . $prel['path'];
        }

        // Get the path components, and remove the initial empty one
        $pathParts = explode('/', $merged['path']);
        array_shift($pathParts);

        $path = [];
        $prevPart = '';
        foreach ($pathParts as $part) {
            if ($part == '..' && count($path) > 0) {
                // Cancel out the parent directory (if there's a parent to cancel)
                $parent = array_pop($path);
                // But if it was also a parent directory, leave it in
                if ($parent == '..') {
                    array_push($path, $parent);
                    array_push($path, $part);
                }
            } else if ($prevPart != '' || ($part != '.' && $part != '')) {
                // Don't include empty or current-directory components
                if ($part == '.') {
                    $part = '';
                }
                array_push($path, $part);
            }
            $prevPart = $part;
        }
        $merged['path'] = '/' . implode('/', $path);

        $ret = '';
        if (isset($merged['scheme'])) {
            $ret .= $merged['scheme'] . ':';
        }

        if (isset($merged['scheme']) || isset($merged['host'])) {
            $ret .= '//';
        }

        if (isset($prel['host'])) {
            $hostSource = $prel;
        } else {
            $hostSource = $pbase;
        }

        // username, password, and port are associated with the hostname, not merged
        if (isset($hostSource['host'])) {
            if (isset($hostSource['user'])) {
                $ret .= $hostSource['user'];
                if (isset($hostSource['pass'])) {
                    $ret .= ':' . $hostSource['pass'];
                }
                $ret .= '@';
            }
            $ret .= $hostSource['host'];
            if (isset($hostSource['port'])) {
                $ret .= ':' . $hostSource['port'];
            }
        }

        if (isset($merged['path'])) {
            $ret .= $merged['path'];
        }

        if (isset($prel['query'])) {
            $ret .= '?' . $prel['query'];
        }

        if (isset($prel['fragment'])) {
            $ret .= '#' . $prel['fragment'];
        }


        return $ret;
    }
}