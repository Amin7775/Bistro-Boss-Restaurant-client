import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            this is root
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;