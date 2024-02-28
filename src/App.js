import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
import logo from './assets/img/logo.svg'
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import React, { useRef, useLayoutEffect } from 'react'
import Button from '@mui/material/Button';

function App() {

  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('mainHeader')
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add('sticky-top')
      } else {
        mainHeader.classList.remove('sticky-top')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
<>
<header className="mainHeader" id="mainHeader" ref={stickyHeader}>
<nav className="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
  <div className="container">
    <div className='d-flex justify-content-between w-100'>
    <Link className="navbar-brand"><img src={logo} alt='logo'/> Sridhar | <span className="designation">UI Developer</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page"   to="/">Home</Link>
        <Link className="nav-link"  to="profile">Profile</Link>
        <Link className="nav-link"  to="works">Works</Link>
        <Link className="nav-link"  to="contact">Contact</Link>
        <Link className="nav-link"  to="login"><Button variant="contained"> <FontAwesomeIcon icon='fa fa-lock'/> Login </Button></Link>
      </div>
    </div>
    </div>
  </div>
</nav>
</header>
<main>
    <div className="container">
          <Nav />
    </div>
</main>
    

    <footer>
    <div className="container">
      <div className='row'>
        <div className='col-lg-4 col-12 text-start'>© 2024 Copyrights Reserved.</div>
        <div className='col-lg-4 col-12 text-center'>
          <ul className='list-unstyled d-flex justify-content-center text-center'>
            <li className='mx-2'><FontAwesomeIcon icon="fa-brands fa-facebook" /></li>
            <li className='mx-2'><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></li>
            <li className='mx-2'><FontAwesomeIcon icon="fa-brands fa-github" /></li>
          </ul>
        </div>
        <div className='col-lg-4 col-12 text-end'>
          <code>[kndlsridhar@gmail.com]</code>
        </div>
      </div>
      </div>
    </footer>
    
    </>
  );
}

export default App;

library.add(fab, fas, far)