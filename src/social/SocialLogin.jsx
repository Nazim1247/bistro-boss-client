import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
                toast.success('Login successfully!')
            })
        })
    }
    return (
        <div>
            <button type="button" onClick={handleGoogleLogin} className="btn w-full mb-2"><FaGoogle /> Continue With Google</button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;