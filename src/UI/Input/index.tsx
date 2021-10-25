import React, { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import InputTypes from '../../constants/inputTypes';
import VARS from '../../constants/vars';
import { checkForCyrillic } from '../../helpers/checkForCyrillic';
import IInputRules from '../../models/IInputRules';

import { ChangeEvent } from '../../types/EventTypes';
import { InputType } from '../../types/InputType';
import * as UI from './styles';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent) => void;
  invalid?: boolean;
  setInvalid?: Dispatch<SetStateAction<boolean>>;
  placeholder?: string;
  type?: InputType;
  label?: string;
  optional?: boolean;
  rules?: IInputRules;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  invalid,
  setInvalid,
  placeholder,
  type,
  label,
  optional,
  rules,
}) => {
  const [userTyped, setUserTyped] = useState<boolean>(false);

  const isValueInvalid = useMemo(() => {
    return (
      (rules?.required && !value) ||
      (rules?.nonCyrillic && checkForCyrillic(value)) ||
      (rules?.withoutSpace && value.includes(' '))
    );
  }, [value]);

  useEffect(() => {
    if (value) {
      setUserTyped(true);
    }
  }, [value]);

  useEffect(() => {
    if (userTyped && isValueInvalid) {
      setInvalid && setInvalid(true);
    } else {
      setInvalid && setInvalid(false);
    }
  }, [isValueInvalid]);

  return (
    <UI.InputWrapper>
      <UI.LabelWrapper>
        {label && <UI.Label invalid={invalid}>{label}</UI.Label>}
        {optional && <UI.OptionalSpan>{VARS.OPTIONAL}</UI.OptionalSpan>}
      </UI.LabelWrapper>
      <UI.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type ? type : InputTypes.TEXT}
        invalid={invalid}
      />
    </UI.InputWrapper>
  );
};

export default Input;
