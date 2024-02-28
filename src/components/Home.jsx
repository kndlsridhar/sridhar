import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleSlider from './SimpleSlider';

import sridhar from '../assets/img/sridhar-khandavalli.jpg';
function Home() {

    const syncPointer = ({ x, y }) => {
        document.documentElement.style.setProperty('--x', x.toFixed(2))
        document.documentElement.style.setProperty(
          '--xp',
          (x / window.innerWidth).toFixed(2)
        )
        document.documentElement.style.setProperty('--y', y.toFixed(2))
        document.documentElement.style.setProperty(
          '--yp',
          (y / window.innerHeight).toFixed(2)
        )
      }
      document.body.addEventListener('pointermove', syncPointer)

  return (
    <>
    <section className='home'>
        <h4 className='fw-light text-light my-5'>Designing websites with speed + various style direction for non-profits, small businesses, edutech, and startups since 2013. At night, I'm building <button className='btn btn-outline-light'>My Own Portfolio !</button></h4>


        <div className='container-fluid px-0'>
            <div className='row'>
                <div className='col-lg-4 col-12 left'>
                    <div className='card' data-glow>
                        <div className='card-body'>
                        <div className="crosshair-wrap cc-top-left"><div className="crosshair-h"></div><div className="crosshair-v"></div></div>
                        <h5>Work</h5>

                        <SimpleSlider />

                        
                        <button className='btn btn-primary'>Read more</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-12 text-start right'>
                          <div className='row'>
                              <div className='col-lg-6 col-12 mb-3'>
                                  <div className='card' data-glow>
                                      <div className='card-body'>
                                      <div className="crosshair-wrap cc-top-left"><div className="crosshair-h"></div><div className="crosshair-v"></div></div>
                                        <h5>Notes</h5>
                                        <p>1. I am confident that I would be a valuable addition to not only your team but the whole company.</p>
                                        <p>2. I am confident that I would be a valuable addition to not only your team but the whole company.</p>

                                        <button className='btn btn-primary'>Read more</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='col-lg-6 col-12 mb-3'>
                                  <div className='card' data-glow>
                                      <div className='card-body'>
                                      <div className="crosshair-wrap cc-top-left"><div className="crosshair-h"></div><div className="crosshair-v"></div></div>
                                          <h5>About Me</h5>
                                          <p>Hi there! I'm Sridhar, a passionate frontend developer dedicated to crafting seamless and visually stunning web experiences.</p>
                                          
                                          <div className='d-flex profile'>
                                            <img src={sridhar} className='img-fluid' alt='sridhar-khandavalli'/>
                                            <button className='btn btn-primary'>Read more</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className='col-lg-12 col-12'>
                                  <div className='card' data-glow>
                                      <div className='card-body d-flex justify-content-between'>
                                      <div className="crosshair-wrap cc-top-left"><div className="crosshair-h"></div><div className="crosshair-v"></div></div>
                                        <div className=''>
                                        <h5>Technical</h5>
                                        <p>What I've collected</p>
                                        </div>

                                        <ul className='collection list-unstyle d-flex'>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-html5" /><span>HTML5</span></li>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-css3-alt" /><span>CSS3</span></li>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-bootstrap" /><span>Bootstrap</span></li>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-angular" /><span>Angular</span></li>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-react" /><span>React</span></li>
                                            <li><FontAwesomeIcon className="icon" icon="fa-brands fa-figma" /><span>Figma</span></li>
                                        </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                <div className='col-lg-12 col-12 bottom'>
                    <div className='card' data-glow>
                        <div className='card-body'>
                        <div className="crosshair-wrap cc-top-left"><div className="crosshair-h"></div><div className="crosshair-v"></div></div>
                        <h5>My Experiences</h5>

                        <div className='row experience'>
                                      <div className='col-lg-4 col-12'>
                                          <div className='card'>
                                              <div className='card-body'>
                                                  <h3>Code Tree</h3>
                                                  <p>UI/UX Developer</p>

                                                  <div className='experience-card align-items-center'>
                                                      <h1 className='mb-0'>5.5</h1>
                                                      <p>years<br/>(present)</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>

                                      
                                      <div className='col-lg-4 col-12'>
                                          <div className='card'>
                                              <div className='card-body'>
                                                  <h3>Creators Touch</h3>
                                                  <p>Web Designer</p>

                                                  <div className='experience-card'>
                                                      <h1 className='mb-0'>5.3</h1>
                                                      <p>years</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Home