import React from 'react';
import resume from './resume.pdf';


export function ResumeBtn(props){


  return(
    <div className='resume-backback rc pb-5' style={{fontSize: '1.53rem', width: '100%', height: '72.5vh', borderTop: '13px solid black', borderRadius: '2%', backgroundColor: 'black', marginLight: '15%', marginTop: '-8%'}}>
      <div className='staticTop'>
        <h1>Resume</h1>
      </div>

      <object data={resume} type="application/pdf" width="96%" height="100%"></object>
    </div>
  );

}