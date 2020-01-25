import { GET_PRODUCTS, GET_PRODUCT_BY_ID, DELETE_PRODUCT, PRODUCT_LOADING } from "../actions/types";
const initialState = {
  products: [],
  product: {},
  loading: true,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products.filter(product => product._id !== action.payload)],
        loading: false
      }
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
