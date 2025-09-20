import { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children:JSX.Element;
}

const ProtectedRoute:React.FC<ProtectedRouteProps>=({children})=>{
    const isAllowed=useSelector((state:any)=>state.auth.isAuthenticated)
    return isAllowed ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;