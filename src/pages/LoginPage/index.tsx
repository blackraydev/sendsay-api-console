import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { authErrorInSelector, authIsLoggedInSelector, authLoadingSelector } from '../../store/selectors';
import { useActions } from '../../hooks/useActions';
import LoginForm from '../../components/LoginForm';
import Logo from '../../components/Logo';
import GithubLink from '../../components/GithubLink';
import * as UI from './styles';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { authenticate, authenticateCheck } = useActions();

  const loading = useSelector(authLoadingSelector);
  const error = useSelector(authErrorInSelector);
  const isLoggedIn = useSelector(authIsLoggedInSelector);

  useEffect(() => {
    authenticateCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const loginProps = {
    authenticate,
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
};

export default withRouter(LoginPage);
