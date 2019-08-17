import { combineReducers } from 'redux';
import { menuReducer, menuEntitiesReducer } from './menuAll/menuReducers';
import menuItemReducer from './menuItem/itemReducers';
import categoryReducer from './categories/categoryReducers';
import inputSearchReducers from './inputSearch/inputSearchReducers';
import cartReducer from './cart/cartReducers';

export default combineReducers({
  entities: combineReducers({
    menu: menuEntitiesReducer,
  }),
  menu: menuReducer,
  category: categoryReducer,
  menuItem: menuItemReducer,
  searchValue: inputSearchReducers,
  cart: cartReducer,
});
