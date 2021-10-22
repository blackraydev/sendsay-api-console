import { all, put, call, takeLatest, take } from 'redux-saga/effects';
import api from '../../helpers/sendsay';

import { ActionTypes } from '../constants';
import { authenticateSuccess, authenticateFailure, logoutSuccess } from '../actions/auth';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error: any) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({ payload }: any) {
  try {
    yield api.sendsay
      .login({
        login: payload.login,
        sublogin: payload.sublogin,
        password: payload.password,
      });

    document.cookie = `sendsay_session=${api.sendsay.session}`;

    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin,
      })
    );
  } catch (error: any) {
    console.log(error)
    document.cookie = '';
    yield put(authenticateFailure());
  }
}

export function* logoutSaga() {
  yield put(logoutSuccess());
  document.cookie = '';
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
