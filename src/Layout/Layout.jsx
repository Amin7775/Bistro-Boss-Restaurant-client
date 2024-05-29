import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedComponents/Footer/Footer";
import Navbar from "../Pages/SharedComponents/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="font-customInter">
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;