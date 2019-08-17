import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import { cartSelectors } from '../../../state/cart';

const mapState = state => ({
  amount: cartSelectors.getCartProductsAmount(state),
});

export default connect(mapState)(CartIconView);
