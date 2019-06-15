import React from 'react';

const MenuFilter = ({ menuItems, handleFilter }) => {
  return <input type="text" value={menuItems} onChange={handleFilter} />;
};

export default MenuFilter;
