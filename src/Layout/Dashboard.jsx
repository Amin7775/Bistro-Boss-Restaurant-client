import { NavLink, Outlet } from "react-router-dom";
import { FaBookmark, FaCartShopping, FaWallet } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { TbStarsFilled } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="flex min-h-full">
      <div className="w-72 min-h-full bg-orange-400">
        <h1 className="text-3xl font-bold text-wrap px-2 text-center mt-10">Bistro Boss Restaurant</h1>
        <ul className="menu mt-2">
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/userhome"}>
              <FaCartShopping></FaCartShopping> User Home
            </NavLink>
          </li>

          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/reservation"}>
              <FaCalendarAlt></FaCalendarAlt> Reservation
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/paymenthistory"}>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/cart"}>
              <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/addreview"}>
            <TbStarsFilled  /> Add Review
            </NavLink>
          </li>
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/dashboard/userbooking"}>
              <FaBookmark></FaBookmark> My Booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
