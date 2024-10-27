import React from 'react';
import '../styles/Register.css';

const Register = () => {
  return (
    <div className="register container my-5">
      <h2 className="text-center">Register</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;

