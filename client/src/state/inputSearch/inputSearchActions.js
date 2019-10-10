// @flow
import types from './inputSearchActionTypes';
import type {
  InputSearchPayload,
  InputSearchAction,
} from '../../types/state/actions';

const inputSearch = (text: InputSearchPayload): InputSearchAction => ({
  type: types.INPUT_SEARCH,
  payload: text,
});

export default { inputSearch };
