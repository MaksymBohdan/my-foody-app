import React, { Component } from 'react';

import OrderHistoryView from './OrderHistoryGridView';
import Loader from '../../../components/Loader/Loader';
import OrderHistoryItemView from '../OrderHstoryItem/OrderHistoryItemView';
import OrderHistoryForm from '../OrderHistoryForm/OrderHistoryForm';

import * as API from '../../../services/orderHistoryService';

class OrderHistoryContainer extends Component {
  state = {
    ordersHistory: [],
    singleOrder: [],
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
      this.state({ error, loading: false });
    }
  }

  handleDeleteItemOrderHistory = async id => {
    try {
      const isDelete = await API.deleteItemOrderHistory(id);

      if (!isDelete) return;

      this.setState(prev => ({
        ordersHistory: prev.ordersHistory.filter(order => order.id !== id),
      }));
    } catch (error) {
      this.state({ error, loading: false });
    }
  };

  fetchSingleOrederInfo = async id => {
    try {
      const singleOrder = await API.getItemOrderHistoryById(id);
      this.setState({ singleOrder });
    } catch (error) {
      this.state({ error });
    }
  };

  handleModalOpen = id => {
    this.setState({ isModalOpen: true });
    this.fetchSingleOrederInfo(id);
  };

  handleModalClose = () => this.setState({ isModalOpen: false });

  addItemOrderHistory = async order => {
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
