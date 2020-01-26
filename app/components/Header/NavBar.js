import React from 'react';
import { Link } from 'react-router-dom';

const LinkStyle = { textDecoration: 'none', padding: 10 };

export default function NavBar() {
  return (
    <h2>
      <Link style={LinkStyle} to="/">
        Home
      </Link>
      <Link style={LinkStyle} to="/AddNewHikePage">
        Add New
      </Link>
      <Link style={LinkStyle} to="/ListPage">
        Hikes
      </Link>
      <Link style={LinkStyle} to="/MapPage">
        Map
      </Link>
    </h2>
  );
}
