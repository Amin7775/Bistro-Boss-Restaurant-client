import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/SharedComponents/Footer/Footer";
import Navbar from "../Pages/SharedComponents/Navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  const OnLogin = location.pathname.includes("login");
  const OnRegister = location.pathname.includes("register");

  return (
    <div className="font-customInter">
      {(OnLogin || OnRegister) || <Navbar></Navbar>}
      <Outlet></Outlet>
      {(OnLogin || OnRegister) || <Footer></Footer>}
    </div>
  );
};

export default Layout;
