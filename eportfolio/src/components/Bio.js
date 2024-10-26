import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Efra from '../imgs/professionalHeadshot.jpg';

export default function Bio(props) {
  return (
    <div className='a' style={{position: 'absolute', width:'100vw', left: '0'}}>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>

      <div className='resume-backback p-2' style={{color:'white', marginTop: '-1.5%', height: '87.9%', width: '43%', borderTop: 'none', backgroundColor: '#11041e', marginRight: '19.0%', opacity: '1.5'}}>
        <img src={Efra} alt='my self portrait' style={{width: '31%', marginTop: '2.4%', borderRadius: '3rem'}} />
        <h2>Hey, I'm Efra Ahsan.</h2>
        <div className='mx-4'>
          <h5>
            I like developing apps and ideas.
          </h5>
          <div className='biobox pt-3' style={{textAlign: 'left'}}>
            <p>I am a recent Informatics graduate attending of University of Washington. I have a passion for shaping the intersection that lies between technology and the frontiering for people. For quick reference, check out my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/resume'>resume</a> and <a className='bio-p1-a' style={{fontWeight: '900'}} href='/portfolio'>portfolio</a>.</p>
            <p>A bit about me:</p>
            <p>I began my undergraduate studies as a pre-med major, however, my interest and energy were truly captured in my extracirrcular hobbies using a range of technologies, from graphic design tools to a brain-computer interface, and software products. Most of my extracirrcicular involvement was with the undergraduate neurotechnology club, an underground tech hub, where I got to learn about the use of technology on the brain, apply even data programming and introductory machine learning to real-life applications, and inspired there in to research and publish my first article, a <a rel="noreferrer" href='https://www.linkedin.com/posts/efra-ahsan-4b49a0228_hacking-consciousness-mindfulness-meditation-activity-7138436623712600064-NQeI/?utm_source=share&utm_medium=member_desktop' target='_blank'>science article</a>, about the neuroscience of consciousness hacking. </p>
            <p>My second year of college I began to pursue IT, and closely failed my first class in websites. I took it as a challenge, however, with passion for the field, and pushed myself to exceed. In the same undergraduate neurotechnology club, I learned to lead siteware development and we launched <a href='https://synaptechuw.org/' target='_blank' rel='noreferrer'>www.synaptechuw.org</a>. I overcame my failure and fear of websites when I led engineering for my capstone project, an open-source community and culture app, for which my team even recieved an annual academic award. I have since then worked on a number of websites and app projects, design and development in my ability, which are highlighted in my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/portfolio'>portfolio</a>.</p>
            <p>I am seeking the opportunity for my first full-time position, where I can apply my skills and education. I aspire to work at the enterprise level, and bring ambition and drive to a collaborative environment. </p>
            <p>With that, welcome to my website, and if you would like to chat over any opportunities or shared interests, I would be happy to connect. </p>
          </div>
          <p style={{fontSize: '0.9rem', color: 'lightgray', paddingTop: '3%'}}>all icons on this website are from <a href='https://fontawesome.com/' target='_blank' rel='noreferrer' style={{fontWeight: '800', color: 'lightgray'}}>FontAwesome</a></p>
        </div>


      </div>


      <div style={{backgroundColor: 'pink', marginTop: '13%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '0.9%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>

      <div style={{backgroundColor: 'lightgray', marginTop: '13%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.1rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.05rem', marginLeft: '10%', marginBottom: '6.7%', boxShadow: '0px 1px 6px lightgray'}}></div>

      <footer style={{marginBottom: '-3%', backgroundColor: 'black', opacity: '0.76', paddingTop: '4px', paddingBottom: '4px', borderRight: '17.72px solid rgb(7, 7, 7)'}}>
          <div className='d-flex justify-content-center pt-4 footerPar'>
            <p className='mx-5 pr-5' style={{paddingLeft: '15.7%', color: 'pink', fontWeight: '800', textShadow: '0px 0.2px 0.6px pink'}}>Let's connect!</p>
            <a className='mx-5' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/efra-ahsan-4b49a0228/"><FontAwesomeIcon icon={faLinkedin} style={{color: '#4c76bd', height: "21.8px"}}/></a>
            <a href="mailto:efra.ahsan23@gmail.com?body=Efra says, hello. You may delete this message now."><p className='mx-5' style={{color: '#4c76bd'}}>efra.ahsan23@gmail.com</p></a>
            <a href="tel:+13609499164"><p className='mx-5' style={{color: '#4c76bd'}}>+1 (360) 949-9164</p></a>
          </div>
      </footer>

    </div>

    // <div className='container-fluid'>
    //   <div className='row'>
    //     <div className='col-12'>
    //       <div className='pink-bar'></div>
    //       <div className='lightgray-bar'></div>
    //     </div>
    //   </div>
    //   <div className='row'>
    //     <div className='col-lg-5 col-md-12 resume-backback p-2'>
    //       <img src={Efra} alt='my self portrait' className='portrait-img' />
    //       <h2>Hey, I'm Efra Ahsan.</h2>
    //       <div className='mx-4'>
    //         <h5>I like developing apps and ideas.</h5>
    //         <div className='biobox pt-3'>
    //           <p>I am a recent graduate of the Informatics program at the University of Washington. I have a passion for shaping the intersection that lies between technology and the social sciences. For quick reference, check out my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/resume'>resume</a> and <a className='bio-p1-a' style={{fontWeight: '900'}} href='/portfolio'>portfolio</a>.</p>
    //           <p>A bit about me:</p>
    //           <p>I started my undergraduate journey as a pre-med major, however, I soon realized that my interest and energy were truly captured while using a range of technologies in my extracurriculars, from graphic design tools all the way to a brain-computer interface. One of my favorite extracurriculars was the undergraduate neurotechnology club where I learned about the use of technology on the brain, applied data programming to real-life applications, and ultimately became inspired to write and publish an <a rel="noreferrer" href='https://www.linkedin.com/posts/efra-ahsan-4b49a0228_hacking-consciousness-mindfulness-meditation-activity-7138436623712600064-NQeI/?utm_source=share&utm_medium=member_desktop' target='_blank'>article</a> about the neuroscience of consciousness hacking. I became fascinated with how humans consciously and subconsciously interact with technology; therefore, I switched my major to Informatics, with a focus in application development.</p>
    //           <p>I would not say I was a natural- I nearly failed my first web programming class. However, I took this as a challenge. With my love for coding fueling me, I ultimately conquered website development. In the undergraduate neurotechnology club, I led the development team, the design cycles, and helped launch what is now <a href='https://synaptechuw.org/' target='_blank' rel='noreferrer'>www.synaptechuw.org</a>. I also led the development portion of my senior capstone project, an open-source app that connects BIPOC Seattle individuals with their local gardening communities and culture, for which my team received an academic award. I have since then worked on a number of websites and app projects which are highlighted in my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/portfolio'>portfolio</a>.</p>
    //           <p>I am seeking a full-time opportunity to apply and grow my skillset working with applications, where I can work hands-on with cutting edge technologies and brilliant engineers. I am curious to learn about technology from an enterprise level, and have goals to contribute to solutions that will make a long-lasting positive impact. I thrive working in collaborative environments where I can make meaningful connections and have stimulating exchange of ideas.</p>
    //           <p>With that, welcome to my website, and if you would like to connect over any opportunities or shared interests, I would be eager to meet!</p>
    //         </div>
    //         <p className='icon-credit'>all icons on this website are from <a href='https://fontawesome.com/' target='_blank' rel='noreferrer'>FontAwesome</a></p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className='row'>
    //     <div className='col-12'>
    //       <div className='pink-bar'></div>
    //       <div className='lightgray-bar'></div>
    //       <div className='lightgray-bar'></div>
    //       <div className='pink-bar'></div>
    //       <div className='lightgray-bar'></div>
    //       <div className='lightgray-bar'></div>
    //       <div className='pink-bar'></div>
    //       <div className='pink-bar'></div>

    //       <div className='lightgray-bar'></div>
    //       <div className='pink-bar'></div>
    //       <div className='lightgray-bar'></div>
    //       <div className='lightgray-bar'></div>
    //     </div>
    //   </div>
    //   <footer>
    //     <div className='row'>
    //       <div className='col-12'>
    //         <div className='d-flex justify-content-center pt-4 footerPar'>
    //           <p className='mx-5 pr-5 pink-text'>Let's connect!</p>
    //           <a className='mx-5' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/efra-ahsan-4b49a0228/">
    //             <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
    //           </a>
    //           <a href="mailto:efra.ahsan23@gmail.com?body=Efra says, hello. You may delete this message now.">
    //             <p className='mx-5 email-text'>efra.ahsan23@gmail.com</p>
    //           </a>
    //           <a href="tel:+13609499164">
    //             <p className='mx-5 phone-text'>+1 (360) 949-9164</p>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};
