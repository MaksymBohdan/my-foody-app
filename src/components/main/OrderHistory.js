import React from 'react';
import history from '../../json/order-history.json';

const OrderHistory = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Price</th>
          <th>Delivery Item</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {history.map(payment => (
          <tr key={payment.id}>
            <td>{payment.date}</td>
            <td>{payment.price}</td>
            <td>{payment.address}</td>
            <td>{payment.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderHistory;
