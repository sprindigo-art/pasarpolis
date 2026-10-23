const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/policy/'

export default {
  getPolicyListCount: `${BASE_URL}${BASE_PATH}policy-count/`,
  emailPolicy: `${BASE_URL}${BASE_PATH}email-policy/`,
  emailPolicyRange: `${BASE_URL}${BASE_PATH}email-policy-big-data/`,
  getMasterList: `${BASE_URL}${BASE_PATH}master_list_filter/`,
  getPolicyDetailV2: `${BASE_URL}/api/v2/policy/policy_detail/`,
  endorsePolicy: `${BASE_URL}/api/v1/policy/endorse-policy/`
}
