import { createSelector } from 'reselect';
import { inputSearchSelectors } from '../inputSearch';

const getItems = state => state.menu.menuAll.items;
const loading = state => state.menu.menuAll.loading;
const error = state => state.menu.menuAll.error;
const getFilteredItems = createSelector(
  [getItems, state => inputSearchSelectors.getSearchValue(state)],
  (items, input) =>
    items.filter(item => item.name.toLowerCase().includes(input.toLowerCase())),
);

export default { getItems, loading, error, getFilteredItems };
