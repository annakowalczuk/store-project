import { connect } from 'react-redux';
import Product from '../Product/Product';

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    direction: state.products.direction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
