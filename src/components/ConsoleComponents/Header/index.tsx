import React, { useState } from 'react';

import VARS from '../../../constants/vars';
import Logo from '../../CommonComponents/Logo';
import FullScreen from '../FullScreen';
import * as UI from './styles';

interface IHeaderProps {
  login: string | null;
  sublogin: string | null;
  logout: () => void;
}

const Header: React.FC<IHeaderProps> = ({ login, sublogin, logout }) => {
  return (
    <UI.Header>
      <UI.LeftPart>
        <Logo />
        <UI.HeaderText>{VARS.API_CONSOLE}</UI.HeaderText>
      </UI.LeftPart>
      <UI.RightPart>
        <UI.UserData>
          <UI.UserEmail>{login}</UI.UserEmail>
          {sublogin && (
            <>
              <UI.UserColon>:</UI.UserColon>
              <UI.UserSublogin>{sublogin}</UI.UserSublogin>
            </>
          )}
        </UI.UserData>
        <UI.Logout onClick={logout}>
          <UI.LogoutText>{VARS.LOGOUT}</UI.LogoutText>
          <UI.LogoutIcon src="/icons/log-out.svg" />
        </UI.Logout>
        <FullScreen />
      </UI.RightPart>
    </UI.Header>
  );
};

export default Header;
