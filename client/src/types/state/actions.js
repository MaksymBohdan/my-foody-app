// @flow

import type { CategoryItems, Entities, Entity } from './state';

// Error && Loading
export type LoadingAction = { type: string };

export type ErrorPayload = ?string;

export type ErrorAction = {
  type: string,
  payload: ErrorPayload,
};

// Cart
export type CartAction = {
  type: string,
  payload: number,
};

// Category
export type CategoryRequestAction = {
  type: string,
};

export type Category = CategoryItems;

export type CategoryFetchSuccessAction = {
  type: string,
  payload: Category,
};

// InputSearch
export type InputSearchPayload = string;

export type InputSearchAction = {
  type: string,
  payload: InputSearchPayload,
};

// MenuAll
export type FetchAllRequestAction = {
  type: string,
};

export type FetchAllSuccessPayload = {
  ids: Array<string>,
  entities: Entities,
};

export type FetchAllSuccessAction = {
  type: string,
  payload: FetchAllSuccessPayload,
};

// MenuItem
export type FetchSingleItemRequestAction = {
  type: string,
};

export type FetchSingleItemSuccessPayload = Entity;

export type FetchSingleItemSuccessAction = {
  type: string,
  payload: FetchSingleItemSuccessPayload,
};

// auth
export type SignUpCredentials = {
  name: string,
  email: string,
  phone: string,
  password: string,
};

export type SignInCredentials = {
  email: string,
  password: string,
};

export type User = {
  id: string,
  name: string,
  email: string,
};
