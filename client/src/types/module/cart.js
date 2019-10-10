// @flow
import type { CartProductsSelectorType } from '../state/selector';

export type CartIconProps = {
  amount: number,
  dispatch: () => void,
};

export type CartContainerProps = {
  removeFromCart: (id: number) => void,
  addOneItem: (id: number) => void,
  removeOneItem: (id: number) => void,
  fetchMenuItems: (param: string) => void,
  products: Array<CartProductsSelectorType>,
};

export type CartViewProps = {
  removeFromCart: (id: number) => void,
  addOneItem: (id: number) => void,
  removeOneItem: (id: number) => void,
  products: Array<CartProductsSelectorType>,
};
