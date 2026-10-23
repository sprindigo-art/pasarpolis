import axios from 'axios'
import querySearchBuilder from '../../helpers/querySearchBuilder'
import { getHeader } from '../../helpers/utility'
import urlMapper from '../../helpers/urlMapper'

export default ({ url = '', query = {}, body = {}, params = {} }) => {
  const queryString = querySearchBuilder(query)
  const mappedUrl = urlMapper(url, params)
  const combinedUrl = `${mappedUrl}${queryString}`
  return axios
    .post(combinedUrl, body, { headers: getHeader() })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else {
        throw error
      }
    })
    .then(response => {
      return response
    })
}
