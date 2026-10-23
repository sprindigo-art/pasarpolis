const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/'

export default {
  getNotificationsList: `${BASE_URL}${BASE_PATH}notifications/trace/`
}
