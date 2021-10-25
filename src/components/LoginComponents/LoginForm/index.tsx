import React, { FormEvent, MouseEvent, useCallback, useMemo, useState } from 'react';

import ErrorBlock from '../ErrorBlock';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import ButtonTypes from '../../../constants/buttonTypes';
import InputTypes from '../../../constants/inputTypes';
import VARS from '../../../constants/vars';
import { IUser } from '../../../models/IUser';
import { isObjEmpty } from '../../../helpers/isObjEmpty';
import { IError } from '../../../models/IError';
import * as UI from './styles';

interface ILoginFormProps {
  authenticate: (user: IUser) => void;
  loading: boolean;
  error: IError;
}

const LoginForm: React.FC<ILoginFormProps> = ({ authenticate, loading, error }) => {
  const [login, setLogin] = useState<string>('');
  const [sublogin, setSubLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [invalidLogin, setInvalidLogin] = useState<boolean>(false);
  const [invalidPassoword, setInvalidPassword] = useState<boolean>(false);

  const doLogin = useCallback(() => {
    const user: IUser = { login, sublogin, password };
    authenticate(user);
  }, [login, sublogin, password, authenticate]);

  const onSubmit = useCallback(
    (event: FormEvent | MouseEvent) => {
      event.preventDefault();
      doLogin();
    },
    [doLogin]
  );

  const buttonDisabled = useMemo(() => {
    return invalidLogin || invalidPassoword || !login || !password;
  }, [login, password, invalidLogin, invalidPassoword]);

  return (
    <UI.Form onSubmit={onSubmit} action="/">
      <UI.FormHeader>{VARS.API_CONSOLE}</UI.FormHeader>
      {!isObjEmpty(error) && <ErrorBlock error={error} />}
      <Input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        invalid={invalidLogin}
        setInvalid={setInvalidLogin}
        placeholder={VARS.LOGIN}
        label={VARS.LOGIN}
        rules={{ required: true, withoutSpace: true }}
      />
      <Input
        value={sublogin}
        onChange={(e) => setSubLogin(e.target.value)}
        placeholder={VARS.SUBLOGIN}
        label={VARS.SUBLOGIN}
        optional
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        invalid={invalidPassoword}
        setInvalid={setInvalidPassword}
        placeholder={VARS.PASSWORD}
        label={VARS.PASSWORD}
        rules={{ required: true, nonCyrillic: true }}
        type={InputTypes.PASSWORD}
      />
      <Button onClick={onSubmit} type={ButtonTypes.SUBMIT} disabled={buttonDisabled}>
        {loading ? <UI.Loader src="/icons/loader.svg" alt="" /> : VARS.ENTER}
      </Button>
    </UI.Form>
  );
};

export default LoginForm;
