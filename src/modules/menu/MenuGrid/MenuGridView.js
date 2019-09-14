// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { MenuGridViewProps } from '../../../configs/flowTypes/module/menu';

import MenuCard from './components/MenuCard';

import routes from '../../../configs/routes';

const MenuGrid = ({ items, location, addToCart }: MenuGridViewProps) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `${routes.MENU}/${item.id}`,
            state: { from: location },
          }}
        >
          <MenuCard {...item} />
        </Link>
        <button type="button" onClick={() => addToCart(item.id)}>
          Add to cart
        </button>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
