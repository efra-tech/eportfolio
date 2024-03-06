import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Efra from '../imgs/professionalHeadshot.jpg';

export default function Bio(props) {
  return (
    <div className='a' style={{position: 'absolute', width:'100vw', left: '0'}}>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>

      <div className='resume-backback p-2' style={{color:'white', marginTop: '-1.9%', height: '87.9%', width: '38%', borderBottom: '7px solid rgb(150, 135, 138)', borderTop: 'none', borderRight: '7px solid rgb(150, 135, 138)', backgroundColor: '#11041e', marginRight: '19.0%', opacity: '1.5'}}>
        <img src={Efra} alt='my self portrait' style={{width: '45%', marginTop: '2.4%', borderRadius: '2em'}} />
        <h2>Hey, I'm Efra Ahsan.</h2>
        <div className='mx-4'>
          <h5>
            I like developing apps and ideas.
          </h5>
          <div className='biobox pt-3' style={{textAlign: 'left'}}>
            <p>In a rush? Go on straight to my <a className='bio-p1-a' style={{color: 'white', fontWeight: '900'}} href='/portfolio'>portflio</a>.</p>
            <p>I am a 21-year-old graduate from the Informatics program at University of Washington. I pursued many curiosities throughout my academic career, having started as a pre-medical student, to being intrigued in data science courses, to then finding commitment and ambition in web development.</p>
            <p>I actually nearly failed my first web programming course in 2022, which came to me as a big surprise given I loved coding. This sparked my strive for building skillset in my most challenging subject as an Informatics student: website development.</p>
            <p>As of today, I have become well proficient in designing and implementing small-scale websites, and I intend to continue developing in this field. Within 2023, I achieved a University of Washington academic award for an open-source web application project, and subsequently also, began working as a freelance web developer and designer.</p>
            <p>I am passionate about the intersection of technology, people, and innovation within the tech world. My goal is to contribute to the development of cutting-edge solutions that make a long lasting positive impact. I thrive working in collaborative environments where I can make meaningful connections and have a effective exchange of ideas. I am currently seeking full-time opportunities to apply my skills and gain hands-on experience on large scale projects.</p>

            <p>With that, welcome to my website, and if you would like to connect over any opportunities or shared interests, I would be so happy to meet!</p>
          </div>
          <p style={{fontSize: '0.9rem', color: 'lightgray', paddingTop: '3%'}}>all icons on this website are from <a href='https://fontawesome.com/' target='_blank' rel='noreferrer' style={{fontWeight: '800', color: 'lightgray'}}>FontAwesome</a></p>
        </div>


      </div>


      <div style={{backgroundColor: 'pink', marginTop: '13%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '0.9%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>

      <div style={{backgroundColor: 'lightgray', marginTop: '13%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'pink', marginTop: '2.9%', height: '0.3rem', marginLeft: '21.5%', boxShadow: '0px 1px 6px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', boxShadow: '0px 1px 6px lightgray'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '1%', height: '0.2rem', marginLeft: '10%', marginBottom: '4.8%', boxShadow: '0px 1px 6px lightgray'}}></div>

      <footer style={{marginBottom: '-1%', backgroundColor: 'black', opacity: '0.76', paddingTop: '4px', paddingBottom: '4px', borderRight: '17.72px solid rgb(7, 7, 7)'}}>
          <div className='d-flex justify-content-center pt-4 footerPar'>
            <p className='mx-5 pr-5' style={{paddingLeft: '15.7%', color: 'pink', fontWeight: '800', textShadow: '0px 0.2px 0.6px pink'}}>Let's connect!</p>
            <a className='mx-5' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/efra-ahsan-4b49a0228/"><FontAwesomeIcon icon={faLinkedin} style={{color: '#4c76bd', height: "21.8px"}}/></a>
            <a href="mailto:efra.ahsan23@gmail.com?body=Efra says, hello. You may delete this message now."><p className='mx-5' style={{color: '#4c76bd'}}>efra.ahsan23@gmail.com</p></a>
            <a href="tel:+13609499164"><p className='mx-5' style={{color: '#4c76bd'}}>+1 (360) 949-9164</p></a>
          </div>
      </footer>

    </div>
  );
}

