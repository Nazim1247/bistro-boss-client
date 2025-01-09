import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({children}) => {
    const {users, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    // console.log(isAdmin,isAdminLoading)

    if(loading || isAdminLoading){
            return <p className="text-center pt-24"><span className="loading loading-spinner loading-lg"></span></p>
        }
    
        if(users && isAdmin){
            return children;
        }
        return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoute;