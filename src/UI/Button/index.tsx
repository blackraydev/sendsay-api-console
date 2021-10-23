import React, { MouseEvent, ReactElement } from 'react';

import { ButtonType } from '../../types/ButtonType';
import * as UI from './styles';

interface IButtonProps {
  children: string | ReactElement;
  onClick: (event: MouseEvent) => void;
  type: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, type, disabled }) => {
  return (
    <UI.Button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </UI.Button>
  );
};

export default Button;
