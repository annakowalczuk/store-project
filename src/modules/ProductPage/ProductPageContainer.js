import { connect } from 'react-redux';
import { ProductPage } from './ProductPage';
import { addToCart } from '../Cart/CartActions';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.productsList.find(item => item._id ===  ownProps.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartHandler: (id) => dispatch(addToCart(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
