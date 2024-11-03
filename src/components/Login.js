import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password,
      }); // Update with your API endpoint

      if (response.data.auth) {
        setMessage('Login successful!');
        localStorage.setItem('token', response.data.token);  
        navigate('/all-blogs'); // Replace '/blog' with your blog route path
      }

      // Handle successful login (e.g., redirect or store token)
    } catch (err) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="login container my-5">
      <h2 className="text-center">Login</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            width={2}
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn  w-100">Login</button>
      </form>
      <br />
      <div className='register'>
        <p>Don't have an account? Register here</p>
        <Link to="/register"> <button type="submit" className="btn  w-100">Register</button></Link>
      </div>
    </div>
  );
};

export default Login;
