import { connect } from 'react-redux';
import { Products } from './Products';

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products),
  };
};

export default connect(mapStateToProps)(Products);
