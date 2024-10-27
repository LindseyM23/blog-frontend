import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home container my-5 text-center">
      <h2>Welcome to My Blog!</h2>
      <p>Discover amazing content.</p>
      <a href="/login" className="btn btn-primary">Explore Blogs</a>
    </div>
  );
};

export default Home;
