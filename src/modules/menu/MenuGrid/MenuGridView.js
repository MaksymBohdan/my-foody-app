import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from '../MenuCard/MenuCard';

import routes from '../../../configs/routes';

const MenuGrid = ({ items, location }) => (
  <ul>
    {items.map(({ name, price, id, image }) => (
      <li key={id}>
        <Link
          to={{
            pathname: `${routes.MENU}/${id}`,
            state: { from: location },
          }}
        >
          <MenuCard name={name} price={price} image={image} />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
