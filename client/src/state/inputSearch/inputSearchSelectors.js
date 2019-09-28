// @flow
import type { StateSearchValue } from '../../configs/flowTypes/state/state';
import type { Selector } from '../../configs/flowTypes/state/selector';

const getSearchValue: Selector<StateSearchValue> = state => state.searchValue;

export default { getSearchValue };
