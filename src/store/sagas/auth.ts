import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from '../../helpers/sendsay';

import { ActionTypes } from '../constants';
import { authenticateSuccess, authenticateFailure, logoutSuccess } from '../actions/auth';
import { IError } from '../../models/IError';

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
  } catch (e: IError | any) {
    document.cookie = '';

    const error: IError = {
      id: e?.id,
      explain: e?.explain
    };

    yield put(authenticateFailure({ error }));
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
