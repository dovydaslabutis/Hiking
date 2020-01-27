import React from 'react';

const Hike = ({ name, type, length, location }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{length}</p>
      <p>{location}</p>
    </div>
  );
};

export default Hike;
