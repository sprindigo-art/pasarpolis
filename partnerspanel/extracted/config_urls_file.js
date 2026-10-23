const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/file/'

export default {
  getFileList: `${BASE_URL}${BASE_PATH}list-files/`
}
