import React from 'react';
import s from './NavBar.module.css';

const NavBar = ({ list }) => {
  return (
    <ul className={s.list}>
      {list.map(el => (
        <li className={s.element} key={el.id}>
          <a href="https://www.google.com/">{el.content}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
