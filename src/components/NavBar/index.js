import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <span className="logo">Bsquiroz</span>
            <ul className="menu">
                <li>
                    <Link to="/">Iniciar sesión</Link>
                </li>
                <li>
                    <Link to="/register">Registrate</Link>
                </li>
            </ul>
        </nav>
    );
};
