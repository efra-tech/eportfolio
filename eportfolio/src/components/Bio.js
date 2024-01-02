import React from 'react';
import Efra from '../imgs/efra2.jpg'

export default function Bio(props) {
  return (
    <div className='a' style={{position: 'absolute', width:'100vw', left: '0', height: '14%'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.4%', height: '0.3rem', marginLeft: '10%'}}></div>
      <div className='bio-back' style={{marginTop: '14%'}}>
        <img src={Efra} alt='my self portrait' />
        <h1>how's it hangin, i'm efra.</h1>
        <div>
          <p>
            I like developing apps and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}