const generateBuffer = (partnerCode, signature) => {
    return Buffer.from(partnerCode + ':' + signature).toString('base64')
}

module.exports = generateBuffer