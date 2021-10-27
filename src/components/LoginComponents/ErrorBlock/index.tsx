import React from 'react';
import VARS from '../../../constants/vars';

import { stringifyError } from '../../../helpers/stringifyError';
import { IError } from '../../../models/IError';
import * as UI from './styles';

interface IErrorBlockProps {
  error: IError;
}

const ErrorBlock: React.FC<IErrorBlockProps> = ({ error }) => {
  return (
    <UI.ErrorWrapper>
      <UI.SmileWrapper>
        <UI.Smile src="/sendsay-api-console/icons/meh.svg" alt="" />
      </UI.SmileWrapper>
      <UI.DescriptionWrapper>
        <UI.ErrorMessage>{VARS.FAILED_LOGIN}</UI.ErrorMessage>
        <UI.ErrorStatus>{stringifyError(error)}</UI.ErrorStatus>
      </UI.DescriptionWrapper>
    </UI.ErrorWrapper>
  );
};

export default ErrorBlock;
