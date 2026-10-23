const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/claims/'

export default {
  getClaimsList: `${BASE_URL}${BASE_PATH}lists/`,
  getBankList: `${BASE_URL}${BASE_PATH}get-bank-list/`,
  verifyBankAccount: `${BASE_URL}${BASE_PATH}verify-bank-account/`,
  getServiceCenterOnClaim: `${BASE_URL}${BASE_PATH}select-service-center/`,
  getProvinceListForServiceCenter: `${BASE_URL}${BASE_PATH}province-list/`,
  getCityListForServiceCenter: `${BASE_URL}${BASE_PATH}cities/`,
  getPostalCodeForServiceCenter: `${BASE_URL}${BASE_PATH}postal-codes/`,
  getServiceCenterBranchOnClaim: `${BASE_URL}${BASE_PATH}service-branch-list/`,
  getTotalServiceCenter: `${BASE_URL}${BASE_PATH}list-service-center/`
}
