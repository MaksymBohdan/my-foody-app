import React from 'react';

const MenuItemView = ({ id, menuItem, handleGoBack }) => (
  <React.Fragment>
    <div>Menu Item ID - {id}</div>
    <div>Description {menuItem && menuItem.description}</div>
    <button type="button" onClick={handleGoBack}>
      Back to menu
    </button>
  </React.Fragment>
);

export default MenuItemView;
