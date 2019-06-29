import React from 'react';
import s from './MenuList.module.css';

const MenuList = ({ filteredItems }) => {
  return (
    <ul className={s.item_list}>
      {filteredItems.map(item => (
        <li className={s.item} key={item.id}>
          <img className={s.item_img} src={item.image} alt="menu-item" />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
