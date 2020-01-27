import React, { useState, useContext } from 'react';
import { HikeContext } from 'components/Hikes/HikeContext';

const AddHike = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [hikes, setHikes] = useContext(HikeContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updateType = e => {
    setType(e.target.value);
  };

  const addHike = e => {
    e.preventDefault();
    setHikes(prevHikes => [...prevHikes, { name, type }]);
  };
  return (
    <form onSubmit={addHike}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="type" value={type} onChange={updateType} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddHike;
