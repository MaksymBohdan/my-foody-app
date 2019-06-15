import React, { Fragment, Component } from 'react';
import AppHeader from './components/header/AppHeader';
import MainComponent from './components/main/MainComponent';
import AuthComponent from './components/authentication/AuthComponent';
import Modal from './components/header/Modal';

class App extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {};

  render() {
    const { isModalOpen } = this.state;

    return (
      <Fragment>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={() => null} />}
        <MainComponent />
        <AuthComponent />
      </Fragment>
    );
  }
}
export default App;
