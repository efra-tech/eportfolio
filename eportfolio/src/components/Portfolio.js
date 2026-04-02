import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import carousel11 from '../imgs/AlbertsonsTest.png';
import carousel1 from '../imgs/youFeed.png';
import carousel2 from '../imgs/GardenSpace.png';
import carousel3 from '../imgs/atlas.png';
import carousel4 from '../imgs/OurFamily2.png';
import carousel5 from '../imgs/Mexikhaanaa.png';
import carousel6 from '../imgs/Veeve4.png';
import carousel7 from '../imgs/syanptech.png';
import carousel8 from '../imgs/dirtmasters.png';
import carousel9 from '../imgs/shinyapp.png';
import carouselX from '../imgs/winfo.png'
import carouselY from '../imgs/LLC.png';
import carouselA from '../imgs/nodejs.png';
import carouselN from '../imgs/precious-pixie.png';
import carouselAB from '../imgs/ixana.png';
import carouselBB from '../imgs/shades.png';
import carouselCB from '../imgs/RolandHair.png';
import carouselDB from '../imgs/langpal.png';




export default function Portfolio(props) {
  return (
    <div style={{width: '60vw'}}>
      <div style={{backgroundColor: 'lightgray', marginTop: '4.15%', height: '0.2rem', marginLeft: '-19%', boxShadow: '0px 1px 8px white'}}></div>
      <div style={{position: 'absolute', borderRight: '420px solid black', height: '714px', width: '100%', backgroundColor: 'pink', borderLeft: '420px solid #11041e', opacity: '0.23', maxWidth: '70vw'}}></div>

      <div className='carousal-parent' style={{position: 'static', width: '990px', marginTop: '2%', marginLeft: '19.4%', boxShadow: '28px 79px 220px rgba(255, 192, 203, 0.2085)'}}>
        <Carousel style={{backgroundColor: 'black', border: '8px solid black', borderRadius: '3rem', borderTop: '13px solid black'}}>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.supermarketnews.com/grocery-technology/albertsons-to-test-veeve-smart-shopping-cart' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel11}
                alt="First slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5>
                <em>"Albertsons</em>&nbsp;to test <em>Veeve</em>&nbsp;smart shopping cart"&nbsp;&nbsp;- Supermarket News&nbsp;&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/veeveai/"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a>
                </h5>
              <p className='pb-4 p'>Austin, Texas</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.ixana.ai/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselAB}
                alt="Fifth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5 style={{marginBottom: '0px'}}><em>10XAR:</em>&nbsp;&nbsp;&nbsp; Pioneer Technology - Physical AI Electronics Manufacturing&nbsp;&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/ixanahq/"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>Synaptech @ UW:</em>&nbsp;&nbsp;&nbsp;Global Open-Source Platform&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/synaptech-uw/uwsynaptech-website"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>atlas:</em>&nbsp;&nbsp;&nbsp; Landing Page & Early Start-Up&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/theatlasapp/posts/?feedView=all"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>YouFeed.IO:</em>&nbsp;&nbsp;&nbsp;Early Stage Mobile App - Custom Design & Development</h5>
              <p className='pb-4 p'>Austin, Texas</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.lang-pal.com/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselDB}
                alt="Sixth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>LangPal:</em>&nbsp;&nbsp;&nbsp;Landing Page & Mobile App Development&nbsp;&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/langpalapp/posts/?feedView=all"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a>

              </h5>
              <p className='pb-4 p'>Camas, Washington</p>
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
              <p className='pb-4 p'>Portland, Oregon</p>
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
              <h5 style={{marginBottom: '0px'}}><em>Veeve.IO:</em>&nbsp;&nbsp;&nbsp;Pioneer Shopping & Smart Cart Start-Up&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/veeveai/"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Austin, Texas</p>
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
              <h5><em>NodeJS Architectural Model:</em>&nbsp;&nbsp;&nbsp;Open-Source System Software Guide&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/Info-443-Spring-2023/project-2-NodeJS"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Seattle, Washington</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://apptopia.com/ios/app/1581205588/about' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselBB}
                alt="Fifth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5 style={{marginBottom: '0px'}}><em>Shades:</em>&nbsp;&nbsp;&nbsp;Landing Page Development for Life & News App&nbsp;&nbsp;&nbsp;<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/shades-news/"><FontAwesomeIcon icon={faLinkedin} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>Dirt Masters, Inc:</em>&nbsp;&nbsp;&nbsp;IT Consulting with Hewlett-Packard Enterprise & Buerk Center for Entrepreneurship</h5>
              <p className='pb-4 p'>Seattle, Washington</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
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
                <em>GardenSpace:</em>&nbsp;&nbsp;&nbsp;Open-Source Data and Software Capstone Project&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/efra-tech/icapstone"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
                </h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>OurFamily:</em>&nbsp;&nbsp;&nbsp; Cloud Service Full Stack Application & Digital Archive App&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info340b-wi23/project-efra-tech"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>Electric Vehicles in WA:</em>&nbsp;&nbsp;&nbsp;Interactive Data Analysis and Full Stack Website&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info-201a-sp22/final-project-safjam?tab=readme-ov-file"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
              <h5><em>Interactive JavaScript:</em>&nbsp;&nbsp;&nbsp;Generate A Password Website&nbsp;&nbsp;&nbsp;
              </h5>
              <p className='pb-4 p'>Camas, Washington</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.rolandyorkhair.com/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselCB}
                alt="Sixth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Roland York Hair:</em>&nbsp;&nbsp;&nbsp;Landing Page & Gallery Contract&nbsp;&nbsp;&nbsp;
              </h5>
              <p className='pb-4 p'>Seattle, Washington</p>
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
