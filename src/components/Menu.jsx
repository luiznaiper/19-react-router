import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../helpers/routes';

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
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
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
