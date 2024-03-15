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
            <p>In a rush? Go on straight to my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/portfolio'>portflio</a>.</p>
            <p>I am a 21-year-old graduate from the Informatics program at University of Washington. I began my academic career on track to study pre-medicine, however came to find commitment and ambition in web development.</p>
            <p>After my first year at university, I knew that I had more passion for studying the intersection of technology, innovation, and people, than I did medicine. I joined multiple clubs on campus, where I learned to use a wide range of technologies, from graphic design tools all the way to a brain-computer interface. I became involved with the undergraduate neurotechnology club to learn about the use of technology on the brain, and apply python programming, however ultimately became inspired to write an article about the neuroscience of consciousness hacking, a topic I found super thrilling while I was a student. Find it here under my <a className='bio-p1-a' style={{fontWeight: '900'}} href='/resume'>publications</a>!</p>
            <p>As I continued my course load, I came to nearly fail my first web programming class. Given I loved coding, and with my interest shifting towards applications and interfaces, I aspired to tackle my most challenging subject as an Informatics student: website development.</p>
            <p>I essentially put my skills to the test. Within the same undergraduate neurotechnology club, I signed up to lead the development team to launch what is now, <a rel="noreferrer" href='https://synaptechuw.org/' target='_blank'>www.synaptechuw.org</a>. I also signed up to lead the development of my senior capstone project, upon which I recieved an academic award in 2023, and subsequently, found work on small-scale projects as a freelance web developer and designer. I have made success in application development thusfar, and I am eager to continue advancing into this field. </p>
            <p>I currently seek a full time opportunity to apply and exceed my skills on larger projects. I intend to continue learning IT professionally, with a goal to contribute to cutting-edge solutions that will make a long lasting positive impact. I thrive working in collaborative environments where I can make meaningful connections and have an effective exchange of ideas. </p>

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

