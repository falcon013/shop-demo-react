import {GET_PRODUCTS, GET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT} from "./actionsTypes";
import axios from "axios";

const API_BASE = "http://localhost:3100";

// ActionCreatorThunk
export const getProductsAction = () => {
    return async function (dispatch) {
        const response = await axios
            .get(`${API_BASE}/products/`)
        return dispatch({
            type: GET_PRODUCTS,
            data: response.data.data
        })
    }
}
export const getProductAction = (id) => {
    return async function (dispatch) {
        const response = await axios
            .get(`${API_BASE}/products/${id}`)
        return dispatch({
            type: GET_PRODUCT,
            data: response.data.data
        })
    }
}

export const addProductAction = (product) => {
    return async function (dispatch) {
        const response = await axios
            .get(`${API_BASE}/products/create`)
        return dispatch({
            type: ADD_PRODUCT,
            payload: response.data.data
        })
    }
}

export const deleteProductAction = (id) => {
    return async function (dispatch) {
        const response = await axios
            .delete(`${API_BASE}/products/delete/${id}`)
        return dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    }
}
