// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { AbstractComponent } from 'react';

import { authSelectors } from '../../state/auth';
import routes from '../../configs/routes';

import type { WithAuthProps } from '../../types/components';

const withAuth = (WrappedComponent: AbstractComponent<*>) => {
  class WithAuth extends Component<WithAuthProps> {
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
          from: { pathname: routes.MENU },
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

  return connect<WithAuthProps, *, *, *, *, *>(mapStateToProps)(WithAuth);
};

export default withAuth;
