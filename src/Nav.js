import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="nav nav-pills justify-content-center bg-dark">
                <li className="nave-item">
                    <Link className="nav-link text-decoration-none text-white"to="/">Home</Link>
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