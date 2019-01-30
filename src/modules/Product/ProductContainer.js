import { connect } from 'react-redux';
import Product from '../Product/Product';

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    direction: state.products.direction,
  };
};

export default connect(mapStateToProps)(Product);
