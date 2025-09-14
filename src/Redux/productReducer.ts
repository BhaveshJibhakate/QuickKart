import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "./productAction";

interface ProductState {
    Allproducts: any[];
    loading: boolean;
    error: string | null;
}
const initialstate: ProductState = {
    Allproducts: [],
    loading: false,
    error: null,
};

const proudctReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, Allproducts: action.payload };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;

    }
};

export default proudctReducer