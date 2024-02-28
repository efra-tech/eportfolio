import { React, useState } from 'react';

import { ResumeBtn } from './ResumeBtn';
import SummaryDiv from './SummaryDiv';
import PublicationBtn from './PublicationBtn';

export default function Resume(props) {
  const containerSubMain = {position: 'absolute', marginLeft: '22%', height: '500%', width: '66%', fontFamily: 'Montserrat, sans-serif'};

  var [boxMain, setBoxMain] = useState(
    <div style={containerSubMain}>
      <SummaryDiv />
    </div>
  );

  function handleClickPub(props){
    setBoxMain(
      <div style={containerSubMain}>
        <div className='my-5 rc'>
          <PublicationBtn />
        </div>
      </div>
    );
  }
  function handleClickPaper(props){
    setBoxMain(
      <div style={containerSubMain}>
        <div className='my-5 rc'>
          <ResumeBtn />
        </div>
      </div>
    );
  }
  function handleClickSummary(props){
    setBoxMain(
      <div style={containerSubMain}>
        <SummaryDiv />
      </div>
    );
  }

  return (
    <div className='a' style={{position: 'absolute', width:'98vw', left: '0', height: '13.7%', fontFamily: 'Montserrat, sans-serif'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.9%', height: '0.2rem', marginLeft: '21.5%', boxShadow: '0px 1px 5px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1.4%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 5px white'}}></div>
      <div className='d-flex mt-3' style={{paddingTop: '10px', paddingBottom: '100px', color: 'white', fontSize: '1.45rem'}}>
        <div onClick={handleClickSummary} className='latButton' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '14.3rem', marginLeft: '76%', opacity: '70%', borderLeft: '5px solid white'}}>
          <p className='pt-4 pb-2'>Summary</p>
        </div>
        <div onClick={handleClickPaper} className='latButton' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '13.3rem', opacity: '70%', borderLeft: '5px solid white'}}>
          <p className='pt-4 pb-2'>Resume</p>
        </div>
        <div onClick={handleClickPub} className='latButton' style={{backgroundColor: '#4c76bd', borderRadius: '0.7rem', textAlign: 'center', marginRight: '1.4rem', width: '16rem', opacity: '70%', borderLeft: '5px solid white'}}>
          <p className='pt-4 pb-2'>Publications</p>
        </div>
      </div>

      {boxMain}

      <div style={{backgroundColor: 'lightgray', marginTop: '38.9%', height: '0.19rem', marginLeft: '42.5%', marginRight: '19%', boxShadow: '0px 1px 9px white'}}></div>

    </div>
  );
}


