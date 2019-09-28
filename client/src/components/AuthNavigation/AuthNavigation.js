import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = ({ authItems = [] }) => (
  <ul>
    {authItems.map(item => (
      <li key={item.name}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    ))}
  </ul>
);

export default AuthNavigation;
