import React, { useContext } from 'react';
import { HikeContext } from 'components/Hikes/HikeContext';

const CountHikes = () => {
  const [hikes, setHikes] = useContext(HikeContext);
  return (
    <div>
      <h3>List of Hikes: {hikes.length} </h3>
    </div>
  );
};
export default CountHikes;
