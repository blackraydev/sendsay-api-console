import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  clearRequest,
  removeRequest,
  removeAllRequests,
  setRequest,
  setResponse,
  setResponseSuccess,
  setResponseFailed,
  jsonInvalid,
  setLoading,
} = createActions({
  [ActionTypes.CLEAR_REQUEST]: (payload) => payload,
  [ActionTypes.REMOVE_REQUEST]: (payload) => payload,
  [ActionTypes.REMOVE_ALL_REQUESTS]: (payload) => payload,
  [ActionTypes.SET_REQUEST]: (payload) => payload,
  [ActionTypes.SET_RESPONSE]: (payload) => payload,
  [ActionTypes.SET_RESPONSE_SUCCESS]: (payload) => payload,
  [ActionTypes.SET_RESPONSE_FAILED]: (payload) => payload,
  [ActionTypes.JSON_INVALID]: (payload) => payload,
  [ActionTypes.SET_LOADING]: (payload) => payload,
});
