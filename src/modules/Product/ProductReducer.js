import { GET_PRODUCTS } from './ProductActions';
// import productsData from '../../data/products.json';

// const initialState = productsData;
const initialState = {};


export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...action.productsData };

    default: 
      return state;
  }
}
