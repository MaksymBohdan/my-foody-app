// @flow
import React, { Component, Fragment } from 'react';
import type {
  OrderHistoryFormProps,
  OrderHistoryFormState,
} from '../../../types/module/orderHistory';

class OrderHistoryForm extends Component<
  OrderHistoryFormProps,
  OrderHistoryFormState,
> {
  state = {
    address: '',
    date: Date.now(),
    price: '',
    rating: '',
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

  handleChangeNumberField = (e: SyntheticEvent<HTMLInputElement>) =>
    this.setState({ [e.currentTarget.name]: Number(e.currentTarget.value) });

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { addItemOrderHistory } = this.props;

    addItemOrderHistory(this.state);
    this.handleReset();
  };

  handleReset = () => {
    this.setState({
      address: '',
      price: '',
      rating: '',
    });
  };

  render() {
    const { address, price, rating } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="address"
          />
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChangeNumberField}
            placeholder="price"
          />
          <br />
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.handleChangeNumberField}
            placeholder="rating"
            max="10"
            min="1"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default OrderHistoryForm;
