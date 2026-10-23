<?php

require_once('request/request_manager.php');

class Policy{
    public $application_number = NULL;
    public $reference_number = NULL;
    public $premium = NULL;
    public $document_url = NULL;
    public $policy_number = NULL;
    public $status_code = NULL;
    public $issue_date = NULL;
    public $status = NULL;
    public $message = NULL;
    public $partner_ref = NULL;
    public $product_key = NULL;
    public $expiry_date = NULL;
    public $activation_url = NULL;
    public $closure_id = NULL;
    public $coverage_start_date = NULL;
    public $coverage_end_date = NULL;
    public $package_code = NULL;
    public $endorsement_status = NULL;
    public $endorsement_token = NULL;

	public function __construct($options) {
		$this->application_number = isset($options['application_number']) ? $options['application_number'] : NULL; //application_number : created after policy generation
        $this->reference_number = isset($options['reference_number']) ? $options['reference_number'] : NULL;//reference_number : created after policy generation
        $this->premium = isset($options['premium']) ? $options['premium'] : NULL;//premium : returned after policy generation
        $this->document_url = isset($options['document_url']) ? $options['document_url'] : NULL;//document_url : relative path for api action
        $this->policy_number = isset($options['policy_number']) ? $options['policy_number'] : NULL;//policy_number : associated with policy
        $this->status_code = isset($options['status_code']) ? $options['status_code'] : NULL;//status_code : status of policy
        $this->issue_date = isset($options['issue_date']) ? $options['issue_date'] : NULL;//issue_date : policy issue date
        $this->status = isset($options['status']) ? $options['status'] : NULL;//status : status of policy request
        $this->message = isset($options['message']) ? $options['message'] : NULL;//message : message if any for policy
        $this->partner_ref = isset($options['partner_ref']) ? $options['partner_ref'] : NULL;//partner_ref : unique partner_ref of policy
        $this->product_key = isset($options['product_key']) ? $options['product_key'] : NULL;//product_key : product_key in policy request
        $this->expiry_date = isset($options['expiry_date']) ? $options['expiry_date'] : NULL;//expiry_date : expiry of policy
        $this->activation_url = isset($options['activation_url']) ? $options['activation_url'] : NULL;//activation_url : activation_url if endorsement flow present
        $this->closure_id = isset($options['closure_id']) ? $options['closure_id'] : NULL;//closure_id : reference id for cancel or terminate request
        $this->coverage_start_date = isset($options['coverage_start_date']) ? $options['coverage_start_date'] : NULL;//coverage_start_date : policy start date
        $this->coverage_end_date = isset($options['coverage_end_date']) ? $options['coverage_end_date'] : NULL;//coverage_end_date : policy end date
        $this->package_code = isset($options['package_code']) ? $options['package_code'] : NULL;//package_code : package code for policy
        $this->endorsement_status = isset($options['endorsement_status']) ? $options['endorsement_status'] : NULL;//endorsement_status : endorsement status in case when endorsement flow is present
        $this->endorsement_token = isset($options['endorsement_token']) ? $options['endorsement_token'] : NULL;//endorsement_token : token required for authentication in case endorsement flow present
	}

