import { useEffect } from "react";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart] = useCart();

  //   calculate total price
  let totalPrice = cart.reduce((sum, index) => {
    return sum + index.price;
  }, 0);

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
        <button className="btn px-10 py-1 bg-neutral-800 text-white text-xl font-normal h-full hover:bg-orange-400">PAY</button>
      </div>
      {/* table content */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {cart?.map((item,index) => (
              <tr key={item._id}>
                <th>
                  {index+1}
                </th>
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
                <td>{item?.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
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
