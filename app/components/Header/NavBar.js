import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'containers/Img/Image.jpg';
// import 'components/Header/styles.css';

const LinkStyle = { textDecoration: 'none', padding: 10 };

export default function NavBar() {
  return (
    <div>
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
        <img className="ImageBackground" src={Image} alt="background" />
      </h2>
    </div>
  );
}
