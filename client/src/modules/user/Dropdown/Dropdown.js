// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../configs/user-nav';

import s from '../../header/AppHeader.module.css';

const Dropdown = ({ signOut }) => {
  return (
    <div className={s.Dropdown}>
      <ul>
        {userNavItems.map(item => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={signOut}>
        LOG OUT
      </button>
    </div>
  );
};

export default Dropdown;
