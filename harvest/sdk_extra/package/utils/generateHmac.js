const crypto = require('crypto')

const generateHmac = (partnerSecret, sigPayload) => {
    return crypto.createHmac('sha256', partnerSecret).update(sigPayload).digest('base64')
}

module.exports = generateHmac