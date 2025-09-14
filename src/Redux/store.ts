import { createStore,combineReducers,applyMiddleware } from "redux";
import proudctReducer from "./productReducer";
import cartReducer from "./cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { watchProductSaga } from "./Saga/productSaga";
import createSagaMiddleware from "redux-saga";


const rootReducer=combineReducers({
    products:proudctReducer,
    cart:cartReducer
})
const sagaMiddleware=createSagaMiddleware()

const store=createStore(rootReducer,undefined,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchProductSaga)  // sagamiddleware should be run after mounting on store



export default store

