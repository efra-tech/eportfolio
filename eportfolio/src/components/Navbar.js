import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faIdCard, faCameraRetro, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Navbar(props) {

  function changeNavTextColor(evt){
    evt.target.style.color = 'pink';
  }

  function changeNavTextColorBack(evt){
    evt.target.style.color = '#4c76bd';
  }

  return (
    <nav>
      <ul className='navbar navbar-nav p-5 row'>
        <li className='d-flex'>
          <div className='nav-icon brand'><FontAwesomeIcon icon={faHandSpock} style={{color: "#4c76bd", height: "5rem"}}/></div>
          <div className='nav-name brand'>efra ahsan</div>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <NavLink activeClassName='is-active' to="/" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={faFingerprint} style={{color: "#4c76bd", height: "5rem"}}/></div>
            <div className='nav-name'>bio</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <NavLink to="/resume" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faIdCard} style={{color: "#4c76bd", height: "4.5rem"}}/></div>
            <div className='nav-name'>resume</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <NavLink to="/portfolio" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faLayerGroup} style={{color: "#4c76bd", height: "5rem"}}/></div>
            <div className='nav-name'>portfolio</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <Link rel="noreferrer" target="_blank" to="https://www.linkedin.com/in/efra-ahsan-4b49a0228/" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faLinkedin} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
          </Link>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <Link rel="noreferrer" target="_blank" to="https://github.com/efra-tech" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faGithubSquare} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
          </Link>
        </li>

        <li className='nav-item' onMouseOver={changeNavTextColor} onMouseOut={changeNavTextColorBack}>
          <Link rel="noreferrer" target="_blank" to="https://vsco.co/dubroxo/gallery" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faCameraRetro} style={{color: "#4c76bd", height: "3.7rem"}}/></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}