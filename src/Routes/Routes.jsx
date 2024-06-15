import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import UserReservation from "../Pages/Dashboard/UserReservation/UserReservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import UserBooking from "../Pages/Dashboard/UserBooking/UserBooking";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItem/ManageItems";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        }
        ,
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'userhome',
        element:<PrivateRoute><UserHome></UserHome></PrivateRoute>
      },
      {
        path:'reservation',
        element:<PrivateRoute><UserReservation></UserReservation></PrivateRoute>
      },
      {
        path:'paymenthistory',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      },
      {
        path:'cart',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path:'addreview',
        element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path:'userbooking',
        element:<PrivateRoute><UserBooking></UserBooking></PrivateRoute>
      },
      // Admin Routes
      {
        path:'allUsers',
        element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);

export default router;
