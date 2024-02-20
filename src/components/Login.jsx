import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = e => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/login', loginData);
        console.log(response.data); // handle successful login response
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  };
  
export default Login;