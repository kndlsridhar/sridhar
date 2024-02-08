import React,{ useEffect, useState,Link } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom"
import Layout from "./Layout";
  
function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
 
    useEffect(()=>{
        if(localStorage.getItem('token') === "" || localStorage.getItem('token') == null){
            navigate("/signin");
        }else {
            getUser()
        }
    },[])
 
    const getUser = () => {
        axios.get('/api/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
           setUser(r.data)
        })
        .catch((e) => {
            console.log(e)
        });
    }
 
    const logoutAction = () => {
        axios.post('/api/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
            localStorage.setItem('token', "")
           navigate("/signin");
        })
        .catch((e) => {
            console.log(e)
        });
    }
     
    return (
        <Layout>
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                        <Link className="navbar-brand" href="#">Dashboard</Link>
                            <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link onClick={()=>logoutAction()} className="nav-link " aria-current="page" href="#">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <h2 className="text-center mt-5">Welcome, {user.name}!</h2  >
                </div>
            </div>
        </Layout>
    );
}
   
export default Dashboard;