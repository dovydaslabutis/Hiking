import React, { useContext } from 'react';
import { HikeContext } from 'components/Hikes/HikeContext';
import './styles.css';

const CountHikes = () => {
  const [hikes, setHikes] = useContext(HikeContext);
  return (
    <div className="CounterStyle">
      <h1>List of Hikes: {hikes.length} </h1>
    </div>
  );
};
export default CountHikes;
