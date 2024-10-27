import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CreateBlog.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/blogs', {
        title,
        content,
      }); // Update with your API endpoint
      setMessage('Blog created successfully!');
      setTitle('');
      setContent('');
    } catch (err) {
      setMessage('Error creating blog');
    }
  };

  return (
    <div className="create-blog container my-5">
      <h2 className="text-center">Create a New Blog</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;


