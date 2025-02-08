import logo from "./../../images/MasterChef.png";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../custom_hooks/useOnlineStatus";

const Header = () => {
    // let test="Login";
    const OnlineStatus=useOnlineStatus();
    const [logButton, setlogButton]=useState("LOGIN")

    return (
        <div className="header">
            <div className="logo-head">
                {/* <img className="logo" src={logo} alt="Logo Of My Company" /> */}
                <img className="logo" src={logo} alt="Logo Of My Company" />

            </div>
            <div className="nav-bar">
            
            <div>OnlineStatus: {OnlineStatus?"✅":"🔴"}</div>

                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/about-us"}>About Us</Link></div>
                <div><Link to={"/contact-us"}>Contact Us</Link></div>
                <div>More...</div>
                <button onClick={
                    ()=>{
                        
                        logButton==="LOGIN"?setlogButton("LOGOUT"):setlogButton("LOGIN")
                        

                    }
                }>{logButton}</button>
            </div>
        </div>
    );
};

export default Header;