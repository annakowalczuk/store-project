import data from '../../data/products.json';

// Export Constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SORT_BY_NAME_ASC = 'SORT_BY_NAME_ASC';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

// Export Actions
export const getProducts = (productsData) => {
  return {
    type: GET_PRODUCTS,
    productsData,
  };
}

export const sortByNameAsc = (key, order) => {
  return {
    type: SORT_BY_NAME_ASC,
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
    key === 'price' ? dispatch(sortByPrice(key, order)) : dispatch(sortByNameAsc(key, order))
}

export const fetchProducts = () => {
  return dispatch => {
    return new Promise((res, rej) => {
      res(data);
    }).then(data => {
      dispatch(getProducts(data.products));
    }).catch(err => {
      console.log(err);
    });
  };
}

// // this function would work if json is put in public directory
// export const fetchProducts = () => {
//   return dispatch => {
//     fetch('/products.json')
//     .then(response => response.json())
//     .then(data => dispatch(getProducts(data.products)))
//     .catch(err => {
//       console.log(err);
//     });
//   };
// }
