import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  AUTHENTICATE: undefined,
  AUTHENTICATE_CHECK: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  LOGOUT: undefined,
  LOGOUT_SUCCESS: undefined,
  CLEAR_REQUEST: undefined,
  REMOVE_REQUEST: undefined,
  REMOVE_ALL_REQUESTS: undefined,
  SET_REQUEST: undefined,
  SET_RESPONSE: undefined,
  SET_RESPONSE_SUCCESS: undefined,
  SET_RESPONSE_FAILED: undefined,
  JSON_INVALID: undefined,
  SET_LOADING: undefined,
});
