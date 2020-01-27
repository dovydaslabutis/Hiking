import React, { useState, createContext } from 'react';
// import HikeList from 'components/Hikes/HikeList';
// import CountHikes from 'components/Hikes/CountHikes';

export const HikeContext = createContext();

export const HikeProvider = props => {
  const [hikes, setHikes] = useState([
    {
      name: 'Varenos zygis',
      type: 'Zygis miskais',
      length: '15km, 18km, 23km',
      location: 'Varena',
    },
    {
      name: 'Varenos zygis',
      type: 'Zygis miskais',
      length: '15km, 18km, 23km',
      location: 'Varena',
    },
    {
      name: 'Varenos zygis',
      type: 'Zygis miskais',
      length: '15km, 18km, 23km',
      location: 'Varena',
    },
  ]);

  return (
    <HikeContext.Provider value={[hikes, setHikes]}>
      {/* <CountHikes />
      <HikeList /> */}
      {props.children}
    </HikeContext.Provider>
  );
};
