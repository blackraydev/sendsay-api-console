import React, { useCallback } from 'react';

import ButtonTypes from '../../../constants/buttonTypes';
import VARS from '../../../constants/vars';
import { formatJson } from '../../../helpers/formatJson';
import { isValidJson } from '../../../helpers/isValidJson';
import { IRequest } from '../../../models/IRequest';
import Button from '../../../UI/Button';
import GithubLink from '../../CommonComponents/GithubLink';
import { FormatIcon } from '../../CommonComponents/Icons/FormatIcon';
import Loader from '../../CommonComponents/Loader';
import * as UI from './styles';

interface IFooterProps {
  isLoading: boolean;
  request: IRequest;
  setRequest: (request: IRequest) => void;
  setResponse: (request: string) => void;
  jsonInvalid: () => void;
}

const Footer: React.FC<IFooterProps> = ({ isLoading, request, setRequest, setResponse, jsonInvalid }) => {
  const sendRequestHandler = useCallback(() => {
    if (isValidJson(request.query)) {
      return setResponse(request.query);
    }

    return jsonInvalid();
  }, [setResponse, request]);

  const formatRequestHandler = useCallback(() => {
    if (isValidJson(request.query)) {
      const formattedJson = formatJson(request.query);
      const formattedRequest: IRequest = {
        query: formattedJson,
      };

      return setRequest(formattedRequest);
    }

    return jsonInvalid();
  }, [setRequest]);

  return (
    <UI.FooterWrapper>
      <Button onClick={sendRequestHandler} type={ButtonTypes.BUTTON}>
        {isLoading ? <Loader /> : VARS.SEND}
      </Button>
      <GithubLink />
      <UI.FormatWrapper onClick={formatRequestHandler}>
        <FormatIcon />
        <UI.FormatText>{VARS.FORMAT}</UI.FormatText>
      </UI.FormatWrapper>
    </UI.FooterWrapper>
  );
};

export default Footer;
