import styled from 'styled-components';
import COLORS from '../../constants/colors';

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

export const FormHeader = styled.p`
  color: ${COLORS.BLACK};
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
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
