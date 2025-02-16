import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import IdeasListing from "../pages/ideas-listing/IdeasListing";
import ProductDetail from "../pages/product-detail/ProductDetail";
import UserProfile from "../pages/user-profile/UserProfile";
import UserDashboard from "../pages/user-dashboard/UserDashboard";

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
                    path:'ideas-listing',
                    element:<IdeasListing/>
                },
                {
                    path:'product-detail',
                    element:<ProductDetail/>
                },
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
        }
    ])
  return <RouterProvider router={router}/>
};

export default AppRouter;
