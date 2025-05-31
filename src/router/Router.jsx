import { createBrowserRouter }  from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import Home from "../pages/landing/Home";
import Product from "../pages/product/Product";
import React from "react";
import ProductDetails from "../pages/product/ProductDetails";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrderSummary from "../pages/summary/OrderSummary";
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
            },
            {
                path: "/product/details",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/summary",
                element: <OrderSummary />
            }
           
        ]
    }

])