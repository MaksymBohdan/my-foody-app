import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import UserMenu from './UserMenu';
import s from './HeadComponent.module.css';

class HeadComponent extends Component {
  state = {
    list: [
      { id: 1, content: 'menu' },
      { id: 2, content: 'about' },
      { id: 3, content: 'contact' },
      { id: 4, content: 'delivery' },
    ],
  };

  render() {
    const { list } = this.state;
    return (
      <div className={s.header}>
        <Logo />
        <NavBar list={list} />
        <UserMenu />
      </div>
    );
  }
}

export default HeadComponent;
