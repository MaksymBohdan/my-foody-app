import React from 'react';
import Loader from '../../../components/Loader/Loader';
import withModal from '../../../enhancers/withModal';

const OrderHistoryItemView = ({ singleOrder }) => {
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
