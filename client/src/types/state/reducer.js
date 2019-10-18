// @flow
import type {
  ProductIds,
  ProductAmount,
  CategoryItems,
  StateLoading,
  StateError,
  MenuItems,
  Entity,
} from './state';
import type {
  CartAction,
  CategoryFetchSuccessAction,
  LoadingAction,
  ErrorAction,
  FetchAllSuccessAction,
  FetchSingleItemSuccessAction,
} from './actions';

export type Reducer<S, A> = (state: S | void, action: A) => S;
export type ReducerDefaultAction = { type: string, payload?: any };

// Cart
export type CombineReducersState = {
  ids: Reducer<ProductIds, CartAction>,
  amount: Reducer<ProductAmount, CartAction>,
};

// Category
export type CombineReducersCategory = {
  item: Reducer<CategoryItems, CategoryFetchSuccessAction>,
  loading: Reducer<StateLoading, LoadingAction>,
  error: Reducer<StateError, ErrorAction>,
};

// MenuAll
export type CombineReducersMenuAll = {
  items: Reducer<MenuItems, FetchAllSuccessAction>,
  loading: Reducer<StateLoading, LoadingAction>,
  error: Reducer<StateError, ErrorAction>,
};

// MenuItem
export type CombineReducersMenuItem = {
  item: Reducer<Entity, FetchSingleItemSuccessAction>,
  loading: Reducer<StateLoading, LoadingAction>,
  error: Reducer<StateError, ErrorAction>,
};

export type CombineReducersAuth = {
  user?: Reducer<null | Entity, *>,
  isAuthenticated: Reducer<boolean, *>,
  token: Reducer<null | string, *>,
};
