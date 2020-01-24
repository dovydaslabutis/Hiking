import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <h2 className="headerStyle">
      <Link to="/">Home</Link>
      <Link to="/AddNewHikePage">Add New</Link>
      <Link to="/ListPage">Hikes</Link>
      <Link to="/MapPage">Map</Link>
    </h2>
  );
}
