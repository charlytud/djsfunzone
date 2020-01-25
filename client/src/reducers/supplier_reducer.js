import { GET_SUPPLIERS, GET_SUPPLIER_BY_ID, DELETE_SUPPLIER, SUPPLIER_LOADING } from "../actions/types";
const initialState = {
  suppliers: [],
  supplier: {},
  loading: true,
  errors: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SUPPLIER_BY_ID:
      return {
        ...state,
        supplier: action.payload,
        loading: false
      };
    case GET_SUPPLIERS:
      return {
        ...state,
        suppliers: action.payload,
        loading: false
      };
    case DELETE_SUPPLIER:
      return {
        ...state,
        suppliers: [...state.suppliers.filter(supplier => supplier._id !== action.payload)],
        loading: false
      }
    case SUPPLIER_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
