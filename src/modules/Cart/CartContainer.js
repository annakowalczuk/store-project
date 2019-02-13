import { connect } from 'react-redux';
import { Cart } from './Cart.js';
import { addToCart, removeItemFromCart, removeProductFromCart } from './CartActions';



const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
    removeProductFromCart: (id) => dispatch(removeProductFromCart(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
