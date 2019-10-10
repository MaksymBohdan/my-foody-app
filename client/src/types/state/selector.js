// @flow
import type { State } from './state';

export type Selector<T> = State => T;

export type CartProductsSelectorType = {
  amount: number,
  category: string,
  description: string,
  id: number,
  image: string,
  ingredients: Array<string>,
  name: string,
  price: number,
};
