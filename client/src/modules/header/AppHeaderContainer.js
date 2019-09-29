import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import { authSelectors, authOperations } from '../../state/auth';

class AppHeaderContainer extends Component {
  componentDidMount() {}

  render() {
    const { isAuthenticated, user, signOut } = this.props;

    return (
      <AppHeader
        isAuthenticated={isAuthenticated}
        user={user}
        signOut={signOut}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  user: authSelectors.user(state),
});

const mapDispatchToProps = {
  signOut: authOperations.signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeaderContainer);
