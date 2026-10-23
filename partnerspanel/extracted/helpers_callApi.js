import urls from '../config/urls'
import policyUrls from '../config/urls/policy'
import axios from 'axios'
import { getHeader, getHeaderUploadFile, objectQuery } from './utility'
import querySearchBuilder from './querySearchBuilder'

const apiUrl = urls.url

const getRequest = async url => axios.get(url, { headers: getHeader() })

const loginApi = (payload) => {
  const data = {
    'email': payload.payload.email,
    'password': payload.payload.password
  }

  // return data;
  return fetch(apiUrl.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'username': data.email, 'password': data.password })
  })
    .then(response => response.json())
    .then(json => json)
}

const logout = () => {
  return fetch(apiUrl.logout, {
    method: 'POST',
    headers: getHeader()
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({'username': data.email, 'password': data.password})
  })
    .then(response => response.json())
    .then(json => json)
}

const getDashboardData = async (payload) => {
  try {
    return await axios.get(`${apiUrl.getDashboardData}?createdat_start=${payload.start_date}&createdat_end=${payload.end_date}${payload.product_key ? '&product_key=' + payload.product_key : ''}${payload.child_partner ? '&child_partner=' + payload.child_partner : ''}`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const getClaimDashboardData = async (payload) => {
  try {
    return await axios.get(`${apiUrl.getClaimDashboardData}?start_date=${payload.start_date}&end_date=${payload.end_date}${payload.productKey ? '&product_key=' + payload.productKey : ''}&time_zone=Asia/Jakarta${payload.child_partner ? '&child_partner=' + payload.child_partner : ''}${payload.packageCodes ? '&package=' + payload.packageCodes : ''}`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const getNotificationData = async (payload) => {
  try {
    const uri = apiUrl.getNotificationData
    return await axios.get(`${uri}`, {
      params: payload,
      headers: getHeader()
    })
  } catch (error) {
    return error
  }
}

const getclaimableDashboarData = async (payload) => {
  try {
    return await axios.get(`${apiUrl.getclaimableDashboarData}?start_date=${payload.start_date}&end_date=${payload.end_date}${payload.product_key ? '&product_key=' + payload.product_key : ''}${payload.child_partner ? '&child_partner=' + payload.child_partner : ''}`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const feedBackDashboard = async ({ payload }) => {
  try {
    const uri = apiUrl.feedBackDashboard
    return await axios.get(`${uri}`, {
      params: payload,
      headers: getHeader()
    })
  } catch (error) {
    return error.response
  }
}

const feedBackTable = async ({ payload }) => {
  try {
    const uri = apiUrl.feedBackTable
    return await axios.get(`${uri}`, {
      params: payload,
      headers: getHeader()
    })
  } catch (error) {
    return error.response
  }
}

const getclaimCompletionTimeData = async (payload) => {
  try {
    return await axios.get(`${apiUrl.getclaimCompletionTimeData}?start_date=${payload.start_date}&end_date=${payload.end_date}${payload.product_key ? '&product_key=' + payload.product_key : ''}&time_zone=Asia/Jakarta`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}
const getClientPartners = async (payload) => {
  try {
    return await axios.get(apiUrl.getClientPartners, { headers: getHeader() })
  } catch (error) {
    return error
  }
}
const getUserManagementList = async () => {
  try {
    return await axios.get(apiUrl.getUserManagementList, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const getUserGroupList = async () => {
  try {
    return await axios.get(apiUrl.getUserGroupList, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const getTimezoneList = async () => {
  try {
    return await axios.get(apiUrl.getTimezoneList, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const postNewUser = async ({ payload }) => {
  const { data } = payload
  let destruct = []
  data.groups.forEach(val => {
    destruct = [...destruct, val.key]
  })

  const finalData = {
    name: data.name,
    email: data.email,
    groups: destruct,
    timezone: data.timezone,
    phone: data.phone
  }
  try {
    const response = await axios.post(
      apiUrl.addNewUser,
      JSON.stringify(finalData),
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.response
  }
}

const editUser = async ({ payload }) => {
  const { data } = payload
  let destruct = []
  data.groups.forEach(val => {
    destruct = [...destruct, val.key]
  })
  const finalData = {
    name: data.name,
    phone: data.phone,
    groups: destruct,
    timezone: data.timezone,
    user_id: data.user_id
  }
  try {
    const response = await axios.post(
      apiUrl.updateUser,
      JSON.stringify(finalData),
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.response
  }
}
const deactivateUser = async ({ payload }) => {
  const { id } = payload

  const finalData = {
    user_id: id
  }
  try {
    const response = await axios.post(
      apiUrl.deactivateUser,
      JSON.stringify(finalData),
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.response
  }
}
const activateUser = async ({ payload }) => {
  const { id } = payload

  const finalData = {
    user_id: id
  }
  try {
    const response = await axios.post(
      apiUrl.activateUser,
      JSON.stringify(finalData),
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.response
  }
}
const deleteUser = async ({ payload }) => {
  const { id } = payload

  const finalData = {
    user_id: id
  }
  try {
    const response = await axios.post(
      apiUrl.deleteUser,
      JSON.stringify(finalData),
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.response
  }
}
const getPolicyList = async (payload) => {
  try {
    const uri = apiUrl.getPolicyList
    const offset = payload.offset || '0'
    const dataPerPage = payload.dataPerPage || ''
    const filters = payload.filterParams || ''
    const orderBy = payload.orderBy || ''
    const nextID = payload.next_id || ''
    const prevID = payload.prev_id || ''
    const offSetNext = payload.offset_next || ''
    const offSetPrev = payload.offset_prev || ''
    let url = `${uri}?offset=${offset}&limit=${dataPerPage}&next_id=${nextID}&prev_id=${prevID}&offset_next=${offSetNext}&offset_prev=${offSetPrev}`
    for (let key in filters) {
      if (filters[key]) {
        url += `&${key}=${filters[key]}`
      }
    }
    if (orderBy !== '') {
      url += `&orderBy=${orderBy}`
    }
    return await getRequest(url)
  } catch (error) {
    return error
  }
}

const getPolicyDetail = async (id) => {
  try {
    return await axios.get(`${apiUrl.getPolicyDetail}?id=${id}`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

const forgotPassword = async ({ payload }) => {
  const data = {
    'email': payload
  }
  try {
    return await axios.post(`${apiUrl.forgotPassword}`, data)
  } catch (error) {
    return error
  }
}

const resetPassword = async ({ payload = { new_password: '', confirm_password: '', uuid: '' } }) => {
  try {
    return await axios.post(`${apiUrl.resetPassword}`, payload)
  } catch (error) {
    return error.response
  }
}

const getPartners = async () => {
  try {
    return await axios.get(apiUrl.getPartners, { headers: getHeader() })
  } catch (error) {
    return error.message
  }
}

const getProducts = async (payload = {}) => {
  try {
    return await axios.get(
      `${apiUrl.getProducts}?${payload.child_partner ? '&child_partner=' + payload.child_partner : ''}`,
      {
        headers: getHeader()
      }
    )
  } catch (error) {
    return error.message
  }
}

const getPackage = async (payload) => {
  try {
    return await axios.get(`${apiUrl.getPackage}?product=${payload}`,
      { headers: getHeader() }
    )
  } catch (error) {
    return error.message
  }
}
const getClaimFilters = async () => {
  try {
    return await axios.get(apiUrl.getClaimFilters, { headers: getHeader() })
  } catch (error) {
    return error.message
  }
}

const sendReportClaims = async ({ payload }) => {
  try {
    const { email, filter } = payload
    const uri = apiUrl.sendReportClaims
    let url = `${uri}`
    const response = await axios.post(url,
      { email, ...filter },
      { headers: getHeader() }
    )
    return response
  } catch (error) {
    return error.message
  }
}

const getClaimLists = async ({ payload }) => {
  try {
    let uri = `${apiUrl.getClaimLists}`
    let query = querySearchBuilder(payload)
    const finalQuery = `${uri}${query}`
    return await axios.get(finalQuery, { headers: getHeader() })
  } catch (error) {
    return error.message
  }
}

const getDetailsClaim = async ({ payload }) => {
  try {
    const uri = apiUrl.getDetailsClaim
    return await axios.get(`${uri}?id=${payload}`, { headers: getHeader() })
  } catch (error) {
    return error.message
  }
}

const getActiveClaims = async ({ payload }) => {
  try {
    const uri = apiUrl.getActiveClaimsUrl
    return await axios.get(uri, { params: payload, headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const getAllClaims = async () => {
  try {
    const uri = apiUrl.getAllClaimsUrl
    return await axios.get(uri, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const createClaimShipping = async ({ payload }) => {
  try {
    const uri = apiUrl.createClaimShippingUrl
    return await axios.post(uri, { payload }, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const uploadClaimPhotos = async ({ payload }) => {
  try {
    const uri = apiUrl.uploadClaimPhotosUrl
    return await axios.post(uri, payload.formData, { headers: getHeaderUploadFile() })
  } catch (error) {
    return error.response
  }
}

const submitClaim = async ({ payload }) => {
  try {
    const uri = apiUrl.submitClaimUrl
    return await axios.post(uri, { payload }, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const uploadBulkImage = async ({ payload }) => {
  try {
    const uri = apiUrl.uploadBulkImageUrl
    return await axios.post(uri, payload, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const activeClaimDetails = async ({ payload }) => {
  try {
    const uri = apiUrl.activeClaimDetailsUrl
    return await axios.get(uri, { params: payload, headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const apiIntegrate = async ({ payload }) => {
  try {
    const uri = apiUrl.apiIntegrateUrl
    return await axios.post(uri, payload, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const trackingInformation = async ({ payload }) => {
  try {
    const uri = apiUrl.trackingInformationUrl
    return await axios.post(uri, payload, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const getFileTemplates = async () => {
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/list-templates/`, {
      headers: getHeader()
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getFileTemplateSample = async ({ params = {} }) => {
  const { templateId } = params
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/${templateId}/download-template/`, {
      headers: getHeader(),
      responseType: 'blob'
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getFileRowsExcel = async ({ params = {}, query = {} }) => {
  const { fileId } = params
  const queryString = objectQuery(query)
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/${fileId}/download-file/${queryString}`, {
      headers: getHeader(),
      responseType: 'blob'
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getFileList = async (query) => {
  const queryString = objectQuery(query)
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/list-files/${queryString}`, {
      headers: getHeader()
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getFileDetails = async ({ params }) => {
  const fileId = (params || {}).fileId
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/${fileId}/file-details/`, {
      headers: getHeader()
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getFileRows = async ({ params = {}, query = {} }) => {
  const fileId = (params || {}).fileId
  const queryString = objectQuery(query)
  try {
    const uri = apiUrl.fileUrls
    return await axios.get(`${uri}/${fileId}/file-rows/${queryString}`, {
      headers: getHeader()
    }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const postBulkUploadFile = async ({ body, params }) => {
  const { templateId } = params
  try {
    const uri = apiUrl.fileUrls
    return await axios.post(`${uri}/${templateId}/upload/`, body, { headers: getHeader() }); // eslint-disable-line
  } catch (error) {
    return error.message
  }
}

const getConfig = async () => {
  try {
    return await axios.get(`${apiUrl.getConfig}`, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const validateResetId = async ({ body = { uuid: '' } }) => {
  try {
    return await axios.post(`${apiUrl.validateResetId}`, body)
  } catch (error) {
    return error.response
  }
}

const uploadClaimDoc = async (payload) => {
  try {
    const uri = apiUrl.uploadClaimDoc
    const { url: fileUrl, filename } = payload.signedUrlData
    let formData = payload.formData
    formData.append('file_url', fileUrl)
    formData.append('file_name', filename)
    formData.delete('file')
    return await axios.post(
      `${uri}?claim_id=${payload.claim_id}&form=${payload.form}`,
      payload.formData,
      { headers: getHeaderUploadFile() }
    )
  } catch (error) {
    return error
  }
}

const saveClaimFormAttribute = async (payload) => {
  try {
    const uri = apiUrl.saveClaimFormAttribute
    const { url: fileUrl, filename } = payload.signedUrlData
    let formData = payload.formData
    formData.append('file_url', fileUrl)
    formData.append('file_name', filename)
    formData.delete('file')
    return await axios.post(
      `${uri}?claim_id=${payload.claim_id}&form=${payload.form}&identifier=claims`,
      payload.formData,
      { headers: getHeaderUploadFile() }
    )
  } catch (error) {
    return error
  }
}

const createClaimsWithDocuments = async ({ body = {} }) => {
  try {
    return await axios.post(`${apiUrl.createClaimWithDocuments}`, body, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const createClaim = async (payload) => {
  try {
    return await axios.post(`${apiUrl.createClaim}`, payload, { headers: getHeader() })
  } catch (error) {
    return error.response
  }
}

const getBenefitsList = async ({ query = {} }) => {
  try {
    let uri = `${apiUrl.benefitsList}`
    let queryString = querySearchBuilder(query)
    const finalUrl = `${uri}${queryString}`
    return await axios.get(finalUrl, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const validateClaim = async ({ query = {} }) => {
  try {
    let uri = `${apiUrl.validateClaim}`
    let queryString = querySearchBuilder(query)
    const finalUrl = `${uri}${queryString}`
    return await axios.get(finalUrl, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getSearchCustomer = async (payload) => {
  try {
    if (!payload.fields) {
      payload.fields = 'all'
    }
    if (!payload.limit) {
      payload.limit = '9'
    }
    let uri = apiUrl.searchCustomer
    let queryString = querySearchBuilder(payload)
    return await axios.get(`${uri}${queryString}`, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getCustomerDetails = async (payload) => {
  try {
    let uri = apiUrl.getCustomerDetails
    let queryString = querySearchBuilder(payload)
    return await axios.get(`${uri}${queryString}`, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getCustomerPolicies = async (payload) => {
  try {
    let uri = apiUrl.getCustomerPolicies
    let queryString = querySearchBuilder(payload)
    return await axios.get(`${uri}${queryString}`, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getCustomerClaims = async (payload) => {
  try {
    let uri = apiUrl.getCustomerClaims
    let queryString = querySearchBuilder(payload)
    return await axios.get(`${uri}${queryString}`, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const cancelFileUpload = async (payload) => {
  try {
    let uri = apiUrl.cancelFileUpload(payload)
    return await axios.post(`${uri}`, {}, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const downloadOriginalFile = async (payload) => {
  try {
    let uri = apiUrl.downloadOriginalFile(payload)
    return await axios.get(`${uri}`, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getWalletList = async () => {
  try {
    let uri = apiUrl.getWalletList
    return await axios.get(uri, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getWalletTransaction = async () => {
  try {
    let uri = apiUrl.getWalletTransaction
    return await axios.get(uri, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const endorsePolicy = async (id) => {
  try {
    return await axios.post(`${policyUrls.endorsePolicy}${id}/`, {}, { headers: getHeader() })
  } catch (error) {
    if (error.response) {
      return error.response
    } else {
      return error.message
    }
  }
}

const getPolicyDetailV2 = async (id) => {
  try {
    return await axios.get(`${policyUrls.getPolicyDetailV2}?id=${id}`, { headers: getHeader() })
  } catch (error) {
    return error
  }
}

export default {
  loginApi,
  logout,
  getDashboardData,
  getClaimDashboardData,
  getPolicyList,
  getPolicyDetail,
  forgotPassword,
  resetPassword,
  getPartners,
  getProducts,
  getClaimLists,
  getDetailsClaim,
  getActiveClaims,
  getAllClaims,
  createClaimShipping,
  uploadClaimPhotos,
  submitClaim,
  uploadBulkImage,
  activeClaimDetails,
  apiIntegrate,
  trackingInformation,
  getFileTemplates,
  getFileTemplateSample,
  getFileList,
  getFileRows,
  getFileRowsExcel,
  getFileDetails,
  postBulkUploadFile,
  getConfig,
  getNotificationData,
  getclaimableDashboarData,
  getclaimCompletionTimeData,
  getClaimFilters,
  sendReportClaims,
  getUserManagementList,
  getUserGroupList,
  getTimezoneList,
  postNewUser,
  editUser,
  deactivateUser,
  activateUser,
  deleteUser,
  validateResetId,
  feedBackDashboard,
  feedBackTable,
  uploadClaimDoc,
  createClaimsWithDocuments,
  getBenefitsList,
  validateClaim,
  createClaim,
  getSearchCustomer,
  getCustomerDetails,
  getCustomerPolicies,
  getCustomerClaims,
  cancelFileUpload,
  getClientPartners,
  downloadOriginalFile,
  saveClaimFormAttribute,
  getWalletList,
  getWalletTransaction,
  getPackage,
  endorsePolicy,
  getPolicyDetailV2
}
