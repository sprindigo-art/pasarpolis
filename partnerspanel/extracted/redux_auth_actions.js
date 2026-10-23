const actions = {
  CHECK_AUTHORIZATION_REQUEST: 'CHECK_AUTHORIZATION_REQUEST',
  CHECK_AUTHORIZATION_SUCCESS: 'CHECK_AUTHORIZATION_SUCCESS',
  CHECK_AUTHORIZATION_FAILURE: 'CHECK_AUTHORIZATION_FAILURE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  VERIFY_OTP_REQUEST: 'VERIFY_OTP_REQUEST',
  VERIFY_OTP_SUCCESS: 'VERIFY_OTP_SUCCESS',
  VERIFY_OTP_FAILURE: 'VERIFY_OTP_FAILURE',

  RESEND_OTP_REQUEST: 'RESEND_OTP_REQUEST',
  RESEND_OTP_SUCCESS: 'RESEND_OTP_SUCCESS',
  RESEND_OTP_FAILURE: 'RESEND_OTP_FAILURE',

  LOGOUT: 'LOGOUT',
  SET_IS_DEMO: 'SET_IS_DEMO',
  SET_IS_DEMO_DISPATCH: 'SET_IS_DEMO_DISPATCH',
  checkAuthorization: (token) => ({ type: actions.CHECK_AUTHORIZATION_REQUEST, token }),
  login: (payload) => ({
    type: actions.LOGIN_REQUEST,
    payload
  }),
  verifyOtp: payload => ({
    type: actions.VERIFY_OTP_REQUEST,
    payload
  }),
  resendOtp: payload => ({
    type: actions.RESEND_OTP_REQUEST,
    payload
  }),
  logout: () => ({
    type: actions.LOGOUT
  }),
  setIsDemo: () => ({
    type: actions.SET_IS_DEMO
  })
};
export default actions;
