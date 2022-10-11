import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import blogdata from '../helpers/blogdata';

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();
  const blogpost = blogdata.find((post) => post.slug === slug);
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;
  const returnToBlog = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>{blogpost.title}</h2>
      <button onClick={returnToBlog}>Back to blog</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      {canDelete && <button>Eliminar blogpost</button>}
    </>
  );
};

export default BlogPost;
