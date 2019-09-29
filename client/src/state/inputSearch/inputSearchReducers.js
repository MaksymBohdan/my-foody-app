// @flow
import types from './inputSearchActionTypes';
import type { InputSearchAction } from '../../configs/flowTypes/state/actions';
import type { StateSearchValue } from '../../configs/flowTypes/state/state';

const inputSearchReducers = (
  state: StateSearchValue = '',
  { type, payload }: InputSearchAction,
) => {
  switch (type) {
    case types.INPUT_SEARCH:
      return payload;

    default:
      return state;
  }
};

export default inputSearchReducers;
