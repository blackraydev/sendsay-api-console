import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { StatusTypes } from '../../../../constants/statusTypes';
import { IRequest } from '../../../../models/IRequest';
import * as UI from './styles';

interface IConsoleProps {
  headerText: string;
  request: IRequest;
  setRequest?: (payload: any) => void;
  readonly?: boolean;
}

const Console: React.FC<IConsoleProps> = ({ headerText, request, setRequest, readonly }) => {
  const [value, setValue] = useState<string>('');
  const { response, status, jsonInvalid } = request;

  useEffect(() => {
    if (setRequest) {
      const request: IRequest = {
        query: value,
      };

      setRequest({ request });
    }
  }, [value]);

  const consoleValue = useMemo(() => {
    if (readonly) {
      const jsonResponse = JSON.stringify(response, null, 3);

      if (jsonResponse !== '""') {
        return JSON.stringify(response, null, 3);
      }
    }

    return value;
  }, [readonly, value, response]);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <UI.ConsoleWrapper>
      <UI.ConsoleHeader>{headerText}:</UI.ConsoleHeader>
      <UI.ConsoleArea
        value={consoleValue}
        readOnly={readonly}
        onChange={(e) => setValue(e.target.value)}
        invalid={(!readonly && jsonInvalid) || (readonly && status === StatusTypes.FAILED)}
      />
    </UI.ConsoleWrapper>
  );
};

export default Console;
