import { NavLink, Outlet } from "react-router-dom";
import { FaBookmark, FaCartShopping, FaList, FaUsers, FaWallet } from "react-icons/fa6";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { TbStarsFilled } from "react-icons/tb";

const Dashboard = () => {
  // todo : get isAdmin from database
  const isAdmin = true;

  return (
    <div className="flex min-h-full">
      <div className="w-80 min-h-screen bg-orange-400">
        <h1 className="text-3xl font-bold text-wrap px-2 text-center mt-10">
          Bistro Boss Restaurant
        </h1>
        <ul className="menu mt-2">
          {/* conditional routes based on admin*/}
          {isAdmin ? (
            <>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/userhome"}
                >
                  <FaHome/> Admin Home
                </NavLink>
              </li>

              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/reservation"}
                >
                  <FaList/> Add Items
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/paymenthistory"}
                >
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/cart"}
                >
                  <FaCartShopping></FaCartShopping> Manage Bookings
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/allUsers"}
                >
                  <FaUsers /> All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/userhome"}
                >
                  <FaCartShopping></FaCartShopping> User Home
                </NavLink>
              </li>

              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/reservation"}
                >
                  <FaCalendarAlt></FaCalendarAlt> Reservation
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/paymenthistory"}
                >
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/cart"}
                >
                  <FaCartShopping></FaCartShopping> My Cart
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/addreview"}
                >
                  <TbStarsFilled /> Add Review
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="flex items-center gap-1"
                  to={"/dashboard/userbooking"}
                >
                  <FaBookmark></FaBookmark> My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared routes */}
          <div className="divider"></div>
          <li className="px-3 py-2">
            <NavLink className="flex items-center gap-1" to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-16 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
