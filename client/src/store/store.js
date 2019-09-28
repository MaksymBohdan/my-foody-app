// @flow
import { createStore, applyMiddleware } from 'redux';
import type { Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../state/rootReducer';

import type { State } from '../configs/flowTypes/state/state';

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);
const store: Store<State, { type: string, payload?: any }> = createStore(
  rootReducer,
  enhancer,
);

export default store;
