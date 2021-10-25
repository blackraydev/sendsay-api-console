import React, { useCallback } from 'react';
import { Action, ActionFunctionAny } from 'redux-actions';

import ButtonTypes from '../../../constants/buttonTypes';
import VARS from '../../../constants/vars';
import { isValidJson } from '../../../helpers/isValidJson';
import { IRequest } from '../../../models/IRequest';
import Button from '../../../UI/Button';
import GithubLink from '../../CommonComponents/GithubLink';
import { FormatIcon } from '../../CommonComponents/Icons/FormatIcon';
import * as UI from './styles';

interface IFooterProps {
  request: IRequest;
  setResponse: ActionFunctionAny<Action<any>>;
  jsonInvalid: ActionFunctionAny<Action<any>>;
}

const Footer: React.FC<IFooterProps> = ({ request, setResponse, jsonInvalid }) => {
  const sendRequestHandler = useCallback(() => {
    if (isValidJson(request.query)) {
      return setResponse(request);
    }

    return jsonInvalid();
  }, [setResponse, request]);

  return (
    <UI.FooterWrapper>
      <Button onClick={sendRequestHandler} type={ButtonTypes.BUTTON}>
        {VARS.SEND}
      </Button>
      <GithubLink />
      <UI.FormatWrapper>
        <FormatIcon />
        <UI.FormatText>{VARS.FORMAT}</UI.FormatText>
      </UI.FormatWrapper>
    </UI.FooterWrapper>
  );
};

export default Footer;
