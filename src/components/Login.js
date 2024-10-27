import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      }); // Update with your API endpoint
      setMessage('Login successful!');
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
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-75">Login</button>
      </form>
      <br />
      <div className='register'>
        <p>Don't have an account? Register here</p>
        <button type="submit" className="btn btn-primary w-50">Register</button>
      </div>
    </div>
  );
};

export default Login;
