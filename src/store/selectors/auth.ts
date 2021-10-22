import { RootState } from '..';

export const authLoadingSelector = (state: RootState) => state.persistedReducer.loading;
export const authErrorInSelector = (state: RootState) => state.persistedReducer.error;
export const authIsLoggedInSelector = (state: RootState) => !!state.persistedReducer.sessionKey?.length;
