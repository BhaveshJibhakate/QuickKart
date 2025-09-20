
import { ADD_TO_CART, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./cartActions";
const initialstate = {
    cartItems: []
}

const cartReducer = (state = initialstate, action: any) => {

    switch (action.type) {
        case ADD_TO_CART:
            const exists = state.cartItems.find((item: any) => item.id === action.payload.id)
            if (exists) {
                return {

                    cartItems: state.cartItems.map((item: any) => {
                        if (item.id === action.payload.id) return { ...item, quantity: item.quantity + 1 }
                        else return { ...item }
                    })
                }
            }
            return {
                cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
            }
        case REMOVE_FROM_CART:
            return {
                cartItems: state.cartItems.filter((item: any) => item.id !== action.payload)
            }
        case INCREASE_QUANTITY:
            return {
                cartItems: state.cartItems.map((item: any) => {
                    if (item.id === action.payload) return { ...item, quantity: item.quantity + 1 }
                    else return { ...item }
                })
            }
        case DECREASE_QUANTITY:
            return {
                cartItems: state.cartItems.map((item: any) => {
                    if (item.id === action.payload) return { ...item, quantity: item.quantity - 1 }
                    else return { ...item }
                }).filter((item:any)=>item.quantity>0)
            }
        case CLEAR_CART:
            return initialstate    
        default:
            return state
    }
}
export default cartReducer