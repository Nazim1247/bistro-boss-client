import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        loginUser(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success('User Login Successfully !!')
            navigate(from, {replace: true});
        })
    }

    const handleValidCaptcha = e =>{
        e.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }

    return (
        <>
        <Helmet>
            <title>Bistro Boss | Login</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
            <button  onClick={handleValidCaptcha} className="btn">Valid</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center mb-6'>New to this Page? <Link to={'/register'} className='text-red-600'>Register</Link></p>
    </div>
  </div>
</div>
</>
    );
};

export default Login;