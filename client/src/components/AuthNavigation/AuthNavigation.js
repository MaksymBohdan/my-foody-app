// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

import type { AuthNavigationP } from '../../types/components';

const AuthNavigation = ({ authItems = [] }: { authItems: AuthNavigationP }) => (
  <ul>
    {authItems.map(item => (
      <li key={item.name}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    ))}
  </ul>
);

export default AuthNavigation;
