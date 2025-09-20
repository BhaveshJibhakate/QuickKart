import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./authActions";

const initialstate = {
    user: [{ name: "Bhavesh Jibhakate", username: "bhavesh@gmail.com", password: "12345" }, { name: "Digesh Jibhakate", username: "digesh@gmail.com", password: "12345" }],
    isAuthenticated: false,
    currentUser: null,
    error:null
}

const authReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
        const User= state.user.find((item)=>item.username===action.payload.username && item.password ===action.payload.password)
        if(User){
            return {
                ...state,
                isAuthenticated:true,
                currentUser:User.name,
                error:null
            }
        }else return {...state,error:"Invalid username or password"}
        case LOGOUT_USER:
            return {
                ...state,isAuthenticated:false,currentUser:null
            }
        case REGISTER_USER:
            return {
                ...state,user:[...state.user,action.payload]
            }
        default:
            return state;
    }

}
export default authReducer;