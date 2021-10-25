import styled from 'styled-components';
import COLORS from '../../../constants/colors';

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-radius: 5px;
  padding: 15px 10px;
  height: 70px;
  background-color: ${COLORS.RED_LIGHT};
  margin-bottom: 20px;
`;

export const SmileWrapper = styled.div``;

export const Smile = styled.img``;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.RED_BRIGHT};
  margin-bottom: 5px;
`;

export const ErrorStatus = styled.p`
  font-size: 12px;
  color: ${COLORS.RED_MEDIUM};
`;
