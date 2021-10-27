import styled from 'styled-components';
import COLORS from '../../../constants/colors';
import GithubLink from '../../CommonComponents/GithubLink';

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 15px;
  background-color: ${COLORS.WHITE_BRIGHT};
  border-top: 1px solid ${COLORS.GRAY_LIGHT};

  div:first-of-type {
    margin: 0;
    margin-left: 55px;
  }
`;

export const FormatWrapper = styled.div`
  transition: 0.15s;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 6px 4px;
  border-radius: 7px;
  border: 2px solid ${COLORS.WHITE_BRIGHT};

  svg g path {
    transition: 0.15s;
  }

  &:hover {
    p {
      color: ${COLORS.BLUE_BRIGHT};
    }

    svg g path {
      stroke: ${COLORS.BLUE_BRIGHT};
    }
  }

  &:focus {
    border: 2px solid ${COLORS.BLUE_LIGHT};
  }
`;

export const FormatText = styled.p`
  transition: 0.15s;
  color: ${COLORS.BLACK};
  font-size: 16px;
  margin-left: 8px;
`;
