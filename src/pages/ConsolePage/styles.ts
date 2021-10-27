import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: ${COLORS.WHITE_MEDIUM};

  &::-webkit-scrollbar {
    display: none;
  }
`;
