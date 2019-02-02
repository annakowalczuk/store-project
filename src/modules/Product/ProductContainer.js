import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from '../Cart/CartActions';

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    direction: state.products.direction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
