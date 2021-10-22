import React, { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { checkForCyrillic } from '../../helpers/checkForCyrillic';
import { isObjEmpty } from '../../helpers/isObjEmpty';
import { stringifyError } from '../../helpers/stringifyError';
import { useActions } from '../../hooks/useActions';
import { authErrorInSelector, authIsLoggedInSelector, authLoadingSelector } from '../../store/selectors';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import * as UI from './styles';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const { authenticate, authenticateCheck } = useActions();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
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

  const doLogin = () => {
    authenticate({
      login,
      sublogin,
      password,
    });
  };

  const isFormValid = () => {
    let valid = true;

    if (!login) {
      setInvalidLogin(true);
      valid = false;
    }

    if (!password || checkForCyrillic(password)) {
      setInvalidPassword(true);
      valid = false;
    }

    return valid;
  };

  const clearValidation = () => {
    setInvalidLogin(false);
    setInvalidPassword(false);
  };

  const onSubmit = (event: FormEvent | MouseEvent) => {
    event.preventDefault();

    clearValidation();

    if (isFormValid()) {
      doLogin();
    }
  };

  return (
    <UI.Wrapper>
      <UI.LogoStyled src="/icons/logo.svg" alt="" />
      <UI.Form onSubmit={onSubmit} action="/">
        <UI.FormHeader>API-консолька</UI.FormHeader>
        {error && !isObjEmpty(error) && (
          <UI.ErrorWrapper>
            <UI.SmileWrapper>
              <UI.Smile src="/icons/meh.svg" alt="" />
            </UI.SmileWrapper>
            <UI.DescriptionWrapper>
              <UI.ErrorMessage>Вход не вышел</UI.ErrorMessage>
              <UI.ErrorStatus>{stringifyError(error)}</UI.ErrorStatus>
            </UI.DescriptionWrapper>
          </UI.ErrorWrapper>
        )}
        <Input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
          label="Логин"
          invalid={invalidLogin}
        />
        <Input
          value={sublogin}
          onChange={(e) => setSubLogin(e.target.value)}
          placeholder="Сублогин"
          label="Сублогин"
          optional
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          label="Пароль"
          passwordType
          invalid={invalidPassword}
        />
        <Button onClick={onSubmit} type="submit">
          {loading ? <UI.Loader src="/icons/loader.svg" alt="" /> : 'Войти'}
        </Button>
      </UI.Form>
      <UI.Link href="https://github.com/blackraydev" target="_blank" rel="noreferrer">
        @blackraydev
      </UI.Link>
    </UI.Wrapper>
  );
};

export default withRouter(LoginPage);
