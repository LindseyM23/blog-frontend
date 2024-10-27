import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`); // Update with your API endpoint
        setBlog(response.data);
      } catch (err) {
        setError('Blog not found!');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="blog-detail container my-5">
      <h2 className="text-center">{blog.title}</h2>
      <h5 className="text-muted text-center">
        By {blog.author} | {blog.date}
      </h5>
      <img src={blog.image} alt={blog.title} className="img-fluid my-4" />
      <p className="lead">{blog.shortDescription}</p>
      <div className="content">
        <h4>Blog Content</h4>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
