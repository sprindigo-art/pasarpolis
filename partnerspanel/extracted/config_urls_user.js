const BASE_URL = process.env.REACT_APP_API_ENDPOINT
const BASE_PATH = '/api/v1/user/'

export default {
  login: `${BASE_URL}${BASE_PATH}login-user/`,
  suspectActivity: `${BASE_URL}${BASE_PATH}suspect-activity/`,
  verifyOtp: `${BASE_URL}${BASE_PATH}verify-otp/`,
  resendOtp: `${BASE_URL}${BASE_PATH}resend-otp/`,
  sendSMSOTP: `${BASE_URL}${BASE_PATH}send-otp-to-user/`,
  verifyOTPAndAddPhone: `${BASE_URL}${BASE_PATH}verify-and-add-number/`,
  resendUserOTP: `${BASE_URL}${BASE_PATH}resend-user-otp/`,
  totpSharedSecret: `${BASE_URL}${BASE_PATH}get-totp-shared-secret/`,
  verifyTOTP: `${BASE_URL}${BASE_PATH}verify-totp/`,
  update2FAMethod: `${BASE_URL}${BASE_PATH}update-default-2fa-type/`,
  verifyUserOTP: `${BASE_URL}${BASE_PATH}verify-user-otp/`,
  disableTwoFactorAuth: `${BASE_URL}${BASE_PATH}verify-and-disable-2fa/`
}
