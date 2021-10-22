import React, { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { authenticate } from '../../store/actions/auth';
import { authIsLoggedInSelector, authLoadingSelector } from '../../store/selectors';
import * as UI from './styles';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(authLoadingSelector);
  const isLoggedIn = useSelector(authIsLoggedInSelector);

  console.log('loading', loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  const onSubmit = (event: FormEvent | MouseEvent) => {
    event.preventDefault();
    doLogin();
  };

  return (
    <UI.Wrapper>
      <UI.LogoStyled src="/icons/logo.svg" alt="" />
      <UI.Form onSubmit={onSubmit} action="/">
        <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
        <input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} placeholder="Сублогин" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Сублогин" />
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </UI.Form>
    </UI.Wrapper>
  );
};

export default withRouter(LoginPage);
