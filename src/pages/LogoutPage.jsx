import React from 'react';
import { useAuth } from '../hooks/auth.jsx';

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Are u sure u will log out?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default LogoutPage;
