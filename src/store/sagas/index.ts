import { all, fork } from 'redux-saga/effects';

import login from './auth';
import request from './request';

export default function* root() {
  yield all([fork(login), fork(request)]);
}
