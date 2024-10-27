import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AllBlogs.css';

const AllBlogs = () => {
  // Sample blog data
  const blogs = [
    {
      id: '1',
      title: 'First Blog Post',
      shortDescription: 'This is a brief description of the first blog post.',
    },
    {
      id: '2',
      title: 'Second Blog Post',
      shortDescription: 'This is a brief description of the second blog post.',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="all-blogs container my-5">
      <h2 className="text-center">All Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.shortDescription}</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
