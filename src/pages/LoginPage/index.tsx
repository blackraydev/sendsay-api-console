import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import LoginForm from '../../components/LoginComponents/LoginForm';
import Logo from '../../components/CommonComponents/Logo';
import GithubLink from '../../components/CommonComponents/GithubLink';
import rootStore from '../../store';
import * as UI from './styles';

const LoginPage: React.FC<RouteComponentProps> = observer(({ history }) => {
  const authStore = rootStore.authStore;

  const { authenticateAsync, authenticateCheckAsync } = authStore;

  const loading = authStore.isLoading;
  const error = authStore.error;
  const isLoggedIn = !!authStore.sessionKey?.length;

  useEffect(() => {
    authenticateCheckAsync();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const loginProps = {
    authenticate: authenticateAsync,
    loading,
    error,
  };

  return (
    <UI.Wrapper>
      <Logo />
      <LoginForm {...loginProps} />
      <GithubLink />
    </UI.Wrapper>
  );
});

export default withRouter(LoginPage);
