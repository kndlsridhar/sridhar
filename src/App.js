import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

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
    <Link class="navbar-brand">Sridhar | Frontend Developer</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page"  to="/">Home</Link>
        <Link class="nav-link"  to="profile">Profile</Link>
        <Link class="nav-link"  to="contact">Contact</Link>
        <Link class="nav-link disabled" aria-disabled="true">Disabled</Link>
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
        <div className='col-lg-4 col-12 text-start'>© 2024</div>
        <div className='col-lg-4 col-12 text-center'>
          <ul className='list-unstyled'>
            <li className=''><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></li>
          </ul>
        </div>
        <div className='col-lg-4 col-12 text-end'>
          email
        </div>
      </div>
      </div>
    </footer>
    
    </>
  );
}

export default App;

library.add(fab, fas, far)