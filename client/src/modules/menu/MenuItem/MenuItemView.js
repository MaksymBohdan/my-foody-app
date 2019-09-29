// @flow
import React from 'react';
import type { menuItemViewProps } from '../../../configs/flowTypes/module/menuItem';

const MenuItemView = ({ id, menuItem, handleGoBack }: menuItemViewProps) => (
  <React.Fragment>
    <div>Menu Item ID - {id}</div>
    <div>Description {menuItem && menuItem.description}</div>
    <button type="button" onClick={handleGoBack}>
      Back to menu
    </button>
  </React.Fragment>
);

export default MenuItemView;
