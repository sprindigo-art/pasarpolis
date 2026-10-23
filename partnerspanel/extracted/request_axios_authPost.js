import axios from 'axios'
import { getHeader } from '../../helpers/utility'

const postRequest = async (url, payload) => {
  if (payload === undefined) {
    return await axios.post(url, {}, { headers: getHeader() })
  } else {
    return await axios.post(url, payload, { headers: getHeader() })
  }
}

export default postRequest
