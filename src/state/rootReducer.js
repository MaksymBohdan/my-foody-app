import { combineReducers } from 'redux';
import menuAllReducer from './menu/menuAll/menuReducers';
import menuItemReducer from './menu/menuItem/itemReducers';

export default combineReducers({
  menu: combineReducers({
    menuAll: menuAllReducer,
    menuItem: menuItemReducer,
  }),
});
