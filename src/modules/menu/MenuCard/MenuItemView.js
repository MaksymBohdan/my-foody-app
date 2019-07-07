import React from 'react';

const MenuItemView = ({ id, menuItem }) => (
  <React.Fragment>
    <div>Menu Item ID - {id}</div>
    <div>Description {menuItem && menuItem.description}</div>
  </React.Fragment>
);

export default MenuItemView;
