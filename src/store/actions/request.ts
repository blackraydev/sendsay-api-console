import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  clearRequest,
  setRequest,
  setResponse,
  setResponseSuccess,
  setResponseFailed,
  jsonInvalid,
} = createActions({
  [ActionTypes.CLEAR_REQUEST]: (payload) => payload,
  [ActionTypes.SET_REQUEST]: (payload) => payload,
  [ActionTypes.SET_RESPONSE]: (payload) => payload,
  [ActionTypes.SET_RESPONSE_SUCCESS]: (payload) => payload,
  [ActionTypes.SET_RESPONSE_FAILED]: (payload) => payload,
  [ActionTypes.JSON_INVALID]: (payload) => payload,
});
