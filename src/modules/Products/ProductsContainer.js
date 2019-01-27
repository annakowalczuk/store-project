import { connect } from 'react-redux';
import { Products } from './Products';

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList,
    direction: state.products.direction,
  };
};

export default connect(mapStateToProps)(Products);
