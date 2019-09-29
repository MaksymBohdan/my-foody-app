import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../state/auth';
import routes from '../configs/routes';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    checkAuth = () => {
      const { isAuthenticated, location, history } = this.props;
      if (isAuthenticated) {
        const { from } = location.state || {
          from: { pathname: routes.DEFAULT },
        };

        history.push(from);
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
