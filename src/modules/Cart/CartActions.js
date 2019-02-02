export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';

// Export Actions

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    id,
  };
};

export const checkoutRequest = () => {
  return {
    type: CHECKOUT_REQUEST,
  };
}
