import { React } from 'react';

export default function EducationDiv(props) {
  return(
    <div className='resume-back rc pb-5 pt-3'>
      <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '3rem'}}>Education</h1>
      <div className='d-flex mt-4'>
        <div>
          <p style={{textShadow: '10px 10px 10px purple', color:'white', fontWeight: '900', fontSize: '1.5rem'}}>University of Washington</p>
          <p style={{fontWeight: '900', textShadow: '1px 1px 1px black'}}>Bachelor of Science in Informatics</p>
          <p>Dean's List Recipient Spring 2022 - Spring 2023</p>
        </div>
        <div className style={{position: 'absolute', right: '19%', textAlign: 'right'}}>
          <p className style={{fontWeight: '900'}}><i>2020-2023</i></p>
          <p className style={{fontSize: '1.3rem'}}><i>Seattle, WA</i></p>
        </div>
      </div>
      <div className='d-flex mt-5'>
        <div>
          <p style={{textShadow: '10px 10px 10px darkblue', color:'white', fontWeight: '900', fontSize: '1.5rem'}}>Clark College</p>
          <p style={{fontWeight: '900', textShadow: '1px 1px 1px black'}}>Running Start student exploring pre-medicine</p>
          <p>Vice President's List Recipient Fall 2019 & Spring 2020</p>
        </div>
        <div style={{position: 'absolute', right: '19%', textAlign: 'right'}}>
          <p style={{fontWeight: '900'}}><i>2018-2020</i></p>
          <p style={{ fontSize: '1.3rem'}}><i>Vancouver, WA</i></p>
        </div>
      </div>
    </div>
  );
}