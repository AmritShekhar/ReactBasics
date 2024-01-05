import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [ btnName, setBtnName ] = useState("Login");
    console.log("Header Rendered");
    return (
        <div className="header">

            <div className="logo-container">
                <img 
                    className="logo" 
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Add Restaurant</li>
                    <li>Log in</li>
                    <li>Sign up</li>
                    <button className="login" onClick={
                        () => {
                            if(btnName === "Login") {
                                setBtnName("Logout");
                            } else if(btnName === "Logout") {
                                setBtnName("Login");
                            }
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;