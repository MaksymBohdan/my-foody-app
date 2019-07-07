import React, { Component, Fragment } from 'react';

class OrderHistoryForm extends Component {
  state = {
    address: '',
    date: Date.now(),
    price: '',
    rating: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async e => {
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
            onChange={this.handleChange}
            placeholder="price"
          />
          <br />
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.handleChange}
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
