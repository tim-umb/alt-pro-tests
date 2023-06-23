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

const useEntityContainer = () => {
  const toggleClose = (): any => {};
  const [isClose, setIsClose] = useState(false);

  const data: any = { isClose };

  const fns: any = {
    toggleClose: () => setIsClose(!isClose)
  };

  return { data, fns };
};

export default useEntityContainer;
