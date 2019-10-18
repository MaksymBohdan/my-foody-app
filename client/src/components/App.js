// @flow
import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import type { AppProps } from '../types/components';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import AppHeader from '../modules/header/AppHeaderContainer';
import Loader from './Loader/Loader';
import { authOperations } from '../state/auth';
import routes from '../configs/routes';

const AsyncMenuPage = lazy(() =>
  import(
    '../modules/menu/MenuGrid/MenuGridPage' /* webpackChunkName: "menu-page" */
  ),
);
const AsyncMenuItemPage = lazy(() =>
  import(
    '../modules/menu/MenuItem/MenuItemPage' /* webpackChunkName: "menu-item-page" */
  ),
);
const AsyncAboutPage = lazy(() =>
  import('../modules/about/AboutPage' /* webpackChunkName: "about-page" */),
);
const AsyncContactPage = lazy(() =>
  import(
    '../modules/contact/ContactPage' /* webpackChunkName: "contact-page" */
  ),
);
const AsyncDeliveryPage = lazy(() =>
  import(
    '../modules/delivery/DeliveryPage' /* webpackChunkName: "delivery-page" */
  ),
);
const AsyncAccountPage = lazy(() =>
  import(
    '../modules/account/AccountPage' /* webpackChunkName: "account-page" */
  ),
);
const AsyncOrderHistoryPage = lazy(() =>
  import(
    '../modules/order-history/OrderHistoryPage' /* webpackChunkName: "order-history-page" */
  ),
);
const AsyncPlannerPage = lazy(() =>
  import(
    '../modules/planner/PlannerPage' /* webpackChunkName: "planner-page" */
  ),
);
const AsyncCartPage = lazy(() =>
  import('../modules/cart/CartPage' /* webpackChunkName: "cart-page" */),
);
const AsyncSignUp = lazy(() =>
  import('../modules/signUp/SignUpPage' /* webpackChunkName: "sign-up-page" */),
);
const AsyncSignIn = lazy(() =>
  import('../modules/signIn/SignInPage' /* webpackChunkName: "sign-in-page" */),
);

class App extends Component<AppProps> {
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

export default connect<AppProps, *, *, *, *, *>(
  null,
  mapDispatchToProps,
)(App);
