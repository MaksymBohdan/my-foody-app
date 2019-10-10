// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartView from './CartView';
import { cartActions, cartSelectors } from '../../state/cart';
import { menuOperations } from '../../state/menuAll';
import type { CartContainerProps } from '../../types/module/cart';

class CartContainer extends Component<CartContainerProps, {}> {
  componentDidMount() {
    const { fetchMenuItems } = this.props;
    fetchMenuItems('all');
  }

  render() {
    const { removeFromCart, products, addOneItem, removeOneItem } = this.props;

    return (
      <CartView
        removeFromCart={removeFromCart}
        products={products}
        addOneItem={addOneItem}
        removeOneItem={removeOneItem}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: cartSelectors.getCartProducts(state),
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
  addOneItem: cartActions.addOneItem,
  removeOneItem: cartActions.removeOneItem,
  fetchMenuItems: menuOperations.fetchMenuItemByCategory,
};

export default connect<CartContainerProps, {}, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
)(CartContainer);
