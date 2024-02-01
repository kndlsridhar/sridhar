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

function App() {
  return (
<>
<header>
<nav class="navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
  <div class="container">
    <div className='d-flex justify-content-between w-100'>
    <Link class="navbar-brand"><img src={logo} alt='logo'/> Sridhar | <span class="designation">UI Developer</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page"activeStyle   to="/">Home</Link>
        <Link class="nav-link" activeStyle  to="profile">Profile</Link>
        <Link class="nav-link" activeStyle  to="works">Works</Link>
        <Link class="nav-link" activeStyle  to="contact">Contact</Link>
        <Link class="nav-link" activeStyle to="signin"> <FontAwesomeIcon icon='fa fa-lock'/> Sign In </Link>
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