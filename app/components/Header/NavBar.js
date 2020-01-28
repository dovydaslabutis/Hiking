import React from 'react';
import { Link } from 'react-router-dom';
import './stylesNavBar.css';

const LinkStyle = { textDecoration: 'none', padding: 10 };

export default function NavBar() {
  return (
    <div className="NavBar">
      <h2>
        <Link style={LinkStyle} to="/UserPage">
          Home
        </Link>
        <Link style={LinkStyle} to="/ListPage">
          Hikes
        </Link>
        <Link style={LinkStyle} to="/MapPage">
          Map
        </Link>
      </h2>
    </div>
  );
}
