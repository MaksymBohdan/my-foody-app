// @flow
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { menuReducer, menuEntitiesReducer } from './menuAll/menuReducers';
import menuItemReducer from './menuItem/itemReducers';
import categoryReducer from './categories/categoryReducers';
import inputSearchReducers from './inputSearch/inputSearchReducers';
import cartReducer from './cart/cartReducers';
import authReducers from './auth/authReducers';
import type { State } from '../types/state/state';
import type { Reducer, ReducerDefaultAction } from '../types/state/reducer';

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const rootReducer: Reducer<State, ReducerDefaultAction> = combineReducers({
  entities: combineReducers({
    menu: menuEntitiesReducer,
  }),
  menu: menuReducer,
  category: categoryReducer,
  menuItem: menuItemReducer,
  searchValue: inputSearchReducers,
  cart: cartReducer,
  auth: persistReducer(tokenPersistConfig, authReducers),
});

export default rootReducer;
