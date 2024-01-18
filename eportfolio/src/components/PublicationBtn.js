import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import img from '../imgs/GM.Instagram.HackConsc.jpeg';

export default function PublicationBtn(props){


  return(
    <div className='resume-backback rc pb-5 pt-3' style={{fontSize: '1.53rem', width: '97%', color: 'white', height: '68.999vh', border: 'none', borderRight: '13px solid black', borderTop: '11px solid black', borderLeft: '11px solid black', borderRadius: '2%', backgroundColor: 'black', marginRight: '-8.3%', marginTop: '-5%'}}>

      <div className='staticTop'>
        <h1>Publications</h1>
      </div>

      <div className='resume-back rc pb-2 pt-5' style={{overflowY: 'scroll'}}>
        <a href='https://greymattersjournal.org/hacking-consciousness-mindfulness-meditation-ego-death-and-enlightenment-engineering/' rel="noreferrer" target='_blank'><div className='card'>
          <div className='d-flex'>
            <img className="card-img-top" src={img} style={{width: '30rem'}} alt="Illustration from article: Free From Ego" />
            <div className='card-body'>
              <h1 className='card-title pb-2' style={{color: 'black', fontSize: '2.1rem'}}>Hacking Consciousness: Mindfulness Meditation, Ego Death, and Enlightenment Engineering</h1>
              <p className='card-text' style={{color: 'gray'}}>Grey Matters Undergraduate Neuroscience Journal, Issue 25</p>
              <p className='card-text' style={{color: 'gray'}}>15 OCT 2023</p>
              <a className='pubHyperLink' rel="noreferrer" target="_blank" href="https://www.linkedin.com/posts/efra-ahsan-4b49a0228_hacking-consciousness-mindfulness-meditation-activity-7138436623712600064-NQeI?utm_source=share&utm_medium=member_desktop"><FontAwesomeIcon icon={faLinkedin} style={{color: '#4c76bd', height: "3.1rem"}}/></a>

            </div>
          </div>
        </div></a>
      </div>

    </div>
  );
}


