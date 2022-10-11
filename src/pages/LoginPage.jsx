import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Write your username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Enter</button>
      </form>
    </>
  );
};

export default LoginPage;
