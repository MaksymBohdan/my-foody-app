import React from 'react';
import { Link } from 'react-router-dom';

import MenuCard from './components/MenuCard';

import routes from '../../../configs/routes';

const MenuGrid = ({ items, location, addToCart }) => (
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
        <button type="button" onClick={() => addToCart(id)}>
          Add to cart
        </button>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
