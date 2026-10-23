const crypto = require('crypto')

const generateMD5 = (payload) => {
    return crypto.createHash('md5').update(payload).digest('hex')
}

module.exports = generateMD5