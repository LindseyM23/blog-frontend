import React from 'react';
import '../styles/CreateBlog.css';

const CreateBlog = () => {
  return (
    <div className="create-blog container my-5">
      <h2 className="text-center">Create a New Blog</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Title" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Content" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;

