import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router";





const AppLayout=()=>{
    return(
        <div className="main">
        <Header/>
        <Outlet/>
        <Footer/>

        </div>
    )
}

const appLayout=createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/> ,
        children: [
            {
                path: "/",
                element:<Body/> ,
            },
            {
                path: "/about-us",
                element:<AboutUs/> ,
            },
            {
                path: "/contact-us",
                element:<ContactUs/> ,
            },
            {
                path: "/restaurents/:resid",
                element:<RestaurentMenu/> ,
            },
        ],

        errorElement:<Error/>
    },
   
])
 
    const root=ReactDOM.createRoot(document.getElementById("root"))
    // root.render(<AppLayout/>);
    root.render(<RouterProvider router={appLayout}/>);



    