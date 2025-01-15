import React from 'react';
import resume from './EAHSAN_RESUME_SWE.pdf';


export function ResumeBtn(props){


  return(
    <div className='resume-backback rc pb-5' style={{fontSize: '1.53rem', width: '100%', height: '75.5vh', borderTop: '13px solid black', borderRadius: '2%', backgroundColor: 'black', marginLight: '15%', marginTop: '-8.5%', boxShadow: '0 4px 2px -2px darkgray'}}>

      <object data={resume} type="application/pdf" width="96%" height="100%"></object>
    </div>
  );

}