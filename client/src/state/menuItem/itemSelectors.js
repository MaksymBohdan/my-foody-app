// @flow
import type { Selector } from '../../types/state/selector';
import type { Entity, StateLoading, StateError } from '../../types/state/state';

const getMenuItem: Selector<Entity> = state => state.menuItem.item;
const loading: Selector<StateLoading> = state => state.menuItem.loading;
const error: Selector<StateError> = state => state.menuItem.error;

export default { getMenuItem, loading, error };
