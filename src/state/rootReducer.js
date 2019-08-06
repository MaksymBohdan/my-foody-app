import { combineReducers } from 'redux';
import menuAllReducer from './menu/menuAll/menuReducers';
import menuItemReducer from './menu/menuItem/itemReducers';
import categoryReducer from './menu/categories/categoryReducers';
import inputSearchReducers from './menu/inputSearch/inputSearchReducers';

export default combineReducers({
  menu: combineReducers({
    menuAll: menuAllReducer,
    menuItem: menuItemReducer,
    category: categoryReducer,
    searchValue: inputSearchReducers,
  }),
});
