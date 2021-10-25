import styled, { css } from 'styled-components';
import COLORS from '../../constants/colors';

interface IInputStyleProps {
  invalid?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Label = styled.label<IInputStyleProps>`
  font-size: 16px;
  font-weight: 400;

  ${({ invalid }) =>
    invalid &&
    css`
      color: ${COLORS.RED_BRIGHT};
    `}
`;

export const OptionalSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.GRAY_BRIGHT};
`;

export const Input = styled.input<IInputStyleProps>`
  transition: 0.15s;
  height: 40px;
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.BLACK};
  border-radius: 5px;
  border: 1px solid ${COLORS.GRAY_LIGHT};
  padding-left: 10px;

  &:focus {
    box-shadow: 0px 0px 5px ${COLORS.GRAY_LIGHT};
  }

  &:hover {
    border: 1px solid ${COLORS.GRAY_MEDIUM};
  }

  ${({ invalid }) =>
    invalid &&
    css`
      border: 1px solid ${COLORS.RED_BRIGHT};
      box-shadow: 0px 0px 5px ${COLORS.RED_MEDIUM};

      &:focus {
        box-shadow: 0px 0px 5px ${COLORS.RED_MEDIUM};
      }

      &:hover {
        border: 1px solid ${COLORS.RED_BRIGHT};
      }
    `}
`;
