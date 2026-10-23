const axios = require('axios')

const post = async (url, payload, headers) => {
    return await axios.post(url, payload, {headers})
}

module.exports = post