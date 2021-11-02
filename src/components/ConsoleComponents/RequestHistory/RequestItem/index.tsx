import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { StatusType } from '../../../../types/StatusType';
import Dropdown from '../../../../UI/Dropdown';
import { DotsIcon } from '../../../CommonComponents/Icons/DotsIcon';
import { IRequest } from '../../../../models/IRequest';
import VARS from '../../../../constants/vars';
import Copied from './Copied';
import * as UI from './styles';

interface IRequestItemProps {
  query: string;
  setRequest: (request: IRequest) => void;
  setResponse: (query: string) => void;
  removeRequest: (id: number) => void;
  id?: number;
  status?: StatusType;
}

const RequestItem: React.FC<IRequestItemProps> = ({
  query,
  id,
  status,
  setRequest,
  setResponse,
  removeRequest,
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const itemRef = useRef<any>(null);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, [dropdownRef]);

  const request = useMemo((): IRequest => {
    const newRequest: IRequest = {
      query,
      id,
    };
    return newRequest;
  }, [query, id]);

  const clickOutsideHandler = useCallback(
    (e: any) => {
      if (!dropdownRef.current?.contains(e.target) && !itemRef.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    },
    [dropdownRef, itemRef, setShowDropdown]
  );

  const dropdownStateHandler = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, [setShowDropdown]);

  return (
    <UI.ItemWrapper onClick={dropdownStateHandler} ref={itemRef}>
      <UI.Indicator status={status} />
      <UI.ActionName>{JSON.parse(query).action || VARS.EMPTY}</UI.ActionName>
      <DotsIcon />
      {showCopied && <Copied />}
      {showDropdown && (
        <Dropdown
          ref={dropdownRef}
          request={request}
          setRequest={setRequest}
          setResponse={setResponse}
          removeRequest={removeRequest}
          setShowCopied={setShowCopied}
        />
      )}
    </UI.ItemWrapper>
  );
};

export default RequestItem;
