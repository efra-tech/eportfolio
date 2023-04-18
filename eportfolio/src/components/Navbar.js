import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className='nav navbar-expand-lg'>
      <div>
        <ul className="list-unstyled navbar-nav mr-auto">
          <li id='nav-item-1' className='p-5'><NavLink to="/">EFRA</NavLink></li>
          <li id='nav-item-2' className='p-5'><NavLink to="/resume">resume</NavLink></li>
          <li id='nav-item-3' className='p-5'><NavLink to="/portfolio">portfolio</NavLink></li>
          <li id='nav-item-4' className='p-5'><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/efra-ahsan-4b49a0228/">LinkedIn</a></li>
          <li id='nav-item-5' className='p-5'><a rel="noreferrer" target="_blank" href="https://github.com/efra-tech">GitHub</a></li>
          <li id='nav-item-6' className='p-5'><a rel="noreferrer" target="_blank" href="https://vsco.co/dubroxo/gallery">VSCO</a></li>
        </ul>
      </div>
    </nav>
  );
}