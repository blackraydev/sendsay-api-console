import React, { Dispatch, SetStateAction } from 'react';

import VARS from '../../../constants/vars';
import { IRequest } from '../../../models/IRequest';
import { DotsIcon } from '../../CommonComponents/Icons/DotsIcon';
import Console from './Console';
import * as UI from './styles';

interface IConsolesProps {
  request: IRequest;
  setRequest: (payload: any) => void;
}

const Consoles: React.FC<IConsolesProps> = ({ request, setRequest }) => {
  const delimiterDragHandler = () => {};

  return (
    <UI.ConsolesWrapper>
      <Console headerText={VARS.REQUEST} request={request} setRequest={setRequest} />
      <UI.Delimiter draggable={true} onDrag={delimiterDragHandler}>
        <DotsIcon />
      </UI.Delimiter>
      <Console headerText={VARS.RESPONSE} request={request} readonly />
    </UI.ConsolesWrapper>
  );
};

export default Consoles;
