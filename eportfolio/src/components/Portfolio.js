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



export default function Portfolio(props) {
  return (
    <div>
      <div style={{backgroundColor: 'lightgray', marginTop: '4.15%', height: '0.2rem', marginLeft: '-19%', boxShadow: '0px 1px 8px white'}}></div>
      <div style={{position: 'absolute', borderRight: '420px solid black', height: '714px', width: '80%', backgroundColor: 'pink', borderLeft: '420px solid #11041e', opacity: '0.23'}}></div>

      <div style={{position: 'static', width: '990px', marginTop: '2%', marginLeft: '6.4%', boxShadow: '28px 23px 22px rgba(255, 192, 203, 0.2085)'}}>
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
                <em>GardenSpace</em> Open-Source Data & Website&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/efra-tech/icapstone"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
                </h5>
              <p className='pb-4 p'>Published in 2023</p>
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
              <h5><em>Synaptech @ UW</em> Website & Brandbook&nbsp;&nbsp;&nbsp;
                <a rel="noreferrer" target="_blank" href="https://github.com/synaptech-uw/uwsynaptech-website"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>Published in 2022</p>
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
              <h5><em>atlas.</em> Website</h5>
              <p className='pb-4 p'>Service in 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://family-app-7c595.web.app/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel4}
                alt="Fourth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>OurFamily</em> Website Prototype &nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info340b-wi23/project-efra-tech"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a>
              </h5>
              <p className='pb-4 p'>Published in 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://j9ivbt-lily-shen.shinyapps.io/final-project-safjam/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel9}
                alt="Fifth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Electric Vehicles in WA</em> Interactive Data Analysis & Website&nbsp;&nbsp;&nbsp;
              <a rel="noreferrer" target="_blank" href="https://github.com/info-201a-sp22/final-project-safjam?tab=readme-ov-file"><FontAwesomeIcon icon={faGithubSquare} style={{color: "white", height: "21.8px"}}/></a></h5>
              <p className='pb-4 p'>Published in 2022</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{height: '650px'}}>
              <a href='https://youfeed.io/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel1}
                alt="Sixth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>YouFeed</em> Website & Mobile Design</h5>
              <p className='pb-4 p'>Service in 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://veeve.io/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel6}
                alt="Seventh slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5 style={{marginBottom: '0px'}}>UX Interface Design for <em>Veeve Inc.</em></h5>
              <p style={{marginBottom: '0px'}} className='pb-4 p'>Service in 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.instagram.com/mexi_khaana/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel5}
                alt="Eighth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>MexiKhaana</em> Food Cart Graphic Design</h5>
              <p className='pb-4 p'>Service in 2023</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://docs.google.com/presentation/d/1E36n9jn_-QYEovrSV2GTvDzJF1sB1dRnxEPbqeOCc68/edit#slide=id.g10c7f33c797_94_0' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carouselX}
                alt="Ninth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5><em>Habitat</em> Prototype Design</h5>
              <p className='pb-4 p'>UW Women in Informatics Annual Hackathon 2022</p>
              <p style={{fontSize: '0.3rem'}}> &nbsp;</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{maxHeight: '650px'}}>
            <div style={{height: '650px'}}>
              <a href='https://www.dirtmastersinc.com/' target='_blank' rel='noreferrer'><img style={{borderRadius: '2.6rem', borderBottomLeftRadius: '0', border: '2px solid white'}}
                className="d-block w-100"
                src={carousel8}
                alt="Tenth slide"
              /></a>
            </div>
            <Carousel.Caption>
              <h5>IT & Business Consulting for <em>Dirt Masters, Inc.</em> </h5>
              <p className='pb-4 p'>Service in 2023</p>
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
