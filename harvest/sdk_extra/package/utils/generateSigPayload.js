const generateSigPayload = (md5, contentType, date, path) => {
    return 'POST' + '\n' + md5 + '\n' + contentType + '\n' + date + '\n' + path
}

module.exports = generateSigPayload