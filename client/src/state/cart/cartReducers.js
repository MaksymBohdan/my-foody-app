// @flow
import { combineReducers } from 'redux';
import type { CartAction } from '../../configs/flowTypes/state/actions';
import type {
  ProductIds,
  ProductAmount,
} from '../../configs/flowTypes/state/state';
import type { CombineReducersState } from '../../configs/flowTypes/state/reducer';
import types from './cartActionTypes';

const cartIdsReducer = (
  state: ProductIds = [],
  { type, payload }: CartAction,
) => {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];

    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload);

    default:
      return state;
  }
};

const amountReducer = (
  state: ProductAmount = {},
  { type, payload }: CartAction,
) => {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload]: state[payload] ? state[payload] + 1 : 1,
      };

    case types.REMOVE_FROM_CART:
      // eslint-disable-next-line no-case-declarations
      const { [payload]: _, ...newState } = state;
      return newState;

    case types.ADD_ONE_ITEM:
      return { ...state, [payload]: state[payload] + 1 };

    case types.REMOVE_ONE_ITEM:
      return {
        ...state,
        [payload]: state[payload] > 1 ? state[payload] - 1 : 1,
      };
    default:
      return state;
  }
};

export default combineReducers<CombineReducersState, CartAction>({
  ids: cartIdsReducer,
  amount: amountReducer,
});
