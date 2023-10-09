import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorHandle from "../components/ErrorHandle/ErrorHandle";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../components/Services/ServiceDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Tickets from "../Pages/Tickets/Tickets";
import ProtectedRoute from "./ProtectedRoute";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<ErrorHandle></ErrorHandle>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<SignIn></SignIn>
            },
            {
                path:"/register",
                element:<SignUp></SignUp>
            },
            {
                path:"/:id",
                element:<ProtectedRoute><ServiceDetails></ServiceDetails></ProtectedRoute>,
                loader: ()=> fetch("services.json")
            },
            {
                path:"/contact",
                element:<ProtectedRoute><ContactUs></ContactUs></ProtectedRoute>
            },
            {
                path:"/tickets",
                element:<ProtectedRoute><Tickets></Tickets></ProtectedRoute>
            }
        ]
    }
])

export default Routes;