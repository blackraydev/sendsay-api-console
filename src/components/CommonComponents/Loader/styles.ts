import styled from 'styled-components';

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
