import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar-element'>
          <Link to='/teams'> Team manager </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
