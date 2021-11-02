import React, { useCallback } from 'react';

import { IRequest } from '../../../models/IRequest';
import RequestItem from './RequestItem';
import * as UI from './styles';

interface IRequestHistoryProps {
  setRequest: (request: IRequest) => void;
  setResponse: (query: string) => void;
  removeRequest: (id: number) => void;
  removeAllRequests: () => void;
  allRequests: IRequest[];
}

const RequestHistory: React.FC<IRequestHistoryProps> = ({
  setRequest,
  setResponse,
  removeRequest,
  removeAllRequests,
  allRequests,
}) => {
  const requestItemProps = {
    setRequest,
    setResponse,
    removeRequest,
  };

  const clearHistoryHandler = useCallback(() => {
    return removeAllRequests();
  }, []);

  return (
    <UI.Wrapper>
      <UI.HistoryWrapper>
        {allRequests.map((request, id) => (
          <RequestItem {...request} {...requestItemProps} key={id} />
        ))}
      </UI.HistoryWrapper>
      <UI.ClearHistory onClick={clearHistoryHandler}>
        <UI.ClearIcon src="/sendsay-api-console/icons/cross.svg" />
      </UI.ClearHistory>
    </UI.Wrapper>
  );
};

export default RequestHistory;