    /**
    * function to create single config product policy
    * @param string product : product name
    * @param array options : parameter required for policy creation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function config_create_policy($product, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v1/config/createpolicy/".$product,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->reference_number = $body['ref'];
        $this->application_number = $body['application_no'];
        $this->premium = $body['premium'];

        return $this;
    }

    /**
    * function to validate policy request
    * @param string product : product name
    * @param array options : parameter required for policy creation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function config_validate_policy($product, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v1/config/validatepolicy/".$product,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->message = $body['message'];
        
        return $this;
    }

    /**
    * function to create single policy
    * @param string product : product name
    * @param array options : parameter required for policy creation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function create_policy($product, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $options['product'] = $product;
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/createpolicy/",
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->reference_number = $body['ref'];
        $this->application_number = $body['application_no'];
        $this->premium = $body['premium'];

        return $this;
    }

    /**
    * function to validate single policy
    * @param string product : product name
    * @param array options : parameter required for policy creation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function validate_policy($product, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $options['product'] = $product;
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/validatepolicy/",
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->message = $body['message'];

        return $this;
    }

    /**
    * function to create multiple policies
    * @param string product : product name
    * @param array options : array of parameters required for policy creation
    * @param object clientObj : client object
    * @return array of new policy object
    */
    public function create_aggregate_policy($product, $options, $clientObj) {
        if (!is_array($options))
            throw new Exception("Invalid params type");
        foreach($options as $key=>$option) {
            $options[$key]['product'] = $product;
        }
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v3/createaggregatepolicy/",
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
        $data = $body['policies'];
        $policies = Array();
        foreach($data as $key=>$val) {
            $policies[$key] = new Policy(
                Array(
                'reference_number'=> $data[$key]["ref"],
                'application_number'=> $data[$key]["application_no"],
                'premium'=> $data[$key]["premium"]
                )
            );      
        }

        return $policies;
    }

    /**
    * function to validate multiple policies
    * @param string product : product name
    * @param array options : array of parameters required for policy creation
    * @param object clientObj : client object
    * @return array of new policy object
    */
    public function validate_aggregate_policy($product, $options, $clientObj) {
        if (!is_array($options))
            throw new Exception("Invalid params type");
        foreach($options as $key=>$option) {
            $options[$key]['product'] = $product;
        }
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/validateaggregatepolicy/",
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
        $this->message = $body['message'];
    
        return $this;
    }


    // /**
    // * function to renew policy
    // * @param string product : product name
    // * @param array options : parameter required for policy renewal (Compulsory parameters : inetrnal_id, start_date, end_date. premium amount)
    // * @param object clientObj : client object
    // * @return array renewed policy
    // */
    // public function renew_policy($product, $options, $clientObj) {
    //     if (!is_array($options))
    //         throw new Exception("Invalid params type");
    //     if(!array_key_exists("internal_id", $options))
    //         throw new Exception("Internal id missing");
    //     if(!array_key_exists("start_date", $options))
    //         throw new Exception("Start date missing");
    //     if(!array_key_exists("end_date", $options))
    //         throw new Exception("End date missing");
    //     if(!array_key_exists("premium_amount", $options))
    //         throw new Exception("Premiun amount missing");

    //     $options['product'] = $product;
    //     $requestManagerObj = new RequestManager(Array(
    //         'domain'=> $clientObj->host,
    //         'path'=> "/api/v2/renew/".$options['internal_id'],
    //         'content_type'=> "application/json",
    //         'params'=> $options,
    //         'partner_code'=> $clientObj->partner_code,
    //         'partner_secret'=> $clientObj->partner_secret));
    //     $body = $requestManagerObj->post();
    //     return $body;
    // }

