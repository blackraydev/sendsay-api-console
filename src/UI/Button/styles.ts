import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const Button = styled.button`
  cursor: pointer;
  color: ${COLORS.WHITE_BRIGHT};
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  padding: 5px 10px;
  height: 40px;
  min-width: 110px;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;

  &:focus {
    border: 2px solid #45a5ff;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }

  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }

  &:disabled {
    cursor: unset;
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
`;
