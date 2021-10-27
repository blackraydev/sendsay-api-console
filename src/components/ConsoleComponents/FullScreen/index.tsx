import React, { useCallback, useEffect, useState } from 'react';
import { FullScreenIcon } from '../../CommonComponents/Icons/FullScreenIcon';
import { UnsetFullScreenIcon } from '../../CommonComponents/Icons/UnsetFullScreenIcon';

import * as UI from './styles';

const FullScreen: React.FC = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);

  const setFullScreenHandler = useCallback(() => {
    const app: any = document.documentElement;

    if (app.requestFullscreen) {
      app.requestFullscreen();
    } else if (app.mozRequestFullscreen) {
      app.mozRequestFullscreen();
    } else if (app.webkitRequestFullscreen) {
      app.webkitRequestFullscreen();
    }

    setFullScreen(true);
  }, [setFullScreen]);

  const unsetFullScreenHandler = useCallback(() => {
    const app: any = document;

    if (app.exitFullscreen) {
      app.exitFullscreen();
    } else if (app.mozExitFullscreen) {
      app.mozExitFullscreen();
    } else if (app.webkitExitFullscreen) {
      app.webkitExitFullscreen();
    }

    setFullScreen(false);
  }, [setFullScreen]);

  const unsetFullScreenByEsc = useCallback(
    (e) => {
      if (fullScreen && e.key === 'Escape') {
        unsetFullScreenHandler();
      }
    },
    [unsetFullScreenHandler]
  );

  const viewHandler = useCallback(() => {
    if (fullScreen) return unsetFullScreenHandler();
    return setFullScreenHandler();
  }, [fullScreen, unsetFullScreenHandler, setFullScreenHandler]);

  useEffect(() => {
    window.addEventListener('keydown', unsetFullScreenByEsc);
    return () => {
      window.removeEventListener('keydown', unsetFullScreenByEsc);
    };
  }, [unsetFullScreenByEsc]);

  return (
    <UI.FullScreenWrapper onClick={viewHandler}>
      {fullScreen ? <UnsetFullScreenIcon /> : <FullScreenIcon />}
    </UI.FullScreenWrapper>
  );
};

export default FullScreen;
