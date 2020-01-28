import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

// import 'components/Hikes/styles.css';

const Hike = ({ name, type, length, location }) => (
  <div className="divbox">
    <h3>{name}</h3>
    <p>{type}</p>
    <p>{length}</p>
    <p>{location}</p>
  </div>
);

export default Hike;

Hike.propTypes = {
  name: PropTypes.array,
};

Hike.propTypes = {
  type: PropTypes.array,
};

Hike.propTypes = {
  length: PropTypes.array,
};

Hike.propTypes = {
  location: PropTypes.array,
};
