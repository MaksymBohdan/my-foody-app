import React, { Fragment } from 'react';
import OrderHistory from './OrderHistory';
import Menu from './Menu';

const MainComponent = () => {
  return (
    <Fragment>
      <OrderHistory />
      <Menu />
    </Fragment>
  );
};

export default MainComponent;
