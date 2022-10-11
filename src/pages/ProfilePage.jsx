import React from 'react';
import { useAuth } from '../hooks/auth';

const ProfilePage = () => {
  const auth = useAuth();
  return (
    <>
      <h1>Profile Page</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
  );
};

export default ProfilePage;
