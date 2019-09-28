// @flow
import types from './inputSearchActionTypes';
import type {
  InputSearchPayload,
  InputSearchAction,
} from '../../configs/flowTypes/state/actions';

const inputSearch = (text: InputSearchPayload): InputSearchAction => ({
  type: types.INPUT_SEARCH,
  payload: text,
});

export default { inputSearch };
