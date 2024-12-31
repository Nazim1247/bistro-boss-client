import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {
  const {users,logoutUser} = useContext(AuthContext);

  const handleLogout = ()=>{
    logoutUser()
    .then(()=>{
      toast.success('User logout successfully!')
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

    const links = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
    <li><Link to='/secrete'>Secrete</Link></li>
    {/* {
      users && <>
      <li><Link to='/secrete'>Secrete</Link></li>
      </>
    } */}
    </>
    
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-50 bg-blue-600 text-white max-w-[1280px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>Bistro Boss
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
      users ? <>
      <img title={users?.displayName} className="w-12 h-12 rounded-full mr-2" src={users?.photoURL} alt="" />
      <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
      </> 
      : 
      <>
      <li><Link to='/login'>Login</Link></li>
      </>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;