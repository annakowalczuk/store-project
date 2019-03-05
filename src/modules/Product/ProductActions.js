import data from '../../data/data.js';

// Export Constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const GO_TO_PAGE = 'GO_TO_PAGE';

// Export Actions
export const getProducts = (productsData) => {
  return {
    type: GET_PRODUCTS,
    productsData,
  };
}

export const sortByName = (key, order) => {
  return {
    type: SORT_BY_NAME,
    key,
    order,
  };
}

export const sortByPrice = (key, order) => {
  return {
    type: SORT_BY_PRICE,
    key,
    order,
  };
}

export const sortBy = (key, order) => {
  return dispatch =>
    key === 'price' ? dispatch(sortByPrice(key, order)) : dispatch(sortByName(key, order))
}

export const goToPage = (id) => {
  return {
    type: GO_TO_PAGE,
    id,
  };
}

export const fetchProducts = () => dispatch => {
  data.receiveProducts(products => {
    dispatch(getProducts(products.products))
  })
}
