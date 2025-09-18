import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import carousel1 from '../imgs/youFeed.png';
import carousel2 from '../imgs/GardenSpace.png';
import carousel3 from '../imgs/atlas.png';
import carousel4 from '../imgs/OurFamily2.png';
import carousel5 from '../imgs/Mexikhaanaa.png';
import carousel6 from '../imgs/Veeve2.png';
import carousel7 from '../imgs/syanptech.png';
import carousel8 from '../imgs/dirtmasters.png';
import carousel9 from '../imgs/shinyapp.png';
import carouselX from '../imgs/winfo.png'
import carouselY from '../imgs/LLC.png';
import carouselA from '../imgs/nodejs.png';
import carouselN from '../imgs/precious-pixie.png';



export default function Portfolio(props) {
  return (
    <div style={{width: '60vw'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '4.15%', height: '0.2rem', marginLeft: '-19%', boxShadow: '0px 1px 8px white'}}></div>
      <div style={{position: 'absolute', borderRight: '420px solid black', height: '714px', width: '100%', backgroundColor: 'pink', borderLeft: '420px solid #11041e', opacity: '0.23', maxWidth: '70vw'}}></div>

      <div className='carousal-parent' style={{position: 'static', width: '990px', marginTop: '2%', marginLeft: '19.4%', boxShadow: '28px 79px 220px rgba(255, 192, 203, 0.2085)'}}>
        <Carousel style={{backgroundColor: 'black', border: '8px solid black', borderRadius: '3rem', borderTop: '13px solid black'}}>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://gardenspace-muse.web.app/home' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel2}
                alt="First slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5>
                <em>GardenSpace:</em>&nbsp;&nbsp;&nbsp;Open-Source Data and Website&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/efra-tech/icapstone"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
                </h5>
              <p className='pb-4 p'>University of Washington Information School Senior Capstone Award 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://synaptechuw.org/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel7}
                alt="Second slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Synaptech @ UW:</em>&nbsp;&nbsp;&nbsp;Open-Source Mobile Website&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/synaptech-uw/uwsynaptech-website"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>University of Washington TLD Organization</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://theatlasapp.co/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel3}
                alt="Third slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>atlas:</em>&nbsp;&nbsp;&nbsp; Landing Page & Dempsey Start-up Competition</h5>
              <p className='pb-4 p'>Top 37 University Finalist Team</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://youfeed.io/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel1}
                alt="Fourth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>YouFeed:</em>&nbsp;&nbsp;&nbsp;Landing Page & Mobiles</h5>
              <p className='pb-4 p'>Launch commerical platform</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://veeve.io/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel6}
                alt="Fifth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5 style={{marginBottom: '0px'}}><em>Veeve, Inc:</em>&nbsp;&nbsp;&nbsp;Smart Design for AI-Powered Grocery</h5>
              <p className='pb-4 p'>Design Commercial Interface </p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://precious-pixie-1d2d84.netlify.app/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselN}
                alt="Sixth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Interactive JavaScript:</em>&nbsp;&nbsp;&nbsp;Generate A Password&nbsp;&nbsp;&nbsp;
              </h5>
              <p className='pb-4 p'>Certification Course</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.instagram.com/eatmexikhana/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselY}
                alt="Seventh slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>MexiKhana LLC:</em>&nbsp;&nbsp;&nbsp; Landing Page & Graphic Design</h5>
              <p className='pb-4 p'>Construct Development & Design Project</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://docs.google.com/presentation/d/1E36n9jn_-QYEovrSV2GTvDzJF1sB1dRnxEPbqeOCc68/edit#slide=id.g10c7f33c797_94_0' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselX}
                alt="Eighth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Habitat:</em>&nbsp;&nbsp;&nbsp; Mobile App Prototype</h5>
              <p className='pb-4 p'>UW Women in Informatics 10th Annual Hackathon</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.dirtmastersinc.com/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel8}
                alt="Ninth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Dirt Masters, Inc:</em>&nbsp;&nbsp;&nbsp;IT & Business Consulting </h5>
              <p className='pb-4 p'>Non-Disclosed Mentorship Hewlett-Packard Enterprise</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://family-app-7c595.web.app/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel4}
                alt="Tenth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>OurFamily:</em>&nbsp;&nbsp;&nbsp; Cloud Archive Application &nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info340b-wi23/project-efra-tech"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>Course Server-Side Development Project</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://j9ivbt-lily-shen.shinyapps.io/final-project-safjam/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel9}
                alt="Eleventh slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Electric Vehicles in WA:</em>&nbsp;&nbsp;&nbsp;Interactive Data Analysis&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info-201a-sp22/final-project-safjam?tab=readme-ov-file"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Course R Project</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://github.com/Info-443-Spring-2023/project-2-NodeJS.git' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselA}
                alt="Twelveth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>NodeJS:</em>&nbsp;&nbsp;&nbsp;Open-Source Software Guide&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/Info-443-Spring-2023/project-2-NodeJS"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Course Software Architecture Project</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>

      <div style={{backgroundColor: 'lightgray', marginTop: '2.2%', height: '0.2rem', marginLeft: '-10%', boxShadow: '0px 1px 8px white'}}></div>
      <div style={{backgroundColor: 'lightgray', marginTop: '2.2%', height: '0.2rem', marginLeft: '-20%', boxShadow: '0px 1px 8px white'}}></div>
    </div>
  );
}
