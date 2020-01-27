import React, { useState, useContext } from 'react';
import { HikeContext } from 'components/Hikes/HikeContext';
import './styles.css';

const AddHike = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [length, setLength] = useState('');
  const [location, setLocation] = useState('');
  const [hikes, setHikes] = useContext(HikeContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updateType = e => {
    setType(e.target.value);
  };
  const updateLength = e => {
    setLength(e.target.value);
  };
  const updateLocation = e => {
    setLocation(e.target.value);
  };

  const addHike = e => {
    e.preventDefault();
    setHikes(prevHikes => [...prevHikes, { name, type, length, location }]);
  };
  return (
    <div className="divbox">
      <h2>Add new Hike</h2>
      <form onSubmit={addHike}>
        Title
        <input type="text" name="name" value={name} onChange={updateName} />
        Type
        <input type="text" name="type" value={type} onChange={updateType} />
        Length
        <input
          type="text"
          name="length"
          value={length}
          onChange={updateLength}
        />
        Location
        <input
          type="text"
          name="location"
          value={location}
          onChange={updateLocation}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHike;
