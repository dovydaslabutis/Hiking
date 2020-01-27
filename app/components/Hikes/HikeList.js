import React, { useState, useContext } from 'react';
import Hike from 'components/Hikes/Hike';
import { HikeContext } from 'components/Hikes/HikeContext';

const HikeList = () => {
  const [hikes, setHikes] = useContext(HikeContext);

  return (
    <div>
      {hikes.map(hike => (
        <Hike
          name={hike.name}
          type={hike.type}
          length={hike.length}
          location={hike.location}
        />
      ))}
    </div>
  );
};

export default HikeList;
