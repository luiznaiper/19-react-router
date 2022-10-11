import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import adminList from '../helpers/admins';

const AuthContext = React.createContext();

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
    console.log(isAdmin);
    setUser({ username, isAdmin });
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = { user, login, logout };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
