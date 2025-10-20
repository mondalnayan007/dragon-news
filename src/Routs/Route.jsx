import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import DetailsLayout from "../Components/Homelayout/DetailsLayout";
import NewsDetails from "../Components/NewsDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../Components/About";
import Career from "../Components/Career";
import Loading from "../Components/Loading";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                Component: Home ,
            },
            {
                path:'/category/:id',
                Component: CategoryNews,
                loader : ()=>fetch('/news.json'),
                 hydrateFallbackElement:<Loading></Loading>
            },
        ]
    },
    {
        path:'/details/:id',
        element:<PrivateRoute>
              <NewsDetails />
             </PrivateRoute>,
        loader : ()=>fetch('/news.json'),
        hydrateFallbackElement:<Loading></Loading>
       
    },
    {
        path:'/auth',
        element: <AuthLayout></AuthLayout>,
        children : [
            {
                path: '/auth/login',
                element:<Login></Login>
            },
            {
                path: '/auth/register',
                element:<Register></Register>
            }
        ]
    },

    {
       path:'/about',
       element:<About></About>  
    },
    {
       path:'/career',
       element:<Career></Career> 
    }

])