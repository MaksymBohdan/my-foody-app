// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../configs/user-nav';

import s from '../../header/AppHeader.module.css';

const Dropdown = () => {
  return (
    <div className={s.Dropdown}>
      <ul>
        {userNavItems.map(item => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
