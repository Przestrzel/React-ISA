import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar-element'>Team manager</li>
        <li className='navbar-element'>All teams</li>
      </ul>
    </nav>
  );
};

export default Header;
