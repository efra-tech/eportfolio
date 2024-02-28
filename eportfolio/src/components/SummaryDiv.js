import { React } from 'react';

export default function SummaryDiv(props) {
  return(
    <div className='resume-backback rc pb-5 pt-0' style={{fontSize: '1.53rem', width: '97%', color: 'white', backgroundColor: 'black'}}>

      <div className='staticTop'>
        <h1>Summary</h1>
      </div>

      <div className='resume-back rc pb-2 pt-3' style={{overflowY: 'scroll'}}>
        <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic'}}>Summary</h1>
        <div className='pb-2'>
          <ul className='py-4'>
            <li>Website developer, creative, and goal-driven.</li>
            <li>Two years of project experience in React development, data programming, and design.</li>
            <li>Achieved a successful open-source app project, recipient of annual Capstone Research Award from University of Washington Information School 2023.</li>
          </ul>
        </div>
        <div>
          <p><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>{'>>'} IT Skills:&nbsp;&nbsp;</em></p>
            <p>Front-End Development, &nbsp;Programming, &nbsp;UX/UI Design, &nbsp;Graphic Design, &nbsp;Project Management, &nbsp;IT Consulting, &nbsp;Marketing</p>

          <p><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>{'>>'} Programming Languages:&nbsp;&nbsp;</em></p>
          <p>Python, &nbsp;JavaScript (ES6+), &nbsp;CSS (CSS3), &nbsp;HTML (HTML5), &nbsp;R, &nbsp;SQLite</p>

          {/* <p><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.32rem', fontStyle: 'normal'}}>Libraries/Frameworks:&nbsp;&nbsp;</em></p>
          <p>Git, React.JS, Node.JS, Bootstrap, Firebase, Pandas, NumPy, Statsmodels, Seaborn, Matplotlib</p>

          <p><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.32rem', fontStyle: 'normal'}}>Tools:&nbsp;&nbsp;</em></p>
          <p>GitHub, Figma, Jupyter Notebook, RStudio, Anaconda Navigator, VSCode, NPM, Canva, Adobe Photoshop/Lightroom, Vector Libraries (SVGs, icons, images)</p> */}
        </div>
      </div>

      <div className='resume-back rc pb-2 pt-3' style={{overflowY: 'scroll'}}>
        <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic'}}>Professional Experience</h1>
        <div>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.62rem', fontStyle: 'normal'}}>Freelance Web Developer & Digital Designer&nbsp;&nbsp;</em>| &nbsp;May 2023 - Nov 2023</p>
            <p style={{fontSize: '1.45rem'}}>Constructed website and mobile projects for start-ups and companies based within Washington state. I individually fulfilled roles covering webpage development, UX/UI design, and printed graphic design.</p>

          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.62rem', fontStyle: 'normal'}}>Marketing Contractor Intern&nbsp;&nbsp;</em>| &nbsp;April 2022 - June 2022</p>
          <p style={{fontSize: '1.45rem'}}>Connected a stealth wearable technology start-up with potential buyers in King County to build
              a clientele list. I marketed the product over phone and email, and facilitated rendering feedback during demonstrations.
          </p>

        </div>
      </div>

      <div className='resume-back rc pb-2 pt-3' style={{overflowY: 'scroll', fontSize: '1.49rem'}}>
        <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic'}}>Education</h1>
        <div className='d-flex mt-4'>
          <div>
            <p style={{textShadow: '5px 2px 6px purple', color:'white', fontWeight: '900', fontSize: '1.55rem'}}>University of Washington</p>
            <p style={{fontWeight: '900', textShadow: '1px 1px 1px black'}}>Bachelor of Science, <i style={{fontWeight: '500', fontStyle: 'normal'}}>Informatics</i></p>
            <p style={{marginTop: '-1.2%', fontSize: '1.35rem'}}>Successful completion of courses in building information technology, designing information experiences, and questioning the use and impact of IT.</p>
            <p className='py-0 my-0' style={{fontSize: '1.3rem'}}>- iSchool Capstone Research Award 2023, Annual Dean’s List 2022 - 2023</p>
          </div>
          <div style={{position: 'absolute', right: '19%', textAlign: 'right'}}>
            <p style={{fontWeight: '900'}}><i>2020-2023</i></p>
            <p style={{ fontSize: '1.5rem'}}><i>Seattle, WA</i></p>
          </div>
        </div>
        <div className='d-flex mt-5'>
          <div>
            <p style={{textShadow: '5px 2px 7px darkblue', color:'white', fontWeight: '900', fontSize: '1.55rem'}}>Clark College</p>
            <p style={{fontWeight: '900', textShadow: '1px 1px 1px black'}}>High School Dual Enrollment - Pre-Sciences</p>
            <p style={{marginTop: '-1.2%', fontSize: '1.35rem'}}>Successful completion of credits for General Education and Pre-Medicine.</p>
            <p className='py-0 my-0' style={{fontSize: '1.3rem'}}>- Vice President's List Fall 2019 & Spring 2020</p>
          </div>
          <div style={{position: 'absolute', right: '19%', textAlign: 'right'}}>
            <p style={{fontWeight: '900'}}><i>2018-2020</i></p>
            <p style={{ fontSize: '1.44rem'}}><i>Vancouver, WA</i></p>
          </div>
        </div>
      </div>

    </div>
  );
}