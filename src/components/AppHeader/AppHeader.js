import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../../modules/user/UserMenu/UserMenu';

import navItems from '../../configs/main-nav';
import logo from '../../img/logo.png';
import avatar from '../../img/portrait.jpg';

import s from './AppHeader.module.css';

const HeadComponent = () => (
  <header className={s.Header}>
    <div className={s.Header__logo}>
      <Logo image={logo} width="100" height="100" />
    </div>
    <div>
      <Navigation navItems={navItems} />
    </div>
    <div className={s.Header__usermenu}>
      <UserMenu avatar={avatar} name="Vasia Pupkin" />
    </div>
  </header>
);

export default HeadComponent;
