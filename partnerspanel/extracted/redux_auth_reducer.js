import actions from './actions';

const initState = {
  idToken: null,
  isDemo: false,
  message: '',
  retry: 4,
  account_status: false
}

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        message: action.message,
        retry: action.retry,
        account_status: action.account_locked,
        loginResponseData: action.data
      }
    case actions.CHECK_AUTHORIZATION_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        retriesLeft: action.retry,
        loginMessage: action.loginMessage
      }
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.data,
        message: action.message
      }
    case actions.RESEND_OTP_SUCCESS:
    case actions.RESEND_OTP_FAILURE:
      return {
        ...state,
        resendOtpData: action.data
      }
    case actions.LOGOUT:
      return initState
    default:
      return state
  }
}
