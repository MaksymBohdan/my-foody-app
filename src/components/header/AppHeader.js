import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import s from './AppHeader.module.css';
import logo from '../../img/logo.png';
import avatar from '../../img/portrait.jpg';

class HeadComponent extends Component {
  state = {
    list: ['menu', 'about', 'contact', 'delivery'],
  };

  render() {
    const { list } = this.state;
    return (
      <header className={s.Header}>
        <div className={s.Header__logo}>
          <Logo image={logo} width="100" height="100" />
        </div>
        <div>
          <Navigation list={list} />
        </div>
        <div className={s.Header__usermenu}>
          <UserMenu avatar={avatar} name="Vasia Pupkin" />
        </div>
      </header>
    );
  }
}

export default HeadComponent;
