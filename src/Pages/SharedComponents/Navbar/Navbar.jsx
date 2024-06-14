import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
// import useCarts from "../../../hooks/useCarts";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const [cart] = useCart()
  // const [cart]= useCarts()

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/menu"}>OUR MENU</Link>
      </li>
      <li>
        <Link to={`/order/Salad`}>OUR FOODS</Link>
      </li>
      <li>
        <Link to={"/"}>CONTACT US</Link>
      </li>
      {
        user && 
        <li>
        <Link to={"dashboard"}>DASHBOARD</Link>
      </li>
      }
      {user && (
        <li>
          <Link to={'/dashboard/cart'}>
            <button className="flex items-center">
              <FaCartShopping className=" text-xl"></FaCartShopping>
              <div className="ml-1 badge ">+{cart.length}</div>
            </button>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-black bg-opacity-25 fixed z-10 w-full text-white">
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className="mr-3">{user.email}</p>
              <Link to={"/"}>
                <p onClick={() => logOut()} className="btn">
                  Logout
                </p>
              </Link>
            </>
          ) : (
            <>
              <p className="mr-3">Guest</p>
              <Link to={"/login"}>
                <p className="btn">Login</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
