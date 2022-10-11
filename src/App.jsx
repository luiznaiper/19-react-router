import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { AuthProvider } from './helpers/auth';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not Found </p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
