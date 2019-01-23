import { connect } from 'react-redux';
import Product from '../Product/Product';

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
