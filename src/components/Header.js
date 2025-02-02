import logo from "./../../images/MasterChef.png";

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;