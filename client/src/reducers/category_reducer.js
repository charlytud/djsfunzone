import { GET_CATEGORIES, GET_CATEGORY_BY_ID, DELETE_CATEGORY, CATEGORY_LOADING } from "../actions/types";
const initialState = {
  categories: [],
  category: {},
  loading: true,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_BY_ID:
      return {
        ...state,
        category: action.payload,
        loading: false
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories.filter(category => category._id !== action.payload)],
        loading: false
      }
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
