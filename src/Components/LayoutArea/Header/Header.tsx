import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h2>MIJA-Burger</h2>

            <div className="corner"><NavLink to="/about">About</NavLink></div>
        </div>
        
    );
}

export default Header;
