import { all, takeEvery, put, fork, call } from 'redux-saga/effects'
import { getToken, clearToken } from '../../helpers/utility'
import actions from './actions'
import appActions from '../../redux/app/actions'
import callApi from '../../helpers/callApi'
import postRequest from '../../request/methods/post'
import UserUrls from '../../config/urls/user'
import { get } from 'lodash'
import parseResponseError from '../../helpers/parseResponseError'

export function * loginRequest () {
  yield takeEvery(actions.LOGIN_REQUEST, function * ({ payload }) {
    try {
      let res = yield call(postRequest, { ...payload, url: UserUrls.login })

      const resData = get(res, 'data', {})
      if (res.status === 200) {
        const { token } = res.data
        yield localStorage.setItem('id_token', resData.token)
        yield put({
          type: actions.LOGIN_SUCCESS,
          data: res.data,
          message: get(resData, 'message', 'Success!')
        })
        yield put({
          type: actions.CHECK_AUTHORIZATION_REQUEST,
          token
        })
      } else {
        yield put({
          type: actions.LOGIN_FAILURE,
          message: get(resData, 'message') ? resData.message : (get(resData, 'non_field_errors') && resData.non_field_errors[0]) || parseResponseError(resData, 'Something went wrong. Please try again.'),
          account_locked: resData.account_locked,
          retry: resData.retry_left,
          data: resData
        })
      }
    } catch (e) {
      const data = e.data
      yield put({
        type: actions.LOGIN_FAILURE,
        message: get(data, 'message') ? data.message : (get(data, 'non_field_errors') && data.non_field_errors[0]) || parseResponseError(data, 'Something went wrong. Please try again.'),
        account_locked: data.account_locked,
        retry: data.retry_left,
        data: data
      })
    }
  })
}

export function * logout () {
  yield takeEvery(actions.LOGOUT, function * () {
    let res = yield call(callApi.logout)
    if (res) {
      clearToken()
      // yield put(push('/signin'))
    }
  })
}

export function * checkAuthorization () {
  yield takeEvery(actions.CHECK_AUTHORIZATION_REQUEST, function * ({ token }) {
    if (token) {
      yield put({
        type: actions.CHECK_AUTHORIZATION_SUCCESS,
        token
      })
      const idToken = getToken().get('idToken')
      yield put({
        type: appActions.GET_CONFIG_REQUEST,
        token: idToken
      })
    } else {
      yield put({
        type: actions.CHECK_AUTHORIZATION_FAILURE,
        token: null
      })
    }
  })
}

export function * verifyOTP () {
  yield takeEvery(actions.VERIFY_OTP_REQUEST, function * ({ payload }) {
    try {
      const res = yield call(postRequest, { ...payload, url: UserUrls.verifyOtp })
      if (res.status === 200) {
        const { token } = res.data
        yield localStorage.setItem('id_token', token)
        yield put({
          type: actions.VERIFY_OTP_SUCCESS
        })
        yield put({
          type: actions.CHECK_AUTHORIZATION_REQUEST,
          token
        })
      } else {
        yield put({
          type: actions.VERIFY_OTP_FAILURE
        })
      }
    } catch (e) {
      yield put({
        type: actions.VERIFY_OTP_FAILURE,
        data: e.data
      })
    }
  })
}

export function * resendOTP () {
  yield takeEvery(actions.RESEND_OTP_REQUEST, function * ({ payload }) {
    try {
      const res = yield call(postRequest, { ...payload, url: UserUrls.resendOtp })
      if (res.status === 200) {
        yield put({
          type: actions.RESEND_OTP_SUCCESS,
          data: res.data
        })
      } else {
        yield put({
          type: actions.RESEND_OTP_FAILURE,
          data: res.data
        })
      }
    } catch (e) {
      yield put({
        type: actions.RESEND_OTP_FAILURE,
        data: e.data
      })
    }
  })
}

export default function * rootSaga () {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(logout),
    fork(verifyOTP),
    fork(resendOTP)
  ])
}
