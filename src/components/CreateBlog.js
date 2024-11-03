import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CreateBlog.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Change to null to store the file object
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('title', title);
    formData.append('author', author);
    formData.append('date', date);
    formData.append('shortDescription', shortDescription);
    formData.append('content', content);
    if (image) {
      formData.append('image', image); // Append the image file
    }
    formData.append('comments', JSON.stringify([])); // Initialize comments as an empty array

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      setMessage('Blog created successfully!');
      // Clear the form fields
      setTitle('');
      setAuthor('');
      setDate('');
      setShortDescription('');
      setContent('');
      setImage(null); // Reset image
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
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Short Description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          ></textarea>
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
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            accept="image/*" // Allow only image files
            onChange={(e) => setImage(e.target.files[0])} // Get the first selected file
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
