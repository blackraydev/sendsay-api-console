import React, { Dispatch, forwardRef, SetStateAction, useCallback, useEffect } from 'react';

import { Action, ActionFunctionAny } from 'redux-actions';
import VARS from '../../constants/vars';
import { IRequest } from '../../models/IRequest';
import * as UI from './styles';

interface IDropdownProps {
  request: IRequest;
  setRequest: ActionFunctionAny<Action<any>>;
  setResponse: ActionFunctionAny<Action<any>>;
  removeRequest: ActionFunctionAny<Action<any>>;
  setShowCopied: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = forwardRef(
  ({ request, setRequest, setResponse, removeRequest, setShowCopied }: IDropdownProps, ref: any) => {
    useEffect(() => {
      const { x } = ref.current.getBoundingClientRect();

      if (x < 0) {
        ref.current.style.left = 0;
      }
    }, [ref]);

    const executeRequestHandler = useCallback(() => {
      setRequest({ request });
      setResponse(request);
    }, []);

    const copyRequestHandler = useCallback(() => {
      const { query } = request;
      navigator.clipboard.writeText(query);

      setShowCopied(true);

      setTimeout(() => setShowCopied(false), 1250);
    }, [request, setShowCopied]);

    const removeRequestHandler = useCallback(() => {
      removeRequest({ request });
    }, [removeRequest]);

    return (
      <UI.Wrapper ref={ref}>
        <UI.Action onClick={executeRequestHandler}>{VARS.EXECUTE}</UI.Action>
        <UI.Action onClick={copyRequestHandler}>{VARS.COPY}</UI.Action>
        <UI.Separator />
        <UI.Action onClick={removeRequestHandler}>{VARS.DELETE}</UI.Action>
      </UI.Wrapper>
    );
  }
);

export default Dropdown;
