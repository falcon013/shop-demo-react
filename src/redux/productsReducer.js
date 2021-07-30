import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS} from "./actionsTypes";


const initialState = {
    products: [],
    isLoadingProducts: true,

    product: {},
    isLoadingProduct: true

};
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log({...state})
            return {
                ...state,
                products: action.data,
                isLoadingProducts: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.data,
                isLoadingProduct: false

            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCT:
            console.log({...state})
            return {
                ...state,
                products: state.products.filter(product => product.id !== product.payload)
                // products: [
                //     ...state.products.filter(product => product.id !== product.payload)
                // ]
            }
        default:
            return state;
    }
}
export default productsReducer
