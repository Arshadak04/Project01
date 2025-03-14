import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense } from "react";

const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {
    return (
        <div className="main-container flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const appLayout = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about-us",
                element: (
                    <Suspense fallback={<h1 className="text-center text-xl font-bold mt-5">Hello Arshad, This page is Loading...</h1>}>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: "/restaurents/:resid",
                element: <RestaurentMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appLayout} />);




    