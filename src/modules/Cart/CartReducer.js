import { ADD_TO_CART, REMOVE_PRODUCT_FROM_CART, REMOVE_ITEM_FROM_CART, CHECKOUT_REQUEST } from './CartActions.js'

import omit from 'lodash/omit';

const initialState = {};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state[action.id]
        ? { ...state, [action.id]: state[action.id] + 1 }
        : { ...state, [action.id]: 1 };

    case REMOVE_PRODUCT_FROM_CART:
      return omit(state, action.id);

    case REMOVE_ITEM_FROM_CART:
      return state[action.id] === 1 
        ? omit(state, action.id)
        : { ...state, [action.id]: state[action.id] - 1};

    case CHECKOUT_REQUEST:
    return initialState;

    default:
      return state;

  }
};
