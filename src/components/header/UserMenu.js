import React from 'react';
import s from './UserMenu.module.css';
import portrait from '../../img/portrait.jpg';

const UserMenu = () => {
  return (
    <div className={s.menu}>
      <img className={s.portrait} src={portrait} alt="portrait" />
      <p>Name</p>
    </div>
  );
};

export default UserMenu;
