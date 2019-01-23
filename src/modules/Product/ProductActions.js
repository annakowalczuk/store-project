import data from '../../data/products.json';

// Export Constants
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// Export Actions
export const getProducts = (productsData) => {
  return {
    type: GET_PRODUCTS,
    productsData,
  };
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
//     .then(response => {
//       response = response.json();
//       return response;
//     })
//     .then(response => {console.log(response);})
//     .then(data => {
//       // console.log(data);
//       dispatch(getProducts(data.products));
//     }).catch(err => {
//       console.log(err);
//     });
//   };
// }
