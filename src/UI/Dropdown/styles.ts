import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Wrapper = styled.div`
  bottom: -142px;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 133px;
  height: 141px;
  border-radius: 3px;
  background: ${COLORS.WHITE_BRIGHT};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const Action = styled.div`
  transition: 0.15s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  background-color: ${COLORS.WHITE_BRIGHT};
  color: ${COLORS.BLACK};

  &:hover {
    background-color: ${COLORS.BLUE_BRIGHT};
    color: ${COLORS.WHITE_BRIGHT};

    &:last-of-type {
      background-color: ${COLORS.RED_BRIGHT};
    }
  }

  &:first-of-type {
    margin-top: 5px;
  }

  &:last-of-type {
    margin-bottom: 5px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.GRAY_LIGHT};
  margin: 5px 0;
`;
