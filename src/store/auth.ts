import { makeAutoObservable } from 'mobx';
import { IError } from '../models/IError';
import { IUser } from '../models/IUser';
import { IAuthResponse } from '../models/IAuthResponse';
import api from '../helpers/sendsay';
import { persist } from 'mobx-persist';

class AuthStore {
  @persist isLoading: boolean = false;
  @persist("object") error: IError = {} as IError;
  @persist sessionKey: string | null = null;
  @persist login: string | null = null;
  @persist sublogin: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = () => {
    this.isLoading = true;
  }

  unsetLoading = () => {
    this.isLoading = false;
  }

  authenticateSuccess = (authResponse: IAuthResponse) => {
    this.error = {} as IError;
    this.sessionKey = authResponse.sessionKey;
    this.login = authResponse.login;
    this.sublogin = authResponse.sublogin;
  }

  authenticateFailure = (error: IError) => {
    this.error = error;
    this.sessionKey = null;
    this.login = null;
    this.sublogin = null;
  }

  logout = () => {
    this.error = {} as IError;
    this.sessionKey = null;
    this.login = null;
    this.sublogin = null;
  }

  authenticateCheckAsync = async () => {
    try {
      await api.sendsay.request({
        action: 'pong',
      })
    } catch(e: any) {
      if (e.id === 'error/auth/failed') {
        this.logoutAsync();
      }
    };
  }

  authenticateAsync = async (user: IUser) => {
    try {
      this.setLoading();

      await api.sendsay.login({
        login: user.login,
        sublogin: user.sublogin,
        password: user.password
      });

      document.cookie = `sendsay_session=${api.sendsay.session}`;

      this.authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: user.login,
        sublogin: user.sublogin,
      });
    } catch (e: any) {
      document.cookie = '';

      const error: IError = {
        id: e?.id,
        explain: e?.explain
      };
  
      this.authenticateFailure(error);
    } finally {
      this.unsetLoading();
    }
  }

  logoutAsync = () => {
    this.logout();
    document.cookie = '';
  }
}

export const authStore = new AuthStore();