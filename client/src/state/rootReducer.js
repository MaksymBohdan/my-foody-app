// @flow
import { combineReducers } from 'redux';
import { menuReducer, menuEntitiesReducer } from './menuAll/menuReducers';
import menuItemReducer from './menuItem/itemReducers';
import categoryReducer from './categories/categoryReducers';
import inputSearchReducers from './inputSearch/inputSearchReducers';
import cartReducer from './cart/cartReducers';
import authReducers from './auth/authReducers';
import type { State } from '../configs/flowTypes/state/state';
import type {
  Reducer,
  ReducerDefaultAction,
} from '../configs/flowTypes/state/reducer';

const rootReducer: Reducer<State, ReducerDefaultAction> = combineReducers({
  entities: combineReducers({
    menu: menuEntitiesReducer,
  }),
  menu: menuReducer,
  category: categoryReducer,
  menuItem: menuItemReducer,
  searchValue: inputSearchReducers,
  cart: cartReducer,
  auth: authReducers,
});

export default rootReducer;
