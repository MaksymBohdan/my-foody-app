// @flow

// Cart
export type ProductIds = Array<number>;

export type ProductAmount = {
  [product_id: number]: number,
};

type StateCart = { ids: ProductIds, amount: ProductAmount };

export type StateLoading = boolean;

export type StateError = ?void | string;

// Category
type CategoryItem = {
  id: number,
  name: string,
};

export type CategoryItems = Array<CategoryItem>;

type StateCategory = {
  item: CategoryItems,
  loading: StateLoading,
  error: StateError,
};

// Entities
export type Entity = {
  category: string,
  description: string,
  id: number,
  image: string,
  ingredients: Array<string>,
  name: string,
  price: number,
};

export type Entities = {
  [entity_name: string]: Entity,
};

type StateEntities = {
  menu: Entities,
};

// Menu
export type MenuItems = Array<string>;

type StateMenu = {
  items: MenuItems,
  loading: StateLoading,
  error: StateError,
};

// MenuItem
type StateMenuItem = {
  item: Entity,
  loading: StateLoading,
  error: StateError,
};

export type StateSearchValue = string;

// Auth

export type Token = string;
export type IsAuthenticated = string;
export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
};

type StateAuth = {
  token: Token,
  isAuthenticated: IsAuthenticated,
  user: User,
};

// State
export type State = {
  cart: StateCart,
  category: StateCategory,
  entities: StateEntities,
  menu: StateMenu,
  menuItem: StateMenuItem,
  searchValue: StateSearchValue,
  auth: StateAuth,
};
