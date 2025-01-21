import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import IdeasListing from "../pages/ideas-listing/IdeasListing";

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
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
};

export default AppRouter;
