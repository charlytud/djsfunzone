import { combineReducers } from 'redux';
import supplier from './supplier_reducer';
import category from './category_reducer';
import product from './product_reducer';

const rootReducer = combineReducers({
    supplier,
    category,
    product
});

export default rootReducer;