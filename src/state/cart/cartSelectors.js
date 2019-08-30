// @flow
import { createSelector } from 'reselect';
import { menuSelectors } from '../menuAll';
import type {
  ProductIds,
  ProductAmount,
} from '../../configs/flowTypes/state/state';
import type {
  Selector,
  CartProductsType,
} from '../../configs/flowTypes/state/selector';

const getCartProductIds: Selector<ProductIds> = state => state.cart.ids;

const getCartProductAmounts: Selector<ProductAmount> = state =>
  state.cart.amount;

const getCartProductsAmount: Selector<number> = createSelector(
  getCartProductIds,
  ids => ids.length,
);

const getCartProducts: Selector<Array<CartProductsType>> = createSelector(
  [getCartProductIds, getCartProductAmounts, menuSelectors.menuEntities],
  (ids, amount, entities) =>
    ids.map(id => ({ ...entities[id], amount: amount[id] })),
);

export default {
  getCartProducts,
  getCartProductAmounts,
  getCartProductsAmount,
};
