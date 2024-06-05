import axios from "axios";
import * as actionTypes from "../constants/productConstants";

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        let response = await axios.get(`${URL}/product`);
        //console.log(response);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
        console.log("kuch nahi aaya:",error);
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
    }
};