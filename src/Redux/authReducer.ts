import { LOGIN_USER } from "./authActions";

const initialstate = {
    user: [{ name: "Bhavesh", username: "bhavesh@gmail.com", password: "12345" }, { name: "Digesh", username: "digesh@gmail.com", password: "12345" }],
    isAuthenticated: false,
    currentUser: null
}

const authReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
        const User= state.user.find((item)=>item.username===action.payload.username && item.password ===action.payload.password)
        if(User){
            return {
                ...state,
                isAuthenticated:true,
                currentUser:User.name
            }
        }else return {...state}

        default:
            return state;
    }

}
export default authReducer;