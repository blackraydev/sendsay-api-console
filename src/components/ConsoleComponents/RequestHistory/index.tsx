import React from 'react';
import { IRequest } from '../../../models/IRequest';
import RequestItem from './RequestItem';

import * as UI from './styles';

interface IRequestHistoryProps {
  allRequests: IRequest[];
}

const RequestHistory: React.FC<IRequestHistoryProps> = ({ allRequests }) => {
  return (
    <UI.Wrapper>
      <UI.HistoryWrapper>
        {allRequests.map((req, id) => (
          <RequestItem {...req} key={id} />
        ))}
      </UI.HistoryWrapper>
      <UI.ClearHistory>
        <UI.ClearIcon src="/icons/cross.svg" />
      </UI.ClearHistory>
    </UI.Wrapper>
  );
};

export default RequestHistory;
