// @flow
import type { StateSearchValue } from '../../types/state/state';
import type { Selector } from '../../types/state/selector';

const getSearchValue: Selector<StateSearchValue> = state => state.searchValue;

export default { getSearchValue };
