import { handleActions } from 'redux-actions';
import { IError } from '../../models/IError';

import { ActionTypes } from '../constants';

export interface IAuthState {
  loading: boolean;
  error: IError;
  sessionKey: string | null;
  login: string | null;
  sublogin: string | null;
}

export const initialState: IAuthState = {
  loading: false,
  error: {} as IError,
  sessionKey: null,
  login: null,
  sublogin: null,
};

export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: {} as IError,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state, { payload }) => {
        return {
          ...state,
          loading: false,
          error: payload.error,
          sessionKey: null,
          login: null,
          sublogin: null,
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
      [ActionTypes.LOGOUT_SUCCESS]: (state) => {
        return {
          ...state,
          loading: false,
          error: {} as IError,
          sessionKey: null,
          login: null,
          sublogin: null,
        };
      },
    },
    initialState
  ),
};
