import { handleActions } from 'redux-actions';
import { StatusTypes } from '../../constants/statusTypes';
import { formatJson } from '../../helpers/formatJson';
import { IRequest } from '../../models/IRequest';
import { ActionTypes } from '../constants';

export interface IRequestState {
  request: IRequest;
  allRequests: IRequest[];
  isLoading: boolean;
}

const initialState: IRequestState = {
  request: {
    id: 0,
    query: '',
    jsonInvalid: false,
    response: '',
    status: StatusTypes.PENDING,
  },
  allRequests: [],
  isLoading: false,
};

export default {
  request: handleActions(
    {
      [ActionTypes.CLEAR_REQUEST]: (state) => {
        const newRequest: IRequest = {
          id: 0,
          query: '',
          jsonInvalid: false,
          response: '',
          status: StatusTypes.PENDING,
        };

        return {
          ...state,
          request: newRequest,
        };
      },
      [ActionTypes.SET_LOADING]: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      [ActionTypes.REMOVE_REQUEST]: (state, { payload }) => {
        const filteredRequests = [...state.allRequests].filter((req) => req.id !== payload.request.id);

        return {
          ...state,
          allRequests: filteredRequests,
        };
      },
      [ActionTypes.REMOVE_ALL_REQUESTS]: (state) => {
        return {
          ...state,
          allRequests: [],
        };
      },
      [ActionTypes.JSON_INVALID]: (state) => {
        const newRequest: IRequest = {
          ...state.request,
          jsonInvalid: true,
        };

        return {
          ...state,
          request: newRequest,
        };
      },
      [ActionTypes.SET_REQUEST]: (state, { payload }) => {
        const newRequest: IRequest = {
          ...state.request,
          query: payload.request.query,
          jsonInvalid: false,
        };

        return {
          ...state,
          request: newRequest,
        };
      },
      [ActionTypes.SET_RESPONSE_SUCCESS]: (state, { payload }) => {
        const newId =
          state.allRequests[0] && state.allRequests[0].id?.toString() ? state.allRequests[0].id + 1 : 0;

        const newRequest: IRequest = {
          id: newId,
          query: payload.request.query,
          response: payload.request.response,
          status: StatusTypes.SUCCESS,
          jsonInvalid: false,
        };

        const targetRequest = [...state.allRequests].find(
          (req) => formatJson(req.query) === formatJson(newRequest.query) && req.status === newRequest.status
        );

        let newRequestsList;

        if (targetRequest) {
          newRequestsList = [...state.allRequests].filter((req, index) => {
            if (index < 20 && req.id !== targetRequest.id) {
              return req;
            }
          });
          newRequestsList = [newRequest, ...newRequestsList];
        } else {
          newRequestsList = [newRequest, ...state.allRequests].filter((_, index) => index < 20);
        }

        return {
          ...state,
          request: newRequest,
          allRequests: newRequestsList,
          isLoading: false,
        };
      },
      [ActionTypes.SET_RESPONSE_FAILED]: (state, { payload }) => {
        const newRequest = {
          id: state.allRequests.length,
          query: payload.request.query,
          response: payload.request.response,
          status: StatusTypes.FAILED,
          jsonInvalid: false,
        };

        const targetRequest = [...state.allRequests].find(
          (req) => formatJson(req.query) === formatJson(newRequest.query) && req.status === newRequest.status
        );

        let newRequestsList;

        if (targetRequest) {
          newRequestsList = [...state.allRequests].filter((req, index) => {
            if (index < 20 && req.id !== targetRequest.id) {
              return req;
            }
          });
          newRequestsList = [newRequest, ...newRequestsList];
        } else {
          newRequestsList = [newRequest, ...state.allRequests].filter((_, index) => index < 20);
        }

        return {
          ...state,
          request: newRequest,
          allRequests: newRequestsList,
          isLoading: false,
        };
      },
    },
    initialState
  ),
};
