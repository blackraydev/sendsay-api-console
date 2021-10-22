import { RootState } from '..';

export const authLoadingSelector = (state: RootState) => state.persistedReducer.loading;
export const authHasErrorInSelector = (state: RootState) => !!state.persistedReducer.hasError;
export const authIsLoggedInSelector = (state: RootState) => !!state.persistedReducer.sessionKey?.length;
