import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.WHITE_MEDIUM};
`;

export const Form = styled.form`
  width: 520px;
  min-height: 425px;
  max-height: 505px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background-color: ${COLORS.WHITE_BRIGHT};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

export const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

export const FormHeader = styled.p`
  color: ${COLORS.BLACK};
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  transition: 0.15s;
  color: ${COLORS.GRAY_BRIGHT};
  font-size: 16px;
  margin-top: 20px;
  text-decoration: none;

  &:focus {
    color: ${COLORS.PINK};
  }

  &:hover {
    color: ${COLORS.BLACK};
  }
`;

export const Loader = styled.img`
  animation: loader 1.5s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
