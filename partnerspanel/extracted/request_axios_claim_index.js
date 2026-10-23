import getRequest from '../get'
import postRequest from '../authPost'
import postUploadRequest from '../postUpload'
import url from '../../endpoint/claim'
import fileUrl from '../../endpoint/file'
import axios from 'axios'
import { getHeader } from '../../../helpers/utility'

const getBenefits = async ({ payload }) => {
  try {
    const uri = url.getBenefits(payload)
    return await getRequest(uri)
  } catch (error) {
    return error
  }
}

const getFormBenefits = async ({ payload }) => {
  try {
    const uri = url.getFormBenefits(payload)
    return await getRequest(uri)
  } catch (error) {
    return error
  }
}

const postClaim = async ({ payload }) => {
  try {
    const data = {
      application_no: payload.applicationNo,
      benefit_id: payload.benefitId,
      source: payload.source
    }
    const uri = url.postClaim()
    return await postRequest(uri, data)
  } catch (error) {
    return error
  }
}

const getClaimDetails = async ({ payload }) => {
  try {
    const uri = url.getClaimDetailsUrl(payload)
    return await getRequest(uri)
  } catch (error) {
    return error
  }
}

const saveAttributes = async ({ payload }) => {
  try {
    const uri = url.saveRequest(payload.claim_id)
    return await postRequest(uri, payload.data)
  } catch (error) {
    return error.response
  }
}

const uploadClaimDoc = async ({ payload }) => {
  try {
    const uri = url.uploadClaimDocument(payload.claim_id)
    return await postUploadRequest(uri, payload.formData)
  } catch (error) {
    return error.response
  }
}

const uploadGenericClaimDoc = async (payload) => {
  try {
    const uri = url.uploadGenericClaimDocument(payload)
    return await postUploadRequest(uri, payload.formData)
  } catch (error) {
    return error.response
  }
}
const saveDraftAttributes = async (payload) => {
  try {
    const uri = url.saveDraftAttributes(payload)
    return await postRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}

const saveGenericAttributes = async (payload) => {
  try {
    const uri = url.saveGenericAttributesUrl()

    return await postRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}

const finalSubmit = async (payload) => {
  try {
    const uri = url.finalSubmitUrl(payload)
    return await postRequest(uri)
  } catch (error) {
    return error.response
  }
}

const verifyBankAccount = async ({ payload }) => {
  const uri = url.verifyBankAccount()
  return axios
    .post(`${uri}`, { payload }, { headers: getHeader() })
    .catch(error => {
      if (error.response) {
        throw error.response
      } else if (error.request) {
        throw error.request
      } else {
        throw error.message
      }
    })
    .then(response => {
      return response
    })
}

const validateClaimUrl = async ({ payload }) => {
  try {
    const uri = url.validateClaimUrl()
    return await getRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}

const getFeedbackFormsUrl = async ({ payload }) => {
  try {
    const uri = url.getFeedbackEmailFormsUrl() + `?rating=${payload.rating}&feedback_request_id=${payload.reqId}`
    return await axios.get(uri)
  } catch (error) {
    return error.response
  }
}

const getFeedbackEmailFormsUrl = async ({ payload }) => {
  try {
    const uri = url.getFeedbackEmailFormsUrl() + `?rating=${payload.rating}&feedback_request_id=${payload.reqId}`
    return await axios.get(uri)
  } catch (error) {
    return error.response
  }
}

const postFeedbackFormsUrl = async ({ payload }) => {
  try {
    const uri = url.postFeedbackEmailFormsUrl()
    return await axios.post(uri, payload)
  } catch (error) {
    return error.response
  }
}

const postFeedbackEmailFormsUrl = async ({ payload }) => {
  try {
    const uri = url.postFeedbackEmailFormsUrl()
    return await postRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}
const postSalvageForms = async (payload) => {
  try {
    const uri = url.postSalvageFormUrl()
    return await postRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}
const createShippingClaim = async ({ payload }) => {
  try {
    const uri = url.createShippingClaim()
    return await axios.post(uri, payload)
  } catch (error) {
    return error.response
  }
}

const generateSignedURL = async (formData) => {
  try {
    const file = formData.file
    const payload = {
      content_type: file.type,
      file_name: file.name,
      identifier: 'claims'
    }
    const uri = fileUrl.generateSignedURL
    return await postRequest(uri, payload)
  } catch (error) {
    return error.response
  }
}

const fileUploadUsingSignedUrl = async ({ signedUrlData, file }) => {
  try {
    return await axios.put(signedUrlData.signed_url,
      file,
      { headers: { 'Content-Type': file.type, 'Host': 'storage.googleapis.com' } }
    )
  } catch (error) {
    return error.message
  }
}

export default {
  getBenefits,
  getFormBenefits,
  postClaim,
  getClaimDetails,
  saveAttributes,
  uploadClaimDoc,
  uploadGenericClaimDoc,
  saveGenericAttributes,
  finalSubmit,
  verifyBankAccount,
  validateClaimUrl,
  getFeedbackFormsUrl,
  postFeedbackFormsUrl,
  getFeedbackEmailFormsUrl,
  postFeedbackEmailFormsUrl,
  postSalvageForms,
  createShippingClaim,
  saveDraftAttributes,
  generateSignedURL,
  fileUploadUsingSignedUrl
}
