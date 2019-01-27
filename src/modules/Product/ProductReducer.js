import { GET_PRODUCTS, SORT_BY_NAME_ASC, SORT_BY_PRICE, GO_TO_PAGE } from './ProductActions';

const initialState = {
  productsList: [],
  direction: {
    price: "asc",
    name: "asc",
  },
  currentPage: 1,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, productsList: action.productsData };

    case SORT_BY_NAME_ASC: 
      return {
        ...state,
        productsList: state.productsList.sort((a, b) => {
            if (action.order === "asc") {
              let x = a[action.key].toLowerCase();
              let y = b[action.key].toLowerCase();
              return x < y ? -1 : x > y ? 1 : 0;
            } else {
              let x = b[action.key].toLowerCase();
              let y = a[action.key].toLowerCase();
              return x < y ? -1 : x > y ? 1 : 0;
            }
          }),
        direction: {
          ...state.direction,
          [action.key]: action.order,
        }
      };

    case SORT_BY_PRICE: 
      return {
        ...state,
        productsList: state.productsList.sort((a, b) =>
        action.order === "asc"
          ? parseFloat(a[action.key]) - parseFloat(b[action.key])
          : parseFloat(b[action.key]) - parseFloat(a[action.key])
        ),
        direction: {
          ...state.direction,
          [action.key]: action.order,
        }
      };

    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: action.id,
      };

    default: 
      return state;
  }
}
