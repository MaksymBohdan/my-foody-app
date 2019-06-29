import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import PlannerPage from '../pages/Planner';

// import MainComponent from './main/MainComponent';
// import AuthComponent from './authentication/AuthComponent';
// import Modal from './header/Modal';

import routes from '../configs/routes';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <AppHeader />
        <Switch>
          <Route exact path={routes.MENU} component={MenuPage} />
          <Route path={routes.MENU_ITEM} component={MenuItemPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
          <Route path={routes.CONTACT} component={ContactPage} />
          <Route path={routes.DELIVERY} component={DeliveryPage} />
          <Route path={routes.ACCOUNT} component={AccountPage} />
          <Route path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
          <Route path={routes.PLANNER} component={PlannerPage} />
        </Switch>
      </Fragment>
    );
  }
}
export default App;
// isModalOpen: false

// openModal = () => {
//   this.setState({ isModalOpen: true });
// };

// closeModal = () => {};
// const { isModalOpen } = this.state;
/* <button type="button" onClick={this.openModal}>
Open Modal
</button>
{isModalOpen && <Modal onClose={() => null} />}
<MenuPage />
<MainComponent />
<AuthComponent /> */
