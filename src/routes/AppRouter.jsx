import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import IdeasListing from "../pages/ideas-listing/IdeasListing";
import ProductDetail from "../pages/product-detail/ProductDetail";
import UserProfile from "../pages/user-profile/UserProfile";
import UserDashboard from "../pages/user-dashboard/UserDashboard";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import AddProduct from "../pages/add-new-product/AddProduct";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'ideasListing/:categoryId',
                    element:<IdeasListing/>
                },
                {
                    path:'productDetail',
                    element:<ProductDetail/>
                },
                {
                    path:'addProduct',
                    element:<AddProduct/>
                }
            ],
        },
        {
            path:'user-dashboard',
            element:<UserDashboard/>,
            children:[
                {
                    path:'user-profile',
                    element:<UserProfile/>
                }
            ]
        },
        {
            path:'signup',
            element:<SignUp/>
        },
        {
            path:'login',
            element:<Login/>
        }
    ])
  return <RouterProvider router={router}/>
};

export default AppRouter;
