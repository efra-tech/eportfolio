import React from 'react';

export default function Resume(props) {
  return (
    <div className=''>
      <div className='resume-back my-5 rc'>
        <h1>Education</h1>
        <div>
          <div className='d-flex'>
            <p>University of Washington</p>
            <p className='px-4'><i>Seattle, WA</i></p>
            <p className='px-4'><i>2020-2023</i></p>
          </div>
          <p>Bachelors of Science in Informatics</p>
        </div>
      </div>
      <div className='resume-back my-5 rc'>
        <h1>Technical Skills</h1>
        <div>
          <p><i>Programming Languages</i></p>
          <p>JavaScript, Python, CSS, HTML, R, SQL/SQLite</p>
          <p><i>Skills</i></p>
          <p>Machine Learning, Statistical Modeling, Object-Oriented Programming, SQL Databases Management & Design</p>
          <p><i>Libraries/Frameworks</i></p>
          <p>React.js, Node.js, Git, Bootstrap, scikit-learn, statsmodels, seaborn, matplotlib</p>
          <p><i>Business Skills</i></p>
          <p>Project Management, Leadership, Product Innovation, Consultant Mentality</p>
        </div>
      </div>
      <div className='resume-back my-5 rc'>
        <h1>Awards, Achievements, and Publications</h1>
      </div>
      <div className='resume-back my-5 rc'>
        <h1>Volunteering & Community Involvement</h1>
      </div>
      <div>
        <p><i>Conversational Languages</i></p>
        <p> English, Urdu, Punjabi</p>
      </div>
    </div>
  );
}