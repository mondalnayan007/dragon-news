import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import DetailsLayout from "../Components/Homelayout/DetailsLayout";
import NewsDetails from "../Components/NewsDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/home',
                Component: CategoryNews ,
            },
            {
                path:'/category/:id',
                Component: CategoryNews,
                loader : ()=>fetch('/news.json')
            },
        ]
    },
    {
        path:'/details/:id',
        element:<NewsDetails />,
        loader : ()=>fetch('/news.json')
       
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

])