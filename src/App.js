import React, { Fragment, Component } from 'react';
import HeadComponent from './components/header/HeadComponent';
import MainComponent from './components/main/MainComponent';
import AuthComponent from './components/authentication/AuthComponent';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <HeadComponent />
        <MainComponent />
        <AuthComponent />
      </Fragment>
    );
  }
}
export default App;
