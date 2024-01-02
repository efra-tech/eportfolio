import { React, useState } from 'react';

import { ResumeBtn } from './ResumeBtn';
import EducationDiv from './EducationDiv';
import PublicationBtn from './PublicationBtn';

export default function Resume(props) {
  const containerSubMain = {position: 'absolute', marginLeft: '22%', height: '500%', width: '66%', fontFamily: 'Montserrat, sans-serif'};

  var [boxMain, setBoxMain] = useState(
    <div style={containerSubMain}>
      <EducationDiv />
    </div>
  );

  function handleClickPub(props){
    setBoxMain(
      <div style={containerSubMain}>
        <div className='resume-back my-5 rc'>
          <PublicationBtn />
        </div>
      </div>
    );
  }
  function handleClickPaper(props){
    setBoxMain(
      <div style={containerSubMain}>
        <div className='resume-back my-5 rc'>
          <ResumeBtn />
        </div>
      </div>
    );
  }
  function handleClickEducation(props){
    setBoxMain(
      <div style={containerSubMain}>
        <EducationDiv />
      </div>
    );
  }

  return (
    <div className='a' style={{position: 'absolute', width:'100vw', left: '0', height: '14%', fontFamily: 'Montserrat, sans-serif'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.4%', height: '0.3rem', marginLeft: '10%'}}></div>
      <div className='d-flex mt-3' style={{paddingTop: '10px', paddingBottom: '100px', color: 'white'}}>
        <div onClick={handleClickEducation} className='b' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '9rem', marginLeft: '76%', opacity: '70%'}}>
          <p className='pt-4 pb-2'>Education</p>
        </div>
        <div onClick={handleClickPaper} className='b' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '7.9rem', opacity: '70%'}}>
          <p className='pt-4 pb-2'>Resume</p>
        </div>
        <div onClick={handleClickPub} className='b' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '10.2rem', opacity: '70%'}}>
          <p className='pt-4 pb-2'>Publications</p>
        </div>
      </div>

      {boxMain}

    </div>
  );
}


