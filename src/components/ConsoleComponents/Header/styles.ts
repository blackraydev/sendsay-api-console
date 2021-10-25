import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const HeaderPart = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftPart = styled(HeaderPart)``;

export const HeaderText = styled.p`
  font-size: 20px;
  color: ${COLORS.BLACK};
  margin-left: 20px;
`;

export const RightPart = styled(HeaderPart)`
  margin-right: -7px;
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  font-size: 16px;
  color: ${COLORS.BLACK};
  border: 1px solid ${COLORS.GRAY_LIGHT};
  border-radius: 5px;
`;

export const UserEmail = styled.span``;
export const UserSublogin = styled.span``;

export const UserColon = styled.span`
  margin: 0 5px;
  color: ${COLORS.GRAY_LIGHT};
`;

export const Logout = styled.div`
  cursor: pointer;
  margin-left: 30px;
  margin-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutText = styled.p`
  color: ${COLORS.BLACK};
  font-size: 16px;
`;

export const LogoutIcon = styled.img`
  margin-left: 8px;
`;
