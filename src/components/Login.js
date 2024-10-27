import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login container my-5">
      <h2 className="text-center">Login</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-75">Login</button>
      </form>
      <br></br>
      <div className='register'>
        <p>Don't have an acccount? Register here</p>
        <button type="submit" className="btn btn-primary w-50 ">Register</button>
      </div>
    </div>
  );
};

export default Login;
