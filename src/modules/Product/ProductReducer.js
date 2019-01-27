import { GET_PRODUCTS, SORT_BY_NAME_ASC, SORT_BY_PRICE } from './ProductActions';

const initialState = {
  productsList: [],
  direction: {
    price: "asc",
    name: "asc",
  },
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, productsList: action.productsData };

    case SORT_BY_NAME_ASC: 
      return {
        productsList: state.productsList.sort((a, b) => {
          if (state.direction[action.order] === "asc") {
            let x = a[action.key].toLowerCase();
            let y = b[action.key].toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          } else {
            let x = b[action.key].toLowerCase();
            let y = a[action.key].toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          }
        }
      ),
        direction: {
          [action.key]: state.direction[action.key] === "asc" ? "desc" : "asc"
        }
      };

    case SORT_BY_PRICE: 
      return {
        productsList: state.productsList.sort((a, b) =>
        state.direction[action.key] === "asc"
          ? parseFloat(a[action.key]) - parseFloat(b[action.key])
          : parseFloat(b[action.key]) - parseFloat(a[action.key])
        ),
        direction: {
          [action.key]: state.direction[action.key] === "asc" ? "desc" : "asc"
        }
      };

    default: 
      return state;
  }
}
