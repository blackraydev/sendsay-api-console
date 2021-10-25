import styled from 'styled-components';
import COLORS from '../../constants/colors';

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CodeLogo = styled.img`
  transition: 0.15s;
  width: 20px;
  height: 20px;
  fill: ${COLORS.BLACK};
  margin-right: 5px;
`;

export const WithSpan = styled.span`
  margin-right: 5px;
`;

export const Link = styled.a`
  transition: 0.15s;
  color: ${COLORS.GRAY_BRIGHT};
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: ${COLORS.BLACK};
  }
`;
