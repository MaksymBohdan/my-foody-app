import React from 'react';

const OrderHistory = ({ ordersHistory, onDelete, handleModalOpen }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery Item</th>
        <th>Rating</th>
        <th>More Info</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {ordersHistory.map(order => (
        <tr key={order.id}>
          <td>{order.date}</td>
          <td>{order.price}</td>
          <td>{order.address}</td>
          <td>{order.rating}</td>
          <td>
            <button type="button" onClick={() => handleModalOpen(order.id)}>
              I
            </button>
          </td>
          <td>
            <button type="button" onClick={() => onDelete(order.id)}>
              D
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
