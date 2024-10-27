// src/services/api.js
const API_URL = 'http://localhost:5000/api'; // Update based on your backend URL

// Fetch all blog posts
export const fetchBlogs = async () => {
  const response = await fetch(`${API_URL}/blogs`);
  if (!response.ok) {
    throw new Error('Error fetching blogs');
  }
  return await response.json();
};

// Create a new blog post
export const createBlog = async (blogData) => {
  const response = await fetch(`${API_URL}/blogs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) {
    throw new Error('Error creating blog');
  }
  return await response.json();
};

// Fetch a single blog post by ID
export const fetchBlogById = async (id) => {
  const response = await fetch(`${API_URL}/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching blog');
  }
  return await response.json();
};

// Fetch comments for a specific blog post
export const fetchComments = async (blogId) => {
  const response = await fetch(`${API_URL}/blogs/${blogId}/comments`);
  if (!response.ok) {
    throw new Error('Error fetching comments');
  }
  return await response.json();
};

// Post a new comment
export const postComment = async (blogId, commentData) => {
  const response = await fetch(`${API_URL}/blogs/${blogId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  if (!response.ok) {
    throw new Error('Error posting comment');
  }
  return await response.json();
};
