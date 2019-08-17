import types from './cartActionTypes';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: id,
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

const addOneItem = id => ({
  type: types.ADD_ONE_ITEM,
  payload: id,
});

const removeOneItem = id => ({
  type: types.REMOVE_ONE_ITEM,
  payload: id,
});

export default { addToCart, removeFromCart, addOneItem, removeOneItem };
