// @flow
import types from './cartActionTypes';
import type { CartAction } from '../../configs/flowTypes/state/actions';

const addToCart = (id: number): CartAction => ({
  type: types.ADD_TO_CART,
  payload: id,
});

const removeFromCart = (id: number): CartAction => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

const addOneItem = (id: number): CartAction => ({
  type: types.ADD_ONE_ITEM,
  payload: id,
});

const removeOneItem = (id: number): CartAction => ({
  type: types.REMOVE_ONE_ITEM,
  payload: id,
});

export default { addToCart, removeFromCart, addOneItem, removeOneItem };
