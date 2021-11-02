import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import Consoles from '../../components/ConsoleComponents/Consoles';
import Footer from '../../components/ConsoleComponents/Footer';
import Header from '../../components/ConsoleComponents/Header';
import RequestHistory from '../../components/ConsoleComponents/RequestHistory';
import rootStore from '../../store';
import * as UI from './styles';

const ConsolePage: React.FC<RouteComponentProps> = observer(({ history }) => {
  const { authStore, requestStore } = rootStore;

  const {
    setRequest,
    sendRequestAsync,
    setJsonInvalid,
    clearRequest,
    removeRequest,
    removeAllRequests,
  } = requestStore;

  const { logoutAsync } = authStore;

  const login = authStore.login;
  const sublogin = authStore.sublogin;
  const isLoggedIn = !!authStore.sessionKey?.length;

  const request = requestStore.request;
  const requestsList = requestStore.requestsList;
  const isLoading = requestStore.isLoading;

  useEffect(() => {
    clearRequest();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const headerProps = {
    login,
    sublogin,
    logout: logoutAsync,
  };

  const requestHistoryProps = {
    setRequest,
    setResponse: sendRequestAsync,
    removeRequest,
    removeAllRequests,
    allRequests: requestsList,
  };

  const consolesProps = {
    request,
    setRequest,
  };

  const footerProps = {
    isLoading,
    request,
    setRequest,
    setResponse: sendRequestAsync,
    jsonInvalid: setJsonInvalid,
  };

  return (
    <UI.Wrapper>
      <Header {...headerProps} />
      <RequestHistory {...requestHistoryProps} />
      <Consoles {...consolesProps} />
      <Footer {...footerProps} />
    </UI.Wrapper>
  );
});

export default withRouter(ConsolePage);
