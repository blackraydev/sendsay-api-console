import { RootState } from '..';

export const authLoadingSelector = (state: RootState) => state.persistedAuthReducer.loading;
export const authErrorInSelector = (state: RootState) => state.persistedAuthReducer.error;
export const authIsLoggedInSelector = (state: RootState) => !!state.persistedAuthReducer.sessionKey?.length;
export const authLoginInSelector = (state: RootState) => state.persistedAuthReducer.login;
export const authSubloginInSelector = (state: RootState) => state.persistedAuthReducer.sublogin;
