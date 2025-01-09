import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (err) {
        return Promise.reject(err);
    })
    // interceptor 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;

        if (status === 401 || status === 403) {
            await logoutUser();
            navigate('/login')
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;