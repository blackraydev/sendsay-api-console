import React, { forwardRef, useEffect } from 'react';

import VARS from '../../constants/vars';
import * as UI from './styles';

const Dropdown = forwardRef((props, ref: any) => {
  useEffect(() => {
    const { x } = ref.current.getBoundingClientRect();

    if (x < 0) {
      ref.current.style.left = 0;
    }
  }, [ref]);

  return (
    <UI.Wrapper ref={ref}>
      <UI.Action>{VARS.EXECUTE}</UI.Action>
      <UI.Action>{VARS.COPY}</UI.Action>
      <UI.Separator />
      <UI.Action>{VARS.DELETE}</UI.Action>
    </UI.Wrapper>
  );
});

export default Dropdown;
