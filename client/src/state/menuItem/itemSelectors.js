// @flow
import type { Selector } from '../../configs/flowTypes/state/selector';
import type {
  Entity,
  StateLoading,
  StateError,
} from '../../configs/flowTypes/state/state';

const getMenuItem: Selector<Entity> = state => state.menuItem.item;
const loading: Selector<StateLoading> = state => state.menuItem.loading;
const error: Selector<StateError> = state => state.menuItem.error;

export default { getMenuItem, loading, error };
