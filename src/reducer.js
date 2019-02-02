import { combineReducers } from 'redux';
import products from './modules/Product/ProductReducer.js';
import cart from './modules/Cart/CartReducer.js';

const reducer = combineReducers({
  products,
  cart,
});

export default reducer;
