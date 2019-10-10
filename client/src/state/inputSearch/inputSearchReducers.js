// @flow
import types from './inputSearchActionTypes';
import type { InputSearchAction } from '../../types/state/actions';
import type { StateSearchValue } from '../../types/state/state';

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
