import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const FullScreenWrapper = styled.div`
  transition: 0.15s;
  padding: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLORS.WHITE_MEDIUM};

  svg path {
    transition: 0.15s;
  }

  &:hover {
    svg path {
      stroke: ${COLORS.BLUE_BRIGHT};
    }
  }

  &:focus {
    border-radius: 7px;
    border: 2px solid ${COLORS.BLUE_LIGHT};
  }
`;
