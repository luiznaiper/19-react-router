import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import blogdata from '../helpers/blogdata';

const BlogPage = () => {
  return (
    <>
      <h1>Blog</h1>
      <Outlet />
      <ul>
        {blogdata.map((post) => (
          <BlogLink post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
};

function BlogLink({ post }) {
  return (
    <li key={post.slug}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

export default BlogPage;
