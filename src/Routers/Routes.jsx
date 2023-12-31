import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        },
        {
          path: "classes",
          element: <PrivateRoute><Classes></Classes></PrivateRoute>
          
        },
        {
          path: "sign-in",
          element: <Login></Login>
        },
        {
          path: "sign-up",
          element: <Register></Register>
        },
        {
          path: "dashboard",
          element: <Register></Register>
        },
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "allusers",
          element: <AllUsers></AllUsers>
        },
        {
          path: "addclass",
          element: <AddClass></AddClass>
        }
      ]
    }
  ]);