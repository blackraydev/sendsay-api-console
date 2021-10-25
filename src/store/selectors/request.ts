import { RootState } from '..';

export const requestSelector = (state: RootState) => state.persistedRequestReducer.request;
export const requestAllSelector = (state: RootState) => state.persistedRequestReducer.allRequests;
