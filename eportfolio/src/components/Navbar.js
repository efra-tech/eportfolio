import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className='nav'>
      <ul className="list-unstyled navbar-nav mr-auto">
        <li id='nav-item-1' className='m-4 px-5'><NavLink to="/home">EFRA</NavLink></li>
        <li id='nav-item-2' className='m-4 px-5'><NavLink to="/home">home</NavLink></li>
      </ul>
    </nav>
  );
}