import React from 'react';
import Efra from '../imgs/efra2.jpg'

export default function Bio(props) {
  return (
    <div className='bio-back'>
      <img src={Efra} alt='my self portrait' />
      <h1>how's it hangin, i'm efra.</h1>
      <div>
        <p>
          I like developing software and ideas.
        </p>
        <p>
          I want to use the affordances of modern technology to design creations that are utilitarian and
          human-centered.
        </p>
      </div>
    </div>
  );
}