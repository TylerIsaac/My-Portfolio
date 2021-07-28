import React from "react";
import { Link } from "react-router-dom";

function ContactNav() {
    return (
        <nav>
            <ul className="nav nav-tabs justify-content-center bg-main-color">
                <li className="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/" role="button">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/about">About</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link text-decoration-none text-white" to="/projects">Projects</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link active text-decoration-none" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ContactNav;