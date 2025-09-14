import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_PRODUCTS_REQUEST} from '../productAction'
import { fetchProductsSuccess,fetchProductsFailure } from '../productAction'
// Worker Saga
function* fetchProductSaga():Generator<any,any,any> {
try {
   const response:Response=yield call(fetch,"https://dummyjson.com/products")
   const data=yield call([response,"json"])
   const convertedPrice=data.products.map((item:any)=>({
    ...item,price:Number((item.price*83).toFixed(2))
   }))
   yield put(fetchProductsSuccess(convertedPrice))
} catch (error:any) {
 yield put(fetchProductsFailure(error.message))   
}
}

// Watcher Saga
export function* watchProductSaga() {
    yield takeLatest(FETCH_PRODUCTS_REQUEST,fetchProductSaga)
}