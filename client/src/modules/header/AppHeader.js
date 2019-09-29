// @flow
import React from 'react';

import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../user/UserMenu/UserMenu';
import Cart from '../cart/CartIcon/CartIconContainer';

import navItems from '../../configs/main-nav';
import authItems from '../../configs/auth-nav';
import logo from '../../img/logo.png';
import avatar from '../../img/portrait.jpg';

import s from './AppHeader.module.css';
import AuthNavigation from '../../components/AuthNavigation/AuthNavigation';

const HeadComponent = ({ isAuthenticated, user, signOut }) => (
  <header className={s.Header}>
    <div className={s.Header__logo}>
      <Logo image={logo} width="100" height="100" />
    </div>
    <div>
      <Navigation navItems={navItems} />
      <Cart />
    </div>
    {isAuthenticated ? (
      <div className={s.Header__usermenu}>
        <UserMenu avatar={avatar} name={user.name} signOut={signOut} />
      </div>
    ) : (
      <div className={s.Header__usermenu}>
        <AuthNavigation authItems={authItems} />
      </div>
    )}
  </header>
);

export default HeadComponent;
