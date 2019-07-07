import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from '../MenuCard/MenuCard';

import routes from '../../../configs/routes';

const MenuGrid = ({ items, onDelete }) => (
  <ul>
    {items.map(({ name, price, id, image }) => (
      <li key={id}>
        <Link to={`${routes.MENU}/${id}`}>
          <MenuCard
            name={name}
            price={price}
            image={image}
            onDelete={() => onDelete(id)}
          />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
