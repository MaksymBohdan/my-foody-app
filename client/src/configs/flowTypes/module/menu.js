// @flow
import type { ContextRouter } from 'react-router-dom';
import type { Entity, CategoryItems } from '../state/state';

export type MenuGridContainerProps = {
  ...ContextRouter,
  filteredMenuItems: Array<Entity>,
  loading: boolean,
  error: ?string,
  categories: CategoryItems,
  loadingCategory: boolean,
  errorCategory: ?string,
  searchValue: string,
  fetchMenuItems: (category?: string) => void,
  fetchCategories: () => void,
  handleInputSearch: (text: string) => void,
  addToCart: (id: number) => void,
};
export type MenuGridViewProps = {
  ...ContextRouter,
  items: Array<Entity>,
  loading: boolean,
  error: ?string,
  categories: CategoryItems,
  loadingCategory: boolean,
  errorCategory: ?string,
  searchValue: string,
  fetchMenuItems: (category?: string) => void,
  fetchCategories: () => void,
  handleInputSearch: (text: string) => void,
  addToCart: (id: number) => void,
};
