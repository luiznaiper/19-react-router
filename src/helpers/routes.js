const routes = [
  {
    id: 1,
    path: '/',
    text: 'Home',
    private: false,
  },
  {
    id: 2,
    path: '/blog',
    text: 'Blog',
    private: false,
  },
  {
    id: 3,
    path: '/profile',
    text: 'Profile',
    private: true,
  },
  {
    id: 4,
    path: '/login',
    text: 'Login',
    private: false,
  },
  {
    id: 5,
    path: '/logout',
    text: 'Logout',
    private: true,
  },
];

export { routes };
