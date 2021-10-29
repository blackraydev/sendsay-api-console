import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors';

interface IDelimiterProps {
  mouseDown: boolean;
}

export const ConsolesWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%:
  height: 100%;
  overflow: scroll;
  background-color: ${COLORS.WHITE_BRIGHT};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Delimiter = styled.div<IDelimiterProps>`
  margin-top: -50px;
  padding: 0 5px;
  cursor: pointer;

  ${({ mouseDown }) =>
    (mouseDown &&
      css`
        &: * {
          cursor: text !important;
        }
      `) ||
    (!mouseDown &&
      css`
        &: * {
          cursor: pointer !important;
        }
      `)}

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
