import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { routes } from '../helpers/routes';

const Menu = () => {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.private && !auth.user) return null;
          if (route.path === '/login' && auth.user) return null;
          return (
            <li key={route.id}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.path}
                end
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
