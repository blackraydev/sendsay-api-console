import React, { useCallback } from 'react';
import { Action, ActionFunctionAny } from 'redux-actions';

import { IRequest } from '../../../models/IRequest';
import RequestItem from './RequestItem';
import * as UI from './styles';

interface IRequestHistoryProps {
  setRequest: ActionFunctionAny<Action<any>>;
  setResponse: ActionFunctionAny<Action<any>>;
  removeRequest: ActionFunctionAny<Action<any>>;
  removeAllRequests: ActionFunctionAny<Action<any>>;
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
