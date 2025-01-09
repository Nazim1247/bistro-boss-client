
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {users} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [users?.email, 'isAdmin'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${users.email}`);
            // console.log(res.data)
            return res.data?.admin;
        }
    })
    // console.log(isAdminLoading)
    return [isAdmin, isAdminLoading]
};

export default useAdmin;