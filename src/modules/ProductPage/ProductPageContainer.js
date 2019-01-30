import { connect } from 'react-redux';
import { ProductPage } from './ProductPage';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products.productsList.find(item => item._id ===  ownProps.match.params.id),
  };
};

export default connect(mapStateToProps)(ProductPage);
