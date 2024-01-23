import React from 'react'
function Contact() {
  return (
    <section>
        <div className='parent'>
            <div className='child'>1</div>
            <div className='child'>2</div>
            <div className='child'>3</div>
            <div className='child'>4</div>
        </div>
        <div className='container-fluid px-0'>
            <div className='row'>
                <div className='col-lg-4 col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Sr UI Developer + UX</h5>
                            <p>Hi there! I'm Sridhar, a passionate frontend developer dedicated to crafting seamless and visually stunning web experiences.</p>
                        </div>
                    </div>
                </div>
                
                <div className='col-lg-8 col-12'>
                    <div className='card'>
                        <div className='card-body'>
                        <h2>Contact</h2>
                        
                        <div className='row'>
                            <div className='col-lg-12 col-12'>
                                      <form>
                                          <div class="form-floating mb-3">
                                              <input type="password" class="form-control" id="floatingName" placeholder="Name" />
                                              <label for="floatingName">Name</label>
                                          </div>
                                          <div class="form-floating mb-3">
                                              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                              <label for="floatingInput">Email</label>
                                          </div>
                                          <div class="form-floating mb-3">
                                              <input type="password" class="form-control" id="floatingMobile" placeholder="Mobile" />
                                              <label for="floatingMobile">Mobile</label>
                                          </div>
                                          <div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a message here" id="floatingTextarea2"></textarea>
  <label for="floatingTextarea2">Message</label>
</div>

<button className='btn btn-primary'>Submit</button>
                                      </form>
                            </div>
                        </div>
                        <p>Fill out the form below or shoot me an email at </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact