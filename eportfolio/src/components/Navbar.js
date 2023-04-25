import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faIdCard, faCameraRetro, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { act } from 'react-dom/test-utils';


export default function Navbar(props) {

  const activeColor = 'pink';
  const deactiveColor = '#4c76bd';

  let navWidth = '9%';
  let brandProp = deactiveColor;

  const [brandShow, setBrandShow] = useState(false);
  function changeBrandOn(evt){
    setBrandShow(true);
  }
  function changeBrandOff(evt){
    setBrandShow(false);
  }
  if(brandShow === true) {
    brandProp = activeColor;
    navWidth = '17%';
  } else {
    brandProp = deactiveColor;
    navWidth = '9%';
  }

  let li1color = deactiveColor;
  const [li1, setli1] = useState(false);
  function hoverHighlightOn(evt){
    setli1(true);
  }
  function hoverHighlightOff(evt){
    setli1(false);
  }
  if(li1 === true) {
    li1color = activeColor;
  } else {
    li1color = deactiveColor;
  }

  let li2color = deactiveColor;
  const [li2, setli2] = useState(false);
  function hoverHighlightOn2(evt){
    setli2(true);
  }
  function hoverHighlightOff2(evt){
    setli2(false);
  }
  if(li2 === true) {
    li2color = activeColor;
  } else {
    li2color = deactiveColor;
  }

  let li3color = deactiveColor;
  const [li3, setli3] = useState(false);
  function hoverHighlightOn3(evt){
    setli3(true);
  }
  function hoverHighlightOff3(evt){
    setli3(false);
  }
  if(li3 === true) {
    li3color = activeColor;
  } else {
    li3color = deactiveColor;
  }

  function hoverHighlightOnSmall(evt){
    evt.target.style.color = activeColor;
  }
  function hoverHighlightOffSmall(evt){
    evt.target.style.color = deactiveColor;
  }


  return (
    <nav onMouseOver={changeBrandOn} onMouseOut={changeBrandOff}>
      <ul className='navbar navbar-nav p-5 row' style={{width: navWidth}}>
        <li className='d-flex'>
          <div className='nav-icon brand'><FontAwesomeIcon icon={faHandSpock} style={{color: brandProp, height: "5rem"}}/></div>
          <div className='nav-name brand' style={{color: brandProp}}>efra ahsan</div>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOn} onMouseOut={hoverHighlightOff}>
          <NavLink activeClassName='is-active' to="/" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={faFingerprint} style={{color: li1color, height: "5rem"}}/></div>
            <div className='nav-name' style={{color: li1color}}>bio</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOn2} onMouseOut={hoverHighlightOff2}>
          <NavLink to="/resume" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faIdCard} style={{color: li2color, height: "4.5rem"}}/></div>
            <div className='nav-name' style={{color: li2color}}>resume</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOn3} onMouseOut={hoverHighlightOff3}>
          <NavLink to="/portfolio" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faLayerGroup} style={{color: li3color, height: "5rem"}}/></div>
            <div className='nav-name' style={{color: li3color}}>portfolio</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
          <Link rel="noreferrer" target="_blank" to="https://www.linkedin.com/in/efra-ahsan-4b49a0228/" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faLinkedin} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
          </Link>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
          <Link rel="noreferrer" target="_blank" to="https://github.com/efra-tech" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faGithubSquare} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
          </Link>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
          <Link rel="noreferrer" target="_blank" to="https://vsco.co/dubroxo/gallery" className='d-flex' activeClassName='is-active'>
            <div className='nav-icon'><FontAwesomeIcon icon={faCameraRetro} style={{color: "#4c76bd", height: "3.7rem"}}/></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}