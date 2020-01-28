import React, { useState, createContext, useEffect } from 'react';
// import HikeList from 'components/Hikes/HikeList';
// import CountHikes from 'components/Hikes/CountHikes';
import PropTypes from 'prop-types';
export const HikeContext = createContext();

export const HikeProvider = props => {
  const [hikes, setHikes] = useState(
    [
      {
        name: 'Gajos Sleniais',
        type: 'Zygis miskais',
        length: '15km, 33km, 45km',
        location: 'Sigulda-Latvia',
      },
      {
        name: 'Druskininku zygis',
        type: 'Zygis miskais',
        length: '13km, 20km, 35km',
        location: 'Druskininku apylinkes',
      },
      {
        name: 'Coastline trek',
        type: 'Zygis pajuriu',
        length: '15km, 25km, 50km, 100km',
        location: 'Palanga',
      },
      {
        name: 'Augustavo ezeras',
        type: 'Zygis miskais',
        length: '13km, 23km, 35km',
        location: 'Augustavas - Lenkija',
      },
      {
        name: 'Nemuno Kilpos',
        type: 'Zygis miskais',
        length: '15km, 20km, 27km, 40km, 53km',
        location: 'Prienai-Birstonas',
      },
      {
        name: 'Ziemos zygis',
        type: 'Zygis miskais',
        length: '15km, 18km, 23km',
        location: 'Varenos rajonas',
      },
      {
        name: 'Karjeru zygis',
        type: 'Zygis karjerais/miskais',
        length: '13km, 25km, 37km',
        location: 'Naujoji akmene',
      },
    ],
    () => {
      const localData = localStorage.getItem('hikes');
      return localData ? JSON.parse(localData) : [];
    },
  );
  useEffect(() => {
    localStorage.setItem('hikes', JSON.stringify(hikes));
  }, [hikes]);
  return (
    <HikeContext.Provider value={[hikes, setHikes]}>
      {props.children}
    </HikeContext.Provider>
  );
};

HikeProvider.propTypes = {
  children: PropTypes.array,
};
