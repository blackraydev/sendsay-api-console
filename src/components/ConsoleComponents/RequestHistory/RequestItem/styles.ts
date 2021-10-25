import styled from 'styled-components';
import COLORS from '../../../../constants/colors';
import { StatusTypes } from '../../../../constants/statusTypes';
import { StatusType } from '../../../../types/StatusType';

interface IRequestItemStyleProps {
  status?: StatusType;
}

export const ItemWrapper = styled.div`
  transition: 0.15s;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: ${COLORS.WHITE_BRIGHT};
  border-radius: 5px;
  box-shadow: 0px 1px 2px ${COLORS.GRAY_SUPER_LIGHT};
  margin-right: 10px;

  svg g circle {
    transition: 0.15s;
    fill: ${COLORS.GRAY_LIGHT};
  }

  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

    svg g circle {
      fill: ${COLORS.GRAY_BRIGHT};
    }
  }
`;

export const Indicator = styled.div<IRequestItemStyleProps>`
  width: 10px;
  height: 10px;
  border: 1px solid ${COLORS.GRAY_LIGHT};
  background-color: ${({ status }) => (status === StatusTypes.SUCCESS ? COLORS.GREEN : COLORS.RED_BRIGHT)};
  border-radius: 50%;
  margin-right: 5px;
`;

export const ActionName = styled.p`
  color: ${COLORS.BLACK};
  font-size: 16px;
  margin-right: 10px;
`;
