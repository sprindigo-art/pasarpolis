const getUTCDate = require('../utils/getUTCDate')
const generateMD5 = require('../utils/generateMD5')
const generateSigPayload = require('../utils/generateSigPayload')
const generateHmac = require('../utils/generateHmac')
const generateBuffer = require('../utils/generateBuffer')
const post = require('../request/post')

const hmacReq = async (path='', product='', params='', credentials={}) => {
    let data = params
    let isArray = Array.isArray(params)
    if (isArray)
        data = data
    else
        data = {product, ...params}
    const contentType = 'application/json'
    const date = getUTCDate()
    const md5 = generateMD5(JSON.stringify(data))
    const sigPayload = generateSigPayload(md5, contentType, date, path)
    const signature = generateHmac(credentials.partnerSecret, sigPayload)
    const signature64 = generateBuffer(credentials.partnerCode, signature)
    const headers = {
        'Content-MD5': md5,
        'Content-Type': contentType,
        'X-PP-Date': date,
        'Partner-Code': credentials.partnerCode,
        'Signature': signature64,
        'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2',
        'Accept': contentType,
        'API-Call-Source': 'sdk-nodejs'
    }
    try {
        let response = await post(credentials.host + path, JSON.stringify(data), headers)
        return response.data
    } catch (error) {
        if (error.response === undefined)
            return 'Unknown code error'

        const {status, data} = error.response
        return {...data, statusCode: status}
    }
}

module.exports = hmacReq
