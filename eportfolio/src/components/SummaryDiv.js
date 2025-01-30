import { React } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import img from '../imgs/GM.Instagram.HackConsc.jpeg';

export default function SummaryDiv(props) {
  return(
    <div className='resume-backback rc pb-5 pt-0' style={{fontSize: '1.53rem', width: '100%', color: 'white', backgroundColor: 'black', borderRadius: '2%', marginTop: '-5.2%', height: '74.5vh', boxShadow: '0 4px 2px -2px darkgray'}}>

      <div className='staticTop'>
        <h1 style={{fontSize: '24px', textShadow: '1px 1px white'}} className='p-2'>Volunteering, Achievements & Publications</h1>
      </div>

      <div className='resume-back rc pb-2 pt-3 mt-1' style={{overflowY: 'scroll'}}>
        <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic'}}>Volunteering & Achievements</h1>
        <div style={{borderLeft: '1.3px solid white', paddingLeft: '9px', marginTop: '3%', marginLeft: '2%'}}>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>Polling and Open Data Initiative @ UW</em> - Data Analyst Initiate</p>
            <p style={{marginTop: '-1.5%', fontSize: '1.4rem', color: 'lightgray'}}>Dec 2022</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}>Drafting of an exploratory data analysis of crisis contact trends observed about Seattle's UDistrict to broaden understanding of police data for a public safety project.</p>
        </div>
        <div style={{borderLeft: '1.3px solid white', paddingLeft: '9px', marginLeft: '2%', backgroundColor: 'rgba(255, 255, 255, 0.05)', paddingBottom: '1%', marginBottom: '1%'}}>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>Neuroscience Undergraduate Reading Program</em> - Educational Presenter</p>
            <p style={{marginTop: '-1.5%', fontSize: '1.4rem', color: 'lightgray'}}>Sept 2022 - Dec 2022</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}>Presented a fun overview of literature surveying the human-computer interaction with voice-user interface.</p>
        </div>
        <div style={{borderLeft: '1.3px solid white', paddingLeft: '9px', marginLeft: '2%'}}>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>The Citizens Foundation-USA UW Chapter</em> - Events Coordinator</p>
            <p style={{marginTop: '-1.5%', fontSize: '1.4rem', color: 'lightgray'}}>March 2022 - Dec 2022</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}>Spearheaded fundraising campaigns from ideation to execution raising $13K for underprivileged children education in Pakistan.</p>
        </div>
        <div style={{borderLeft: '1.3px solid white', paddingLeft: '9px', marginLeft: '2%', backgroundColor: 'rgba(255, 255, 255, 0.05)', paddingBottom: '1%', marginBottom: '1%'}}>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>Pakistani Students Association</em> - Social Media & Design Coordinator</p>
            <p style={{marginTop: '-1.5%', fontSize: '1.4rem', color: 'lightgray'}}>Sept 2021 - June 2022</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}>Design and posting of Instagram infographics, overall social media management, and maintainence of positive relations with affiliated on-campus organizations and sponsorships.</p>
        </div>
        <div style={{borderLeft: '1.3px solid white', paddingLeft: '9px', marginLeft: '2%', backgroundColor: 'rgba(255, 255, 255, 0.05)', paddingBottom: '1%', marginBottom: '1%'}}>
          <p className='pt-4'><em style={{fontWeight: '900', textShadow: '1px 1px 1px black', fontSize: '1.5rem', fontStyle: 'normal'}}>Synaptech @ UW</em> - Programming, Design Lead, Website Team Lead</p>
            <p style={{marginTop: '-1.5%', fontSize: '1.4rem', color: 'lightgray'}}>Sept 2021 - June 2023</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}><em style={{marginTop: '-1.5%', fontSize: '1rem', color: 'lightgray'}}>Sept 2022 - June 2023<a className='p-2'></a></em>Website Project: Development of React.JS siteware and brandbook to commercialize student on-campus Software & Hardware club.</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}><em style={{marginTop: '-1.5%', fontSize: '1rem', color: 'lightgray'}}>Mar 2022 - Sept 2022<a className='p-2'></a></em>Website Project: High-fidelity prototyping to create feasible, accessible, and cohesive definition of organization brand.</p>
            <p style={{fontSize: '1.4rem', marginTop: '-1%'}}><em style={{marginTop: '-1.5%', fontSize: '1rem', color: 'lightgray'}}>Sept 2021 - Feb 2022<a className='p-2'></a></em>SmartMusic Project: A classification model to interpret user enjoyment of a music segment, given continuous user brainwave data collected via EEG headband.</p>
        </div>
      </div>

      <div className='resume-back rc pb-2 pt-3' style={{overflowY: 'scroll'}}>
        <h1 style={{color:'white', textShadow: '1px 1px 1px black', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic'}}>Publications</h1>

        <div className='resume-back rc pb-2 pt-5' style={{overflowY: 'scroll', backgroundColor: 'rgba(14, 5, 5, 0.883)'}}>
          <a href='https://greymattersjournal.org/hacking-consciousness-mindfulness-meditation-ego-death-and-enlightenment-engineering/' rel="noreferrer" target='_blank'><div className='card'>
            <div className='d-flex'>
              <img className="card-img-top" src={img} style={{width: '213px'}} alt="Illustration from article: Free From Ego" />
              <div className='card-body'>
                <h1 className='card-title pb-2' style={{color: 'black', fontSize: '2rem'}}>Hacking Consciousness: Mindfulness Meditation, Ego Death, and Enlightenment Engineering</h1>
                <p className='card-text' style={{color: 'gray'}}>Grey Matters Undergraduate Neuroscience Journal, Issue 25</p>
                <p className='card-text' style={{color: 'gray'}}>15 OCT 2023</p>
                <a className='pubHyperLink' rel="noreferrer" target="_blank" href="https://www.linkedin.com/posts/efra-ahsan-4b49a0228_hacking-consciousness-mindfulness-meditation-activity-7138436623712600064-NQeI?utm_source=share&utm_medium=member_desktop"><FontAwesomeIcon icon={faLinkedin} style={{color: '#4c76bd', height: "2.6rem"}}/></a>

              </div>
            </div>
          </div></a>
        </div>
      </div>

    </div>
  );
}