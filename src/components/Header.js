import { LOGO_URL } from "../utils/constants";

const Header = () => {

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
                </ul>
            </div>
        </div>
    );
}

export default Header;