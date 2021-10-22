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
  background: #ffffff;
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

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-radius: 5px;
  padding: 15px 10px;
  height: 70px;
  background-color: ${COLORS.RED_LIGHT};
  margin-bottom: 20px;
`;

export const SmileWrapper = styled.div``;

export const Smile = styled.img``;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.RED_BRIGHT};
  margin-bottom: 5px;
`;

export const ErrorStatus = styled.p`
  font-size: 12px;
  color: ${COLORS.RED_MEDIUM};
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
