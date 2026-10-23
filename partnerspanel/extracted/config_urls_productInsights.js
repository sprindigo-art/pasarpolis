const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/insights/'

const productInsightUrls = {
  getProductList: `${BASE_URL}${BASE_PATH}get-product-list/`,
  getCampaignList: `${BASE_URL}${BASE_PATH}get-campaign-list/`,
  getCampaignData: `${BASE_URL}${BASE_PATH}get-campaign-source-medium/`,
  getPageViews: `${BASE_URL}${BASE_PATH}get-page/`,
  pageViewsTransactions: `${BASE_URL}${BASE_PATH}get-total-transactions/`,
  getDeviceWiseData: `${BASE_URL}${BASE_PATH}get-device/`,
  getOsWiseData: `${BASE_URL}${BASE_PATH}get-operating-system/`,
  getBrowserWiseData: `${BASE_URL}${BASE_PATH}get-browser/`,
  getCitiesWiseData: `${BASE_URL}${BASE_PATH}get-cities/`

}

export default productInsightUrls
