import React,{ Link } from 'react'

  
function Dashboard() {

     
    return (
        
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <Link className="navbar-brand" href="#">Dashboard</Link>
                            <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" href="#">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <h2 className="text-center mt-5">Welcome, !</h2  >
                </div>
            </div>
            
    );
}
   
export default Dashboard;