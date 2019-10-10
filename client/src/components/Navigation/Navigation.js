// @flow
import React from 'react';

import { NavLink } from 'react-router-dom';

import type { PropsNavItems } from '../../types/components';

const Navigation = ({ navItems = [] }: PropsNavItems) => (
  <ul>
    {navItems.map(item => (
      <li key={item.name}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    ))}
  </ul>
);

export default Navigation;
