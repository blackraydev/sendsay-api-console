import React from 'react';

import VARS from '../../../constants/vars';
import * as UI from './styles';

const GithubLink = () => {
  return (
    <UI.LinkWrapper>
      <UI.CodeLogo src="/icons/code.svg" />
      <UI.WithSpan>with ❤️ by </UI.WithSpan>
      <UI.Link href={VARS.GITHUB_LINK} target="_blank" rel="noreferrer">
        {VARS.GITHUB_NAME}
      </UI.Link>
    </UI.LinkWrapper>
  );
};

export default GithubLink;
