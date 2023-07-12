/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React, { useState } from 'react';

const useMainNav = () => {
  const [isClosed, setIsClosed] = useState(false);
  const data: any = { isClosed };

  const handleMainNavChange = () => {
    setIsClosed(!isClosed);
  };

  const fns: any = { handleMainNavChange };

  return { data, fns };
};

export default useMainNav;
