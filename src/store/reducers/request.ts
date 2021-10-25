import { handleActions } from 'redux-actions';
import { StatusTypes } from '../../constants/statusTypes';
import { IRequest } from '../../models/IRequest';
import { ActionTypes } from '../constants';

export interface IRequestState {
  request: IRequest;
  allRequests: IRequest[];
}

const initialState: IRequestState = {
  request: {
    query: '',
    jsonInvalid: false,
    response: '',
    status: StatusTypes.PENDING,
  },
  allRequests: [],
};

export default {
  request: handleActions(
    {
      [ActionTypes.CLEAR_REQUEST]: (state) => {
        return {
          ...state,
          request: {
            query: '',
            jsonInvalid: false,
            response: '',
            status: StatusTypes.PENDING,
          },
        };
      },
      [ActionTypes.JSON_INVALID]: (state) => {
        return {
          ...state,
          request: {
            ...state.request,
            jsonInvalid: true,
          },
        };
      },
      [ActionTypes.SET_REQUEST]: (state, { payload }) => {
        return {
          ...state,
          request: {
            ...state.request,
            query: payload.request.query,
          },
        };
      },
      [ActionTypes.SET_RESPONSE_SUCCESS]: (state, { payload }) => {
        const newRequest: IRequest = {
          query: payload.request.query,
          response: payload.request.response,
          status: StatusTypes.SUCCESS,
          jsonInvalid: false,
        };
        return {
          ...state,
          request: newRequest,
          allRequests: [newRequest, ...state.allRequests],
        };
      },
      [ActionTypes.SET_RESPONSE_FAILED]: (state, { payload }) => {
        const newRequest = {
          query: payload.request.query,
          response: payload.request.response,
          status: StatusTypes.FAILED,
          jsonInvalid: false,
        };
        return {
          ...state,
          request: newRequest,
          allRequests: [newRequest, ...state.allRequests],
        };
      },
    },
    initialState
  ),
};
