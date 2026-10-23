const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/reporting/'

export default {
  getReportList: `${BASE_URL}${BASE_PATH}list-report/`,
  reportStatusChange: `${BASE_URL}${BASE_PATH}enable-disable-report/`,
  createReport: `${BASE_URL}${BASE_PATH}create-report/`,
  updateReport: `${BASE_URL}${BASE_PATH}update-report/`,
  sendReport: `${BASE_URL}${BASE_PATH}send-report/`,
  getReportRequest: `${BASE_URL}${BASE_PATH}list-report-requests/`,
  getSignedUrl: `${BASE_URL}/api/v1/generic/generate-signed-url/`,
  getReportView: `${BASE_URL}${BASE_PATH}get-report-data/`
}