    /**
    * function to get policy status
    * @param array ids : array of reference id of policies
    * @param object clientObj : client object
    * @return array of policy objects
    */
    public function get_policy_status($ids, $clientObj) {
        if (!is_array($ids))
            throw new Exception("Invalid params type");
        
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/policystatus/",
            'content_type'=> "application/json",
            'params'=> Array("ids"=>$ids),
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));
        $body = $requestManagerObj->post();
        $policies = Array();
        $length = count($body);
        $i = 0;
        while($i < $length) {
            $policies[$i] = new Policy(
                Array(
                    'reference_number'=> $body[$i]["ref"],
                    'application_number'=> $body[$i]["application_no"],
                    'document_url'=> $body[$i]["document_url"],
                    'policy_number'=> $body[$i]["policy_no"],
                    'status_code'=> $body[$i]["status_code"],
                    'status'=> $body[$i]["status"],
                    'issue_date'=> $body[$i]["issue_date"],
                    'message'=> $body[$i]["message"],
                    'partner_ref'=> $body[$i]["partner_ref"],
                    'product_key'=> $body[$i]["product_key"],
                    'expiry_date'=> $body[$i]["expiry_date"],
                    'activation_url'=> $body[$i]["activation_url"],
                    'coverage_start_date'=> $body[$i]["coverage_start_date"],
                    'coverage_end_date'=> $body[$i]["coverage_end_date"],
                )
            );
            $i = $i + 1;
        }
        return $policies;
    }

    /**
    * function to cancel policy
    * @param string ref_id : reference id of policy
    * @param array options : parameter required for cancellation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function cancel_policy($ref_id, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/cancellation/".$ref_id,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->closure_id = $body['closure_id'];
        
        return $this;
    }

    /**
    * function to terminate policy
    * @param string ref_id : reference id of policy
    * @param array options : parameter required for cancellation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function terminate_policy($ref_id, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v2/termination/".$ref_id,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->closure_id = $body['closure_id'];
        
        return $this;
    }



    /**
    * function to create multiple policies
    * @param string product : product name
    * @param array options : array of parameters required for policy creation
    * @param object clientObj : client object
    * @return array of new policy object
    */
    public function config_create_aggregate_policy($product, $options, $clientObj) {
        if (!is_array($options))
            throw new Exception("Invalid params type");
        foreach($options as $key=>$option) {
            $options[$key]['product'] = $product;
        }
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v1/config/createaggregatepolicy/",
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
        $data = $body['policies'];
        $policies = Array();
        foreach($data as $key=>$val) {
            $policies[$key] = new Policy(
                Array(
                'reference_number'=> $data[$key]["ref"],
                'application_number'=> $data[$key]["application_no"],
                'premium'=> $data[$key]["premium"]
                )
            );      
        }

        return $policies;
    }

    /**
    * function to get policy status
    * @param array ids : array of reference id of policies
    * @param object clientObj : client object
    * @return array of policy objects
    */
    public function get_policy_status_v3($ids, $clientObj) {
        if (!is_array($ids))
            throw new Exception("Invalid params type");
        
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v3/policystatus/",
            'content_type'=> "application/json",
            'params'=> Array("ids"=>$ids),
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));
        $body = $requestManagerObj->post();
        $policies = Array();
        $length = count($body);
        $i = 0;
        while($i < $length) {
            $policies[$i] = new Policy(
                Array(
                    'reference_number'=> $body[$i]["ref"],
                    'application_number'=> $body[$i]["application_no"],
                    'document_url'=> $body[$i]["document_url"],
                    'policy_number'=> $body[$i]["policy_no"],
                    'status'=> $body[$i]["status"],
                    'partner_ref'=> $body[$i]["partner_ref"],
                    'product_key'=> $body[$i]["product_key"],
                    'package_code'=> $body[$i]["package_code"],
                    'premium'=> $body[$i]["premium"],
                    'endorsement_token'=> $body[$i]["endorsement_token"],
                    'endorsement_status'=> $body[$i]["endorsement_status"],
                    'activation_url'=> $body[$i]["activation_url"],
                    'coverage_start_date'=> $body[$i]["coverage_start_date"],
                    'coverage_end_date'=> $body[$i]["coverage_end_date"],
                )
            );
            $i = $i + 1;
        }
        return $policies;
    }

    /**
    * function to cancel policy
    * @param string ref_id : reference id of policy
    * @param array options : parameter required for cancellation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function cancel_policy_v3($ref_id, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v3/cancellation/".$ref_id,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->closure_id = $body['closure_id'];
        
        return $this;
    }

    /**
    * function to terminate policy
    * @param string ref_id : reference id of policy
    * @param array options : parameter required for cancellation
    * @param object clientObj : client object
    * @return new policy object
    */
    public function terminate_policy_v3($ref_id, $options, $clientObj){
        if (!is_array($options))
            throw new Exception("Invalid params type");
        $requestManagerObj = new RequestManager(Array(
            'domain'=> $clientObj->host,
            'path'=> "/api/v3/termination/".$ref_id,
            'content_type'=> "application/json",
            'params'=> $options,
            'partner_code'=> $clientObj->partner_code,
            'partner_secret'=> $clientObj->partner_secret));

        $body = $requestManagerObj->post();
		$this->closure_id = $body['closure_id'];
        
        return $this;
    }

}        
