// @flow
import React from 'react';
import type { CartViewProps } from '../../configs/flowTypes/module/cart';

const CartView = ({
  products = [],
  removeFromCart,
  addOneItem,
  removeOneItem,
}: CartViewProps) =>
  products.length > 0 ? (
    <table>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button onClick={() => addOneItem(id)} type="button">
                +
              </button>
              {amount}
              <button onClick={() => removeOneItem(id)} type="button">
                -
              </button>
            </td>
            <td>
              <button onClick={() => removeFromCart(id)} type="button">
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default CartView;
