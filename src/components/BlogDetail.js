import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetail.css';

// Sample blog data for demonstration
const blogs = [
  {
    id: '1',
    title: 'First Blog Post',
    author: 'John Doe',
    date: '2024-10-01',
    shortDescription: 'This is a brief description of the first blog post.',
    image: 'https://via.placeholder.com/600x300',
    content: 'This is the full content of the first blog post. It contains detailed information about the topic.',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    author: 'Jane Smith',
    date: '2024-10-10',
    shortDescription: 'This is a brief description of the second blog post.',
    image: 'https://via.placeholder.com/600x300',
    content: 'This is the full content of the second blog post. It contains detailed information about the topic.',
  },
  // Add more blog posts as needed
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

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
