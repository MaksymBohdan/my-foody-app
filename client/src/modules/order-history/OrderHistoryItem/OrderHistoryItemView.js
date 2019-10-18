// @flow

import React from 'react';
import Loader from '../../../components/Loader/Loader';
import withModal from '../../../components/ Hoc/withModal';
import type { orderHistorySingleItemView } from '../../../types/module/orderHistory';

const OrderHistoryItemView = ({ singleOrder }: orderHistorySingleItemView) => {
  const { price, address } = singleOrder && singleOrder;

  return (
    <React.Fragment>
      {!singleOrder && <Loader />}
      <p>price : {price}</p>
      <p>address : {address}</p>
    </React.Fragment>
  );
};

export default withModal(OrderHistoryItemView);
