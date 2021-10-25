import styled from 'styled-components';
import COLORS from '../../../../../constants/colors';

export const CopiedWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CopiedLabel = styled.div`
  position: absolute;
  padding: 0 5px;
  background-color: ${COLORS.WHITE_LIGHT};
  border-radius: 5px;
  animation-name: copy;
  animation-duration: 1s;
  animation-delay: 0.25s;

  @keyframes copy {
    from {
      opacity: 1;
      transform: translate(0);
    }
    to {
      opacity: 0.2;
      transform: translateY(-20px);
    }
  }
`;

export const CopiedText = styled.p`
  font-size: 12px;
  color: ${COLORS.BLACK};
`;
