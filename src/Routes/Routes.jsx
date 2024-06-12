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
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'userhome',
        element:<UserHome></UserHome>
      },
      {
        path:'reservation',
        element:<UserReservation></UserReservation>
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'addreview',
        element:<AddReview></AddReview>
      },
      {
        path:'userbooking',
        element:<UserBooking></UserBooking>
      },
      
    ]
  }
]);

export default router;
