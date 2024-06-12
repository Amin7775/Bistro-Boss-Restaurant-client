import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id} = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure=useAxiosSecure()
    const [,refetch] = useCart();
  // console.log(user)
    const handleAddToCart = food =>{
      if(user && user.email){
        // console.log(food)
        const cartItem = {
          menuId : _id,
          email:user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          // console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500
            });
            // refetch to load updated data
            refetch();
          }
        })
      }else{
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please Log in!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from : location}})
          }
        });
      }
    }

    return (
        <div className="card  bg-base-100 shadow-xl border">
            <div className="relative">
        <figure><img src={image} className="w-full" /></figure>
        <p className="bg-neutral-800 opacity-85 text-sm text-white w-2/12 text-center py-2 px-3 absolute top-5 right-5">${price}</p>
            </div>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">{name}</h2>
          <p className="text-[#737373]">{recipe}</p>
          <div className="card-actions justify-center">
            <button
            onClick={()=>handleAddToCart(item)}
            className="btn bg-[#E8E8E8] text-[#BB8506] text-xl font-normal border-0 border-b-2 border-[#BB8506] mt-5 hover:bg-[#111827] hover:border-b-4 hover:border-[#BB8506]">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;