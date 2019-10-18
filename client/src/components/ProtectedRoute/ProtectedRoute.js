// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../../state/auth';
import routes from '../../configs/routes';
import type { ProtectedRouteProps } from '../../types/components';

const ProtectedRoute = ({
  component: Component,
  redirectTo = routes.SIGN_IN,
  isAuthenticated,
  ...rest
}: ProtectedRouteProps) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: redirectTo, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect<ProtectedRouteProps, *, *, *, *, *>(mapStateToProps)(
  ProtectedRoute,
);
