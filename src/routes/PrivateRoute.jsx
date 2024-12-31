import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {users,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className="text-center pt-24"><span className="loading loading-spinner loading-lg"></span></p>
    }

    if(users){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;