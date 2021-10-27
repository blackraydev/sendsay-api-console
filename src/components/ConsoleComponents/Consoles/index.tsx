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

  const [requestPercentWidth, setRequestPercentWidth] = useState<number>(100);
  const [responsePercentWidth, setResponsePercentWidth] = useState<number>(100);

  const requestConsoleRef = useRef<any>(null);
  const responseConsoleRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousemove', documentMouseMoveHandler);
    document.addEventListener('mouseup', documentMouseUpHandler);
    document.addEventListener('mousedown', documentMouseDownHandler);

    return () => {
      document.removeEventListener('mousemove', documentMouseMoveHandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);
      document.removeEventListener('mousedown', documentMouseDownHandler);
    };
  }, []);

  const requestConsolePxWidth = useMemo(() => {
    const consoleElem = requestConsoleRef.current;

    if (consoleElem && consoleElem.getBoundingClientRect) {
      const { width } = consoleElem.getBoundingClientRect();
      return width;
    }
  }, [requestConsoleRef.current]);

  const responseConsolePxWidth = useMemo(() => {
    const consoleElem = responseConsoleRef.current;

    if (consoleElem && consoleElem.getBoundingClientRect) {
      const { width } = consoleElem.getBoundingClientRect();
      return width;
    }
  }, [responseConsoleRef.current]);

  const delimiterMouseDownHandler = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setMouseDown(true);
  }, []);

  const delimiterMouseUpHandler = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setMouseDown(false);
  }, []);

  const delimiterMouseLeaveHandler = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const delimiterMouseMoveHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      setXPos(e.pageX);

      if (mouseDown && previousXPos > 0 && xPos > 0) {
        const difference = previousXPos - xPos;
        const delta = 0.25 * Math.abs(difference);

        if (difference > 0 && requestConsolePxWidth > 400) {
          requestConsoleRef.current.style.width = `${requestPercentWidth - delta}%`;
          responseConsoleRef.current.style.width = `${responsePercentWidth + delta}%`;

          setRequestPercentWidth((prev) => prev - delta);
          setResponsePercentWidth((prev) => prev + delta);
        } else if (difference < 0 && responseConsolePxWidth > 400) {
          responseConsoleRef.current.style.width = `${responsePercentWidth - delta}%`;
          requestConsoleRef.current.style.width = `${requestPercentWidth + delta}%`;

          setRequestPercentWidth((prev) => prev + delta);
          setResponsePercentWidth((prev) => prev - delta);
        }
      }
    },
    [
      mouseDown,
      previousXPos,
      xPos,
      requestConsolePxWidth,
      responseConsolePxWidth,
      requestConsoleRef.current,
      responseConsoleRef.current,
      requestPercentWidth,
      responsePercentWidth,
    ]
  );

  const documentMouseMoveHandler = useCallback(
    (e: any) => {
      delimiterMouseMoveHandler(e);
    },
    [mouseDown]
  );

  const documentMouseUpHandler = useCallback(() => {
    setMouseDown(false);
  }, []);

  const documentMouseDownHandler = useCallback(() => {
    setMouseDown(true);
  }, []);

  return (
    <UI.ConsolesWrapper>
      <Console ref={requestConsoleRef} headerText={VARS.REQUEST} request={request} setRequest={setRequest} />
      <UI.Delimiter
        onMouseDown={delimiterMouseDownHandler}
        onMouseUp={delimiterMouseUpHandler}
        onMouseMove={delimiterMouseMoveHandler}
        onMouseLeave={delimiterMouseLeaveHandler}
        onDragStart={() => false}
      >
        <DotsIcon />
      </UI.Delimiter>
      <Console ref={responseConsoleRef} headerText={VARS.RESPONSE} request={request} readonly />
    </UI.ConsolesWrapper>
  );
};

export default Consoles;
