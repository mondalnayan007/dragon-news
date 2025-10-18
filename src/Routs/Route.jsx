import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import DetailsLayout from "../Components/Homelayout/DetailsLayout";
import NewsDetails from "../Components/NewsDetails";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                Component: Home
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
        element:<DetailsLayout></DetailsLayout>,
        children: [
            {
                path: "", // nested route
                element: <NewsDetails />
            }
    ],
    }

])