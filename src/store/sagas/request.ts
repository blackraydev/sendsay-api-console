import { put, takeLatest, all } from 'redux-saga/effects';

import api from '../../helpers/sendsay';
import { IRequest } from '../../models/IRequest';
import { setResponseSuccess, setResponseFailed, setLoading } from '../actions/request';
import { ActionTypes } from '../constants';

export function* setResponseSaga({ payload }: any) {
  const request: IRequest = {
    query: payload.query,
  };

  try {
    yield put(setLoading());
    yield api.sendsay.request(JSON.parse(request.query)).then((res: any) => (request.response = res));
    yield put(setResponseSuccess({ request }));
  } catch (e: any) {
    request.response = e;
    yield put(setResponseFailed({ request }));
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.SET_RESPONSE, setResponseSaga)]);
}
