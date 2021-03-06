import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { StatusTypes } from '../../../../constants/statusTypes';
import { usePrevious } from '../../../../hooks/usePrevious';
import { IRequest } from '../../../../models/IRequest';
import * as UI from './styles';

interface IConsoleProps {
  headerText: string;
  request: IRequest;
  setRequest?: (payload: any) => void;
  readonly?: boolean;
}

const Console = forwardRef(({ headerText, request, setRequest, readonly }: IConsoleProps, consoleRef: any) => {
  const [value, setValue] = useState<string>('');

  const previousValue = usePrevious<string>(value);
  const previousQuery = usePrevious<string>(request.query);

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
      return jsonResponse !== '""' ? jsonResponse : '';
    }

    if (previousValue == previousQuery || previousValue == request.query) {
      return value;
    }

    return request.query;
  }, [request, value, response, previousValue, previousQuery]);

  return (
    <UI.ConsoleWrapper ref={consoleRef}>
      <UI.ConsoleHeader>{headerText}:</UI.ConsoleHeader>
      <UI.ConsoleArea
        value={consoleValue}
        readOnly={readonly}
        onChange={(e) => setValue(e.target.value)}
        invalid={(!readonly && jsonInvalid) || (readonly && status === StatusTypes.FAILED)}
      />
    </UI.ConsoleWrapper>
  );
});

export default Console;
