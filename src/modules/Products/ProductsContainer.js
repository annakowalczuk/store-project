import { connect } from 'react-redux';
import { Products } from './Products';



const mapStateToProps = (state) => {

  const productsPerPage = 6;
  const indexOfLastProduct = state.products.currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = state.products.productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  return {
    products: currentProducts,
    direction: state.products.direction,
    currentPage: state.products.currentPage,
  };
};

export default connect(mapStateToProps)(Products);
