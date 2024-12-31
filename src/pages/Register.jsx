
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
const Register = () => {
    const navigate = useNavigate();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = ((data) => {

        createUser(data.email, data.password)
        .then(result =>{
            console.log(result.user)

            updateUserProfile(data.name, data.photo)
            .then(()=>{
                toast.success('Register Done Successfully!!')
                navigate('/')
            })
            .catch(err =>{
                console.log(err.message)
            })
        })
    })

    // const handleSubmit = e =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name,email,password)
    // }
    return (
        <>
        <Helmet>
            <title>Bistro Boss | Register</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register('name',{ required: true })}  name="name" placeholder="name" className="input input-bordered" required />
          {errors.name && <span className='text-red-600'>Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" {...register('photo',{ required: true })}  name="photo" placeholder="photo" className="input input-bordered" required />
          {errors.photo && <span className='text-red-600'>Photo is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register('email',{ required: true })} name="email" placeholder="email" className="input input-bordered" required />
          {errors.email && <span className='text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register('password',{ required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/ })} name="password" placeholder="password" className="input input-bordered" required />
          {errors.password && <span className='text-red-600'>Password must be 6 characters long</span>}
          {errors.password && <span className='text-red-600'>Password must have one uppercase, one lowercase, and one special character required</span>}
        </div>
        <div className="form-control mt-6">
          <input type='submit' value='Register' className="btn btn-primary"/>
        </div>
      </form>
      <p className='text-center mb-6'>Already Have an Account? <Link to={'/login'} className='text-red-600'>Login</Link></p>
    </div>
  </div>
</div>
</>
    );
};

export default Register;