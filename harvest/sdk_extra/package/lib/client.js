const hmac = require('../auth/hmac')
const policyAggregateChecker = require('../helpers/policyCreatorAggregateChecker')

class Initialize {
    constructor(partnerCode, partnerSecret, host) {
        this.partnerCode = partnerCode
        this.partnerSecret = partnerSecret
        this.host = host
    }

    static init(partnerCode, partnerSecret, host) {
        if (!partnerCode || !partnerSecret || !host)
            throw 'please check your credentials'

        this.partnerCode = partnerCode
        this.partnerSecret = partnerSecret
        this.host = host
        return this
    }

    static configCreatePolicy(product, params) {
        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v1/config/createpolicy/' + product,
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static configValidatePolicy(product, params) {
        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v1/config/validatepolicy/' + product,
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static createPolicy(product, params) {
        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v2/createpolicy/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static validatePolicy(product, params) {
        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v2/validatepolicy/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static createAggregatePolicy(product, params) {

        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

        params.map(param => {
            param['product'] = product
        })        

        return hmac(
            '/api/v3/createaggregatepolicy/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static validateAggregatePolicy(product, params) {
        if (!product)
            throw 'product is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

        params.map(param => {
            param['product'] = product
        })        

        return hmac(
            '/api/v2/validateaggregatepolicy/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static getPolicyStatus(ids) {
        if (!ids)
            throw 'ids is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

        return hmac(
            '/api/v2/policystatus/',
            '', 
            {ids: [ids]}, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static cancelPolicy(refID, params) {
        if (!refID)
            throw 'refID is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v2/cancellation/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static termination(refID, params) {
        if (!refID)
            throw 'refID is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
            
        return hmac(
            '/api/v2/terminataion/',
            product, 
            params, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static configValidateAggregatePolicy(product, params){
        if (!product)
            throw 'product is required' ;

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
        

        return hmac (
            '/api/v1/config/validateaggregatepolicy/',
            products,
            params,
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static configCreateAggregatePolicy(product, params){
        if (!product)
            throw 'product is required' ;

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'
        

        return hmac (
            '/api/v1/config/createaggregatepolicy/',
            products,
            params,
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static getPolicyStatusV3(ids){
        if (!ids)
            throw 'ids is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

        return hmac(
            '/api/v3/policystatus/',
            '', 
            {ids: [ids]}, 
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }
        )
    }

    static cancelPolicyV3(refID, params){
        if (!refID)
            throw 'refID is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

    
        return hmac(
            '/api/v3/cancellation/' + refID,
            params,
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }

        )
    }

    static terminatePolicyV3(refID, params){
        if (!refID)
            throw 'refID is required'

        if (!this.partnerCode || !this.partnerSecret || !this.host)
            throw 'please complete your credentials'

    
        return hmac(
            '/api/v3/termination/' + refID,
            params,
            {
                partnerCode: this.partnerCode,
                partnerSecret: this.partnerSecret,
                host: this.host
            }

        )
    }




    
}

module.exports = Initialize
