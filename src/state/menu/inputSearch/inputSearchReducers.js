import types from './inputSearchActionTypes';

const inputSearchReducers = (state = '', { type, payload }) => {
  switch (type) {
    case types.INPUT_SEARCH:
      return payload;

    default:
      return state;
  }
};

export default inputSearchReducers;
