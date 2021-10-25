import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Consoles from '../../components/ConsoleComponents/Consoles';
import Footer from '../../components/ConsoleComponents/Footer';
import Header from '../../components/ConsoleComponents/Header';
import RequestHistory from '../../components/ConsoleComponents/RequestHistory';
import { useActions } from '../../hooks/useActions';
import {
  authIsLoggedInSelector,
  authLoginInSelector,
  authSubloginInSelector,
  requestAllSelector,
  requestSelector,
} from '../../store/selectors';
import * as UI from './styles';

const ConsolePage: React.FC<RouteComponentProps> = ({ history }) => {
  const { logout, setRequest, setResponse, jsonInvalid, clearRequest } = useActions();

  const login = useSelector(authLoginInSelector);
  const sublogin = useSelector(authSubloginInSelector);
  const isLoggedIn = useSelector(authIsLoggedInSelector);
  const request = useSelector(requestSelector);
  const allRequests = useSelector(requestAllSelector);

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
    logout,
  };

  const consolesProps = {
    request,
    setRequest,
  };

  const footerProps = {
    request,
    setResponse,
    jsonInvalid,
  };

  return (
    <UI.Wrapper>
      <Header {...headerProps} />
      <RequestHistory allRequests={allRequests} />
      <Consoles {...consolesProps} />
      <Footer {...footerProps} />
    </UI.Wrapper>
  );
};

export default withRouter(ConsolePage);
