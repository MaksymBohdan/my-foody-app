// @flow
import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../state/rootReducer';

import type { State } from '../configs/flowTypes/state/state';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);
const persistedReducer = persistReducer(cartPersistConfig, rootReducer);
const store: Store<State, { type: string, payload?: any }> = createStore(
  persistedReducer,
  enhancer,
);

const persistor = persistStore(store);

export { persistor, store };
