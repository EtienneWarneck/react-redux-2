import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    const activeStyle = { color: "orange" }
    return (
        <div>
            <NavLink to="/" activestyle={activeStyle}>HomePage</NavLink>
            {" | "}
            <NavLink to="/about" activestyle={activeStyle}>About</NavLink>

        </div>
    );
}

export default Header;