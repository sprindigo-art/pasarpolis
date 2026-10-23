const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/policy/'

export default {
  getPackageData: `${BASE_URL}${BASE_PATH}get-package-data/`
}
