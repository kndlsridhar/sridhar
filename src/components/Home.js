import React from 'react';
import disney from '../assets/img/disney-redesign.png'
function Home() {
  return (
    <>
    <section className='home'>
        <h4 className='fw-light text-light'>Designing websites with speed + various style direction for non-profits, small businesses, edutech, and startups since 2018. At night, I'm building <button className='btn btn-outline-light'><code>Hi !</code></button></h4>


        <div className='container-fluid px-0'>
            <div className='row'>
                <div className='col-lg-4 col-12 left'>
                    <div className='card'>
                        <div className='card-body'>
                        <h5>Work</h5>
                        <ul className='list-unstyled work-list'>
                            <li>
                            <h6>Disney + Hostar</h6>
                               <p>Designing websites with speed + various style direction for non-profits, small businesses, edutech, and startups since 2018.</p>
                                <img src={disney} className='img-fluid' alt=''/>
                            </li>
                        </ul>
                        <button className='btn btn-primary'>Read more</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-12 text-start right'>
                          <div className='row'>
                              <div className='col-lg-6 col-12 mb-3'>
                                  <div className='card'>
                                      <div className='card-body'>
                                        <h5>Notes</h5>
                                        <p>1. I am confident that I would be a valuable addition to not only your team but the whole company.</p>
                                        <p>2. I am confident that I would be a valuable addition to not only your team but the whole company.</p>

                                        <button className='btn btn-primary'>Read more</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='col-lg-6 col-12 mb-3'>
                                  <div className='card'>
                                      <div className='card-body'>
                                          <h5>About Me</h5>
                                          <p>My name is Sridhar Khandavalli, and I am writing this cover letter as a part of my application for the Senior UI/UX Designer job within BrainTrust. in US. I believe that my previous experience paired with well-developed field knowledge makes me an ideal fit for the position. Furthermore, I am confident that I would be a valuable addition to not only your team but the whole company.</p>
                                          <button className='btn btn-primary'>Read more</button>
                                      </div>
                                  </div>
                              </div>
                              <div className='col-lg-12 col-12'>
                                  <div className='card'>
                                      <div className='card-body'>
                                        <h5>Collections</h5>
                                        <p>What I've collected</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                <div className='col-lg-12 col-12 bottom'>
                    <div className='card'>
                        <div className='card-body'>
                        <h5>My Experiences</h5>

                        <div className='row experience'>
                                      <div className='col-lg-4 col-12'>
                                          <div className='card'>
                                              <div className='card-body'>
                                                  <h3>Code Tree</h3>
                                                  <p>UI/UX Developer</p>

                                                  <div className='experience-card'>
                                                      <h1>5.3</h1>
                                                      <p>years</p>
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
                                                      <h1>5.3</h1>
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