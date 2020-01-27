import React from 'react';
import './styles.css';

// import 'components/Hikes/styles.css';

const Hike = ({ name, type, length, location }) => {
  return (
    <div className="divbox">
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{length}</p>
      <p>{location}</p>
    </div>
  );
};

export default Hike;
