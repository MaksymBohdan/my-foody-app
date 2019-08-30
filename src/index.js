// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import App from './components/App';
import store from './store/store';

import * as serviceWorker from './serviceWorker';

const root: ?Element = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>,
    root,
  );
}

serviceWorker.unregister();
