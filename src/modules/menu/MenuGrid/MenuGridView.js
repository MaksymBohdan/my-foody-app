import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from '../MenuCard/MenuCard';

import routes from '../../../configs/routes';

const MenuGrid = ({ items, onDelete, location }) => (
  <ul>
    {items.map(({ name, price, id, image }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.MENU}/${id}`,
            state: { from: location },
          }}
        >
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
