// @flow

// Cart
export type ProductIds = Array<number>;

export type ProductAmount = {
  [product_id: number]: number,
};

type StateCart = { ids: ProductIds, amount: ProductAmount };

// FetchData
type FetchData = {
  loading: boolean,
  error: ?void | string,
};

// Category
type CategoryItem = {
  id: number,
  name: string,
};

export type CategoryItems = Array<CategoryItem>;

type StateCategory = {
  item: CategoryItems,
  ...FetchData,
};

// Entities
type Entity = {
  category: string,
  description: string,
  id: number,
  image: string,
  ingredients: Array<string>,
  name: string,
  price: number,
};

type Entities = {
  [entity_name: string]: Entity,
};

type StateEntities = {
  menu: Entities,
};

// Menu
type StateMenu = {
  items: Array<string>,
  ...FetchData,
};

// MenuItem
type StateMenuItem = {
  item: Entity,
  ...FetchData,
};

type StateSearchValue = string;

// State
export type State = {
  cart: StateCart,
  category: StateCategory,
  entities: StateEntities,
  menu: StateMenu,
  menuItem: StateMenuItem,
  searchValue: StateSearchValue,
};
