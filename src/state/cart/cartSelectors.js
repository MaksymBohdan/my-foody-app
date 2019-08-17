import { createSelector } from 'reselect';
import { menuSelectors } from '../menuAll';

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;

const getCartProductsAmount = createSelector(
  getCartProductIds,
  ids => ids.length,
);
const getCartProducts = createSelector(
  [getCartProductIds, getCartProductAmounts, menuSelectors.menuEntities],
  (ids, amount, entities) =>
    ids.map(id => ({
      ...entities[id],
      amount: amount[id],
    })),
);

export default {
  getCartProducts,
  getCartProductAmounts,
  getCartProductsAmount,
};
