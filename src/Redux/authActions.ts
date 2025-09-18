export const LOGIN_USER="LOGIN_USER"

// action creator for user
export const loginUser=(User:any)=>{
    return {type:LOGIN_USER,payload:User}
}