import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StatusType } from '../../../../types/StatusType';
import Dropdown from '../../../../UI/Dropdown';
import { DotsIcon } from '../../../CommonComponents/Icons/DotsIcon';

import * as UI from './styles';

interface IRequestItemProps {
  query: string;
  status?: StatusType;
}

const RequestItem: React.FC<IRequestItemProps> = ({ query, status }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const itemRef = useRef<any>(null);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, [dropdownRef]);

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
      <UI.ActionName>{JSON.parse(query).action || 'empty'}</UI.ActionName>
      <DotsIcon />
      {showDropdown && <Dropdown ref={dropdownRef} />}
    </UI.ItemWrapper>
  );
};

export default RequestItem;
