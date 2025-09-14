export const FETCH_PRODUCTS_REQUEST="FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE="FETCH_PRODUCTS_FAILURE"


export const fetchProductsRequest=()=>({
    type:FETCH_PRODUCTS_REQUEST
})

export const fetchProductsSuccess=(products:any[])=>({
    type:FETCH_PRODUCTS_SUCCESS,
    payload:products
})

export const fetchProductsFailure=(error:string)=>({
    type:FETCH_PRODUCTS_FAILURE,
    payload:error
})