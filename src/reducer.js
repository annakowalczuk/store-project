import { combineReducers } from 'redux';
import products from './modules/Product/ProductReducer.js';

const reducer = combineReducers({
  products,
});

export default reducer;
