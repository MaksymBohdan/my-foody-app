// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';

import MenuItemContainer from '../modules/menu/MenuItem/MenuItemContainer';

const MenuItemPage = ({ match }: ContextRouter) => {
  return (
    <div>
      <MenuItemContainer id={match.params.id} />
    </div>
  );
};

export default MenuItemPage;
