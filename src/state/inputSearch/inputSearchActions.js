import types from './inputSearchActionTypes';

const inputSearch = text => ({
  type: types.INPUT_SEARCH,
  payload: text,
});

export default { inputSearch };
