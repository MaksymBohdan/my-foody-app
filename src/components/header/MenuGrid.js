import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(({ name, price, id, image }) => (
      <li key={id}>
        <MenuCard
          name={name}
          price={price}
          image={image}
          onDelete={() => onDelete(id)}
          onShowMoreInfo={() => onShowMoreInfo(id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
