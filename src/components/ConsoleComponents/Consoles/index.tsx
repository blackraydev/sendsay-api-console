import React, { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import VARS from '../../../constants/vars';
import { usePrevious } from '../../../hooks/usePrevious';
import { IRequest } from '../../../models/IRequest';
import { DotsIcon } from '../../CommonComponents/Icons/DotsIcon';
import Console from './Console';
import * as UI from './styles';

interface IConsolesProps {
  request: IRequest;
  setRequest: (payload: any) => void;
}

const Consoles: React.FC<IConsolesProps> = ({ request, setRequest }) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [xPos, setXPos] = useState<number>(0);
  const previousXPos = usePrevious<number>(xPos);

  const requestConsoleRef = useRef<any>(null);
  const responseConsoleRef = useRef<any>(null);

  const requestConsolePxWidth = useMemo(() => {
    const consoleElem = requestConsoleRef.current;

    if (consoleElem && consoleElem.getBoundingClientRect) {
      const { width } = consoleElem.getBoundingClientRect();
      return width;
    }
  }, [requestConsoleRef.current?.style?.width]);

  const responseConsolePxWidth = useMemo(() => {
    const consoleElem = responseConsoleRef.current;

    if (consoleElem && consoleElem.getBoundingClientRect) {
      const { width } = consoleElem.getBoundingClientRect();
      return width;
    }
  }, [responseConsoleRef.current?.style?.width]);

  const delimiterDragStartHandler = useCallback((e: any) => {
    const ghostImage = document.createElement('div');

    ghostImage.innerHTML = 'ghostImage';
    ghostImage.style.color = 'transparent';

    document.body.appendChild(ghostImage);

    e.dataTransfer.setDragImage(ghostImage, 0, 0);

    setMouseDown(true);
  }, []);

  const delimiterDragEndHandler = useCallback(() => {
    setMouseDown(false);
  }, []);

  const delimiterDragHandler = useCallback(
    (e: any) => {
      const consoleRequestElem = requestConsoleRef.current;
      const consoleResponseElem = responseConsoleRef.current;

      const { left: consoleRequestLeft } = consoleRequestElem.getBoundingClientRect();
      const { right: consoleResponseRight } = consoleResponseElem.getBoundingClientRect();

      const CONSOLE_MIN_WIDTH = 400;
      const CONSOLE_PADDINGS = 15;
      const DELIMITER_WIDTH = 20;

      const consoleRequestBounds = consoleRequestLeft + CONSOLE_MIN_WIDTH + CONSOLE_PADDINGS + DELIMITER_WIDTH;
      const consoleResponseBounds = consoleResponseRight - CONSOLE_MIN_WIDTH - CONSOLE_PADDINGS - DELIMITER_WIDTH;

      if (xPos != e.pageX && e.pageX >= consoleRequestBounds && e.pageX <= consoleResponseBounds) {
        setXPos(e.pageX);

        const difference = previousXPos - xPos;
        const absDifference = Math.abs(difference);

        if (difference > 0 && absDifference < 150) {
          requestConsoleRef.current.style.width = `${requestConsolePxWidth - absDifference}px`;
          responseConsoleRef.current.style.width = `${responseConsolePxWidth + absDifference}px`;
        } else if (difference < 0 && absDifference < 150) {
          responseConsoleRef.current.style.width = `${responseConsolePxWidth - absDifference}px`;
          requestConsoleRef.current.style.width = `${requestConsolePxWidth + absDifference}px`;
        }
      }
    },
    [previousXPos, xPos, responseConsolePxWidth, requestConsolePxWidth]
  );

  return (
    <UI.ConsolesWrapper>
      <Console ref={requestConsoleRef} headerText={VARS.REQUEST} request={request} setRequest={setRequest} />
      <UI.Delimiter
        mouseDown={mouseDown}
        draggable={true}
        onDrag={delimiterDragHandler}
        onDragStart={delimiterDragStartHandler}
        onDragEnd={delimiterDragEndHandler}
      >
        <DotsIcon />
      </UI.Delimiter>
      <Console ref={responseConsoleRef} headerText={VARS.RESPONSE} request={request} readonly />
    </UI.ConsolesWrapper>
  );
};

export default Consoles;
