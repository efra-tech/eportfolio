import { React, useState } from 'react';

import { ResumeBtn } from './ResumeBtn';
import SummaryDiv from './SummaryDiv';

export default function Resume(props) {
  const containerSubMain = {position: 'absolute', marginLeft: '22%', height: '500%', width: '66%', fontFamily: 'Montserrat, sans-serif'};

  const [activeBtn, setActiveBtn] = useState(0);


  var [boxMain, setBoxMain] = useState(
    <div style={containerSubMain}>
      <ResumeBtn />
    </div>
  );

  function handleClickPaper(event, props){
    setBoxMain(
      <div style={containerSubMain}>
        <div className='my-5 rc'>
          <ResumeBtn />
        </div>
      </div>
    );
    setActiveBtn(0);
  }
  function handleClickSummary(event, props){
    setBoxMain(
      <div style={containerSubMain}>
        <SummaryDiv />
      </div>
    );
    setActiveBtn(1);
  }

  return (
    <div className='a' style={{position: 'absolute', width:'98vw', left: '0', height: '13.7%', fontFamily: 'Montserrat, sans-serif'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.9%', height: '0.2rem', marginLeft: '21.5%', boxShadow: '0px 1px 5px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1.4%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 5px white'}}></div>
      <div className='d-flex mt-3' style={{paddingTop: '10px', paddingBottom: '100px', color: 'white', fontSize: '1.4rem'}}>
        <div onClick={handleClickPaper} className='latButton' style={{backgroundColor: activeBtn === 0 ? '#AAB3C6' : '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '12.8rem', marginLeft: '76%', opacity: '70%'}}>
          <p className='pt-4 pb-2'>Resume</p>
        </div>
        <div id='parent' onClick={handleClickSummary} className='latButton' style={{backgroundColor: activeBtn === 1 ? '#AAB3C6' : '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '16.8rem', opacity: '70%'}}>
          <p className='pt-4 pb-2'>Extracurriculars</p>
        </div>
      </div>

      {boxMain}


    </div>
  );
}


