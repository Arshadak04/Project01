import logo from "./../../images/MasterChef.png";
import { useState } from "react";

const Header = () => {
    // let test="Login";
    const [logButton, setlogButton]=useState("LOGIN")

    return (
        <div className="header">
            <div className="logo-head">
                {/* <img className="logo" src={logo} alt="Logo Of My Company" /> */}
                <img className="logo" src={logo} alt="Logo Of My Company" />

            </div>
            <div className="nav-bar">
                <div>Home</div>
                <div>About Us</div>
                <div>Contact</div>
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