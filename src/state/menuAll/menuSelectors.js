// @flow
import { createSelector } from 'reselect';
import { inputSearchSelectors } from '../inputSearch/index';
import type { Selector } from '../../configs/flowTypes/state/selector';
import type {
  MenuItems,
  Entities,
  Entity,
  StateLoading,
  StateError,
} from '../../configs/flowTypes/state/state';

const menuItems: Selector<MenuItems> = state => state.menu.items;

const menuEntities: Selector<Entities> = state => state.entities.menu;

const getItems: Selector<Array<Entity>> = createSelector(
  [menuItems, menuEntities],
  (items, entities) => items.map(item => entities[item]),
);

const loading: Selector<StateLoading> = state => state.menu.loading;
const error: Selector<StateError> = state => state.menu.error;

const getFilteredItems: Selector<Array<Entity>> = createSelector(
  [getItems, inputSearchSelectors.getSearchValue],
  (items, input) =>
    items.filter(item => item.name.toLowerCase().includes(input.toLowerCase())),
);

export default { loading, error, getFilteredItems, menuEntities };
