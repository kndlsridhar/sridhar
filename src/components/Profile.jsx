import React from 'react';

import sridhar from '../assets/img/sridhar-khandavalli.jpg';
function Profile() {
  return (
    <section>
        <div className='container-fluid px-0'>
            <div className='row'>
                <div className='col-lg-4 col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Sr UI Developer + UX</h5>
                            <div className='d-flex profile'>
                                            <img src={sridhar} className='img-fluid' alt='sridhar-khandavalli'/>
                                          </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-8 col-12'>
                    <div className='card'>
                        <div className='card-body'>

                              <h2>UI Developer</h2>
                              <p>Hi there! I'm Sridhar, a passionate frontend developer dedicated to crafting seamless and visually stunning web experiences.</p>

                              <h2>Experience</h2>
                              <p>With over 10.8 years of experience in frontend development, I've had the privilege of contributing my skills to Code Tree and Creators Touch, where I honed my abilities in creating modern and responsive user interfaces.</p>

                              <h2>Skills</h2>
                              <p>My technical toolkit includes expertise in:</p>
                              <ul>
                                  <li>HTML5, CSS3, JavaScript, Bootstrap</li>
                                  <li>React.js, Angular</li>
                                  <li>Responsive Design, Cross-Browser Compatibility</li>
                                  <li>Version Control (Git), Build Tools (Webpack)</li></ul>
                              <h2>Projects</h2>
                              <p>I've had the privilege of working on exciting projects like:</p>

                              <ul>
                                  <li>[Project 1 Name]: Describe your role and the impact of the project.</li>
                                  <li>[Project 2 Name]: Briefly mention the technologies used and your contributions.</li>
                              </ul>
                              <h2>Passion and Approach</h2>
                              <p>I'm deeply passionate about creating web interfaces that not only look great but also provide a seamless and enjoyable user experience. I stay current with the latest design trends and technologies, ensuring that my work is always at the forefront of the industry.</p>

                              <h2>Contact Information</h2>
                              <p>If you're interested in collaborating or have any questions, feel free to reach out. Connect with me on LinkedIn or explore my GitHub for a closer look at my projects.</p>


                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Profile