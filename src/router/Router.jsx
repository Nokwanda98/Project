import { createBrowserRouter }  from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import Home from "../pages/landing/Home";
import Product from "../pages/product/Product";
import React from "react";
//import Header from "../static/Header";
//import Footer from "../static/Footer";
//import WebLayout from "../layout/WebLayout";


export const mainRoute = createBrowserRouter([
    {
        element: <WebLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "/product",
                element: <Product />
            }
        ]
    }

])