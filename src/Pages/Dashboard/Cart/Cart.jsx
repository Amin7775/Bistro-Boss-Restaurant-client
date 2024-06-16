import { useEffect } from "react";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  const axiosSecure = useAxiosSecure();

  //   calculate total price
  let totalPrice = cart.reduce((sum, index) => {
    return sum + index.price;
  }, 0);

  //   handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).then(() => {
              refetch();
            });
          } else {
            Swal.fire({
              title: "Couldn't Delete!",
              text: "There has been an error deleting your cart item",
              icon: "error",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      {/* page header */}
      <SectionTitle
        heading={"Wanna add more ?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      {/* items header */}
      <div className="flex justify-between mb-5">
        <h3 className="text-3xl">Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: {totalPrice}</h3>
        <Link to={'/dashboard/payment'}>
        <button className="btn px-10 py-1 bg-neutral-800 text-white text-xl font-normal h-full hover:bg-orange-400">
          PAY
        </button>
        </Link>
      </div>
      {/* table content */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-neutral-100 text-lg">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {cart?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                {/* image */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.name}</div>
                    </div>
                  </div>
                </td>
                {/* price */}
                <td>${item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
