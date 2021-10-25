import styled from 'styled-components';
import COLORS from '../../../../constants/colors';

interface IConsoleStylesProps {
  invalid?: boolean;
}

export const ConsoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  jusfify-content: flex-start;
  align-items: flex-start;
  padding: 10px 15px 15px 15px;
  height: 100%;
  width: 100%;

  &:first-of-type {
    padding-right: 0px;
  }

  &:last-of-type {
    padding-left: 0px;
  }
`;

export const ConsoleHeader = styled.label`
  font-size: 12px;
  color: ${COLORS.GRAY_BRIGHT};
  margin-bottom: 3px;
`;

export const ConsoleArea = styled.textarea<IConsoleStylesProps>`
  display: flex;
  flex-basis: calc(100% - 90px);
  border-radius: 5px;
  border: 1px solid ${({ invalid }) => (invalid ? COLORS.RED_BRIGHT : COLORS.GRAY_LIGHT)};
  min-width: 400px;
  min-height: 400px;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: Monaco;
  font-size: 14px;
  resize: none;
`;
