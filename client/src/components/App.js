// @flow
import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authOperations } from '../state/auth';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import AppHeader from '../modules/header/AppHeaderContainer';
import Loader from './Loader/Loader';

import routes from '../configs/routes';

const AsyncMenuPage = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "menu-page" */),
);

const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItem' /* webpackChunkName: "menu-item-page" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/About' /* webpackChunkName: "about-page" */),
);

const AsyncContactPage = lazy(() =>
  import('../pages/Contact' /* webpackChunkName: "contact-page" */),
);

const AsyncDeliveryPage = lazy(() =>
  import('../pages/Delivery' /* webpackChunkName: "delivery-page" */),
);

const AsyncAccountPage = lazy(() =>
  import('../pages/Account' /* webpackChunkName: "account-page" */),
);

const AsyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistory' /* webpackChunkName: "order-history-page" */),
);

const AsyncPlannerPage = lazy(() =>
  import('../pages/Planner' /* webpackChunkName: "planner-page" */),
);

const AsyncCartPage = lazy(() =>
  import('../pages/Cart' /* webpackChunkName: "cart-page" */),
);

const AsyncSignUp = lazy(() =>
  import('../pages/SignUp' /* webpackChunkName: "sign-up-page" */),
);

const AsyncSignIn = lazy(() =>
  import('../pages/SignIn' /* webpackChunkName: "sign-in-page" */),
);

class App extends Component {
  componentDidMount() {
    const { refreshUser } = this.props;

    refreshUser();
  }

  render() {
    return (
      <Fragment>
        <AppHeader />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path={routes.MENU} component={AsyncMenuPage} />
            <Route path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
            <Route path={routes.ABOUT} component={AsyncAboutPage} />
            <Route path={routes.CONTACT} component={AsyncContactPage} />
            <Route path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <ProtectedRoute
              path={routes.ACCOUNT}
              component={AsyncAccountPage}
            />
            <ProtectedRoute
              path={routes.ORDER_HISTORY}
              component={AsyncOrderHistoryPage}
            />
            <ProtectedRoute
              path={routes.PLANNER}
              component={AsyncPlannerPage}
            />
            <ProtectedRoute path={routes.CART} component={AsyncCartPage} />
            <Route path={routes.SIGN_UP} component={AsyncSignUp} />
            <Route path={routes.SIGN_IN} component={AsyncSignIn} />
          </Suspense>
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: authOperations.refreshUser,
};
export default connect(
  null,
  mapDispatchToProps,
)(App);
