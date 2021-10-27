import React from 'react';
import VARS from '../../../../../constants/vars';
import * as UI from './styles';

const Copied: React.FC = () => {
  return (
    <UI.CopiedWrapper>
      <UI.CopiedLabel>
        <UI.CopiedText>{VARS.COPIED}</UI.CopiedText>
      </UI.CopiedLabel>
    </UI.CopiedWrapper>
  );
};

export default Copied;
