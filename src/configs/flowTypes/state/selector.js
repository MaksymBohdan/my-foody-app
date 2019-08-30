// @flow
import type { State, CategoryItems } from './state';

export type Selector<T> = State => T;

export type CartProductsType = {
  amount: number,
  ...CategoryItems,
};
