// @flow
import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import { cartSelectors } from '../../../state/cart';
import type { CartIconProps } from '../../../types/module/cart';

const mapState = state => ({
  amount: cartSelectors.getCartProductsAmount(state),
});

export default connect<CartIconProps, {}, _, _, _, _>(mapState)(CartIconView);
