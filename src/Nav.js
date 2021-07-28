import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-dark">
            <ul className="nav justify-content-center bg-dark">
                <li className="">
                    <Link className="nav-link text-decoration-none" to="/" role="button">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;