// @flow
import type { ProductIds, ProductAmount } from './state';
import type { CartAction } from './actions';

type Reducer<S, A> = (state: S | void, action: A) => S;

export type CombineReducersState = {
  ids: Reducer<ProductIds, CartAction>,
  amount: Reducer<ProductAmount, CartAction>,
};
