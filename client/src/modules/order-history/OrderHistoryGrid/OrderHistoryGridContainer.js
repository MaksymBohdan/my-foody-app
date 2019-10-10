// @flow
import React, { Component } from 'react';

import OrderHistoryView from './OrderHistoryGridView';
import Loader from '../../../components/Loader/Loader';
import OrderHistoryItemView from '../OrderHistoryItem/OrderHistoryItemView';
import OrderHistoryForm from '../OrderHistoryForm/OrderHistoryForm';

import * as API from '../../../services/orderHistoryService';

import type {
  OrderHistoryFormState,
  OrderHistoryGridContainerState,
} from '../../../types/module/orderHistory';

class OrderHistoryContainer extends Component<
  {},
  OrderHistoryGridContainerState,
> {
  state = {
    ordersHistory: [],
    singleOrder: {},
    loading: false,
    error: null,
    isModalOpen: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const ordersHistory = await API.getAllOrdersHistory();
      this.setState({ ordersHistory, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  handleDeleteItemOrderHistory = async (id: number): Promise<void> => {
    try {
      const isDelete = await API.deleteItemOrderHistory(id);

      if (!isDelete) return;

      this.setState(prev => ({
        ordersHistory: prev.ordersHistory.filter(order => order.id !== id),
      }));
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  fetchSingleOrederInfo = async (id: number): Promise<void> => {
    try {
      const singleOrder = await API.getItemOrderHistoryById(id);
      this.setState({ singleOrder });
    } catch (error) {
      this.setState({ error });
    }
  };

  handleModalOpen = (id: number) => {
    this.setState({ isModalOpen: true });
    this.fetchSingleOrederInfo(id);
  };

  handleModalClose = () => this.setState({ isModalOpen: false });

  addItemOrderHistory = async (order: OrderHistoryFormState): Promise<void> => {
    try {
      const newOrder = await API.postItemOrderHistory(order);

      if (newOrder.status !== 201) return;

      this.setState(prev => ({
        ordersHistory: [...prev.ordersHistory, newOrder.data],
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const {
      loading,
      error,
      ordersHistory,
      isModalOpen,
      singleOrder,
    } = this.state;

    return (
      <div>
        {loading && <Loader />}
        {error && <h2>Error...</h2>}
        <OrderHistoryForm addItemOrderHistory={this.addItemOrderHistory} />
        <OrderHistoryView
          ordersHistory={ordersHistory}
          onDelete={this.handleDeleteItemOrderHistory}
          handleModalOpen={this.handleModalOpen}
        />
        {isModalOpen && (
          <OrderHistoryItemView
            singleOrder={singleOrder}
            onClose={this.handleModalClose}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
    );
  }
}

export default OrderHistoryContainer;
