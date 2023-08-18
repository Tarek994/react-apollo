import React from "react";
import { NavLink } from "react-router-dom";
import './header.component.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="main-nav">
                <div className="logo">
                    <NavLink to="/">GraphQl</NavLink>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header