import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';

const CartIcon = ({ amount }) => (
  <div>
    <Link to={routes.CART}>
      <img
        src="https://image.flaticon.com/icons/svg/263/263142.svg"
        width="60"
        alt=""
      />
      <span>{amount}</span>
    </Link>
  </div>
);

export default CartIcon;
