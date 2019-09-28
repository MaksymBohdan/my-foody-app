// @flow
import type { Selector } from '../../configs/flowTypes/state/selector';
import type {
  CategoryItems,
  StateLoading,
  StateError,
} from '../../configs/flowTypes/state/state';

const getCategories: Selector<CategoryItems> = state => state.category.item;
const loading: Selector<StateLoading> = state => state.category.loading;
const error: Selector<StateError> = state => state.category.error;

export default { getCategories, loading, error };
