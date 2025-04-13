import React from 'react';
import resume from './AHSANE25_Resume.pdf';


export function ResumeBtn(props){


  return(
    <div className='resume-backback rc pb-5' style={{fontSize: '1.53rem', width: '100%', height: '75.5vh', borderTop: '13px solid black', borderRadius: '2%', backgroundColor: 'black', marginLeft: '15%', marginTop: '-3.5%', boxShadow: '0 4px 2px -2px darkgray'}}>

      <object data={resume} type="application/pdf" width="96%" height="93%"></object>
    </div>
  );

}