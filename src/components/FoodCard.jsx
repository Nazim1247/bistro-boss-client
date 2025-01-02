import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";


const FoodCard = ({ item }) => {
  const axiosSecure = useAxiosSecure()
  const { name, price, image, recipe, _id  } = item || {};
  const navigate = useNavigate();
  const location = useLocation();
  const { users } = useAuth();
  const [,refetch] = useCart();

  const handleFood = () => {
    if (users && users.email) {
      // console.log(users.email, food)
      // send item to database
      const cartItem = {
        menuId: _id,
        email: users?.email,
        name,
        image,
        price,
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        toast.success('Add to cart successfully !')
        // refetch cart
        refetch()
      })
    }
    else {
      Swal.fire({
        title: "Are you not logged in?",
        text: "please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, go to login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute top-12 right-12 px-2 rounded-md">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleFood} className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard