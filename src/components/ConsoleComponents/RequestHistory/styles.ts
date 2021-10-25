import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${COLORS.GRAY_LIGHT};
  border-bottom: 1px solid ${COLORS.GRAY_LIGHT};
`;

export const HistoryWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  margin-bottom: -160px;
  padding-bottom: 160px;
  margin-top: -25px;
  padding-top: 25px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ClearHistory = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-left: 1px solid ${COLORS.GRAY_LIGHT};

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 15px;
    left: -16px;
    background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
  }
`;

export const ClearIcon = styled.img``;
