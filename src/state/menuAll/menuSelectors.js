import { createSelector } from 'reselect';
import { inputSearchSelectors } from '../inputSearch/index';

const menuItems = state => state.menu.items;
const menuEntities = state => state.entities.menu;

const getItems = createSelector(
  [menuItems, menuEntities],
  (items, entities) => items.map(item => entities[item]),
);

const loading = state => state.menu.loading;
const error = state => state.menu.error;

const getFilteredItems = createSelector(
  [getItems, inputSearchSelectors.getSearchValue],
  (items, input) =>
    items.filter(item => item.name.toLowerCase().includes(input.toLowerCase())),
);

export default { getItems, loading, error, getFilteredItems, menuEntities };
