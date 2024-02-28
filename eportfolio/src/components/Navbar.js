import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCameraRetro, faFingerprint, faPenRuler, faHippo, faHandScissors, faHandSpock, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default function Navbar(props) {

  const activeColor = 'pink';
  const deactiveColor = '#4c76bd';

  let ani = "none";
  let navWidth = '7.3%';
  let brandProp = deactiveColor;
  let smallIconShow = 'hide'

  const [brandShow, setBrandShow] = useState(false);
  function changeBrandOn(evt){
    setBrandShow(true);
  }
  function changeBrandOff(evt){
    setBrandShow(false);
  }
  if(brandShow === true) {
    brandProp = activeColor;
    navWidth = '20.9%';
    ani = "shake 0.9s"
    smallIconShow = 'show';
  } else {
    brandProp = deactiveColor;
    navWidth = '7.3%';
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
    evt.target.style.color = "#d7d7d7";
  }
  function hoverHighlightOffSmall(evt){
    evt.target.style.color = deactiveColor;
  }


  return (
    <nav onMouseOver={changeBrandOn} onMouseOut={changeBrandOff} className='main'>
      <ul className='navbar navbar-nav row' style={{width: navWidth}}>

        <li className='d-flex'>
          <NavLink to="/" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={ faHandScissors } style={{color: brandProp, height: "5rem", animation: ani, position: 'absolute'}}/></div>
            <div className='nav-name' style={{color: brandProp, position: 'absolute', paddingLeft: '14%', paddingBottom: '2%', fontFamily: 'short stack, sans-serif', fontSize: '3.9rem'}}><p>efra</p>ahsan</div>
          </NavLink>
        </li>

        <div style={{height:'35vh'}}></div>

        <li className='nav-item' onMouseOver={hoverHighlightOn} onMouseOut={hoverHighlightOff}>
          <NavLink to="/" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={faFingerprint} style={{color: li1color, height: "4rem"}}/></div>
            <div className='nav-name' style={{color: li1color, paddingTop: "3%", position: 'absolute', paddingLeft: '12%'}}>bio</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOn2} onMouseOut={hoverHighlightOff2}>
          <NavLink to="/resume" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={faPenRuler} style={{color: li2color, height: "3.5rem", paddingLeft: '8.2%'}}/></div>
            <div className='nav-name' style={{color: li2color, paddingTop: "3%", position: 'absolute', paddingLeft: '12%'}}>{'  resume'}</div>
          </NavLink>
        </li>

        <li className='nav-item' onMouseOver={hoverHighlightOn3} onMouseOut={hoverHighlightOff3}>
          <NavLink to="/portfolio" className='d-flex'>
            <div className='nav-icon'><FontAwesomeIcon icon={faLayerGroup} style={{color: li3color, height: "4rem"}}/></div>
            <div className='nav-name' style={{color: li3color, paddingTop: "3%", position: 'absolute', paddingLeft: '12%'}}>portfolio</div>
          </NavLink>
        </li>

        <li className='d-flex m-5' style={{position: 'absolute', bottom: '0', left: '0'}}>
          <li className={'nav-item p-3 ' + smallIconShow} onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
            <Link rel="noreferrer" target="_blank" to="https://www.linkedin.com/in/efra-ahsan-4b49a0228/" className='d-flex'>
              <div className='nav-icon'><FontAwesomeIcon icon={faLinkedin} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
            </Link>
          </li>

          <li className={'nav-item p-3 ' + smallIconShow} onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
            <Link rel="noreferrer" target="_blank" to="https://github.com/efra-tech" className='d-flex'>
              <div className='nav-icon'><FontAwesomeIcon icon={faGithubSquare} style={{color: "#4c76bd", height: "4.1rem"}}/></div>
            </Link>
          </li>

          <li className={'nav-item p-3 ' + smallIconShow} onMouseOver={hoverHighlightOnSmall} onMouseOut={hoverHighlightOffSmall}>
            <Link rel="noreferrer" target="_blank" to="https://www.fiverr.com/efra3ahsan?public_mode=true" className='d-flex'>
              <div className='nav-icon'><FontAwesomeIcon icon={faWindowMaximize} style={{color: "#4c76bd", height: "3.9rem"}}/></div>
            </Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}