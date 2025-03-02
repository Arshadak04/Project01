import logo from "./../../images/MasterChef.png";
import { useState ,useContext} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../custom_hooks/useOnlineStatus";
import UserContext from "../context/UserContext";

const Header = () => {
    const OnlineStatus = useOnlineStatus();
    const [logButton, setLogButton] = useState("LOGIN");

    const {loggedInUser}=useContext(UserContext);
    // console.log(loggedInUser)

    return (
        <header className="flex justify-between items-center bg-white shadow-md px-6 py-4">
            {/* Logo Section */}
            <div className="w-24">
                <img className="w-full" src={logo} alt="Company Logo" />
            </div>

            {/* Navigation Section */}
            <nav className="flex items-center space-x-6">
                <span className="text-sm font-medium">
                    Online Status: {OnlineStatus ? "✅" : "🔴"}
                </span>

                <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
                <Link to="/contact-us" className="text-gray-700 hover:text-blue-600 transition">Contact Us</Link>

                <div className="relative group">
                    <button className="text-gray-700 hover:text-blue-600 transition">More...</button>
                    {/* Dropdown can be added here */}
                </div>

                <button
                    onClick={() => setLogButton(logButton === "LOGIN" ? "LOGOUT" : "LOGIN")}
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                    {logButton}
                </button>

                <div>{loggedInUser}</div>
            </nav>
        </header>
    );
};

export default Header;
