export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const REGISTER_USER="REGISTER_USER"

// action creator for user
export const loginUser = (User: any) => {
    return { type: LOGIN_USER, payload: User }
}

export const logoutUser = () => { return { type: LOGOUT_USER } } 

export const registerUser=(User:any)=>{
    return {type:REGISTER_USER,payload:User}
}