import React from 'react';
import MenuItemContainer from '../modules/menu/MenuCard/MenuItemContainer';

const MenuItemPage = ({ match }) => {
  return (
    <div>
      <MenuItemContainer id={match.params.id} />
    </div>
  );
};

export default MenuItemPage;