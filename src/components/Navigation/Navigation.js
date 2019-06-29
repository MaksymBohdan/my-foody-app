import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = ({ navItems = [] }) => {
  return (
    <ul>
      {navItems.map(item => (
        <li key={item.name}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
