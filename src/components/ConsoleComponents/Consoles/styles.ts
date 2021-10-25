import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const ConsolesWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%:
  height: 100%;
  overflow: scroll;
  background-color: ${COLORS.WHITE_BRIGHT};
`;

export const Delimiter = styled.div`
  margin-top: -50px;
  cursor: pointer;

  &:drag {
    cursor: col-resize;
  }

  svg {
    circle {
      transition: 0.15s;
      fill: ${COLORS.GRAY_LIGHT};
    }

    &:hover circle {
      fill: ${COLORS.GRAY_MEDIUM};
    }
  }
`;
