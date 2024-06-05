import * as actionType from '../constants/productConstants';
  
const getProductsReducer= (state={products: []},action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products: action.payload};
        case actionType.GET_PRODUCT_FAIL:
            return {products: action.payload};
        default:
            return state;
    }
};

export default getProductsReducer;