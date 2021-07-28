import React from "react";
import { Link } from "react-router-dom";

function AboutNav() {
    return (
        <nav>
            <ul className="nav nav-tabs justify-content-center bg-main-color">
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/" role="button">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link active text-decoration-none" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AboutNav;