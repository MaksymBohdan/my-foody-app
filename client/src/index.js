// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

import App from './components/App';
import { store, persistor } from './state/store';

import * as serviceWorker from './serviceWorker';

const root: ?Element = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    root,
  );
}

serviceWorker.unregister();
