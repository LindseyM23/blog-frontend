// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import AllBlogs from './components/AllBlogs';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-blogs" element={<AllBlogs />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog/:id" component={BlogDetail} />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

