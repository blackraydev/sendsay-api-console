import React from 'react';

import { ChangeEvent } from '../../types/eventTypes';
import * as UI from './styles';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
  placeholder?: string;
  passwordType?: boolean;
  label?: string;
  optional?: boolean;
  invalid?: boolean;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  passwordType,
  label,
  optional,
  invalid,
}) => {
  return (
    <UI.InputWrapper>
      <UI.LabelWrapper>
        {label && <UI.Label invalid={invalid}>{label}</UI.Label>}
        {optional && <UI.OptionalSpan>Опционально</UI.OptionalSpan>}
      </UI.LabelWrapper>
      <UI.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={passwordType ? 'password' : 'text'}
        invalid={invalid}
      />
    </UI.InputWrapper>
  );
};

export default Input;
