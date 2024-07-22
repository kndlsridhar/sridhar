//import axios from "axios";
import React,{ useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const notify = () => toast("Invalid username or password");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      // Hardcoded JSON for user credentials
      const users = [
          { username: 'user1', password: 'password1' },
          { username: 'user2', password: 'password2' }
      ];

      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
          alert('Login successful!');
          // Perform further actions like redirecting to another page
      } else {
          setError('');
          notify();
          

      }
  };
    return (
      
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-body">
              <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  };
  
export default Login;