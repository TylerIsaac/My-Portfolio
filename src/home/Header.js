import React from "react";
import linkedin from "../img/linkedin.jpg";
import github from "../img/github.jpg";
import email from "../img/email.jpg";

function Header() {

    return (
        <header className="bg-white pt-5 pb-5">
            <div className="container-fluid text-dark">
                
                <div className="text-center pt-5 pb-5">
                    <h1 className="display-1">Tyler Isaac</h1>
                    <p className="lead">Frontend Developer</p>
                    <div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/tyler-isaac/">
                                    <img src={linkedin} className="gitcon rounded-circle shadow" alt="linekdin icon"/>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link " href="https://github.com/TylerIsaac">
                                    <img src={github} className="gitcon rounded-circle shadow" alt="linekdin icon"/>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link " href="https://github.com/TylerIsaac">
                                    <img src={email} className="gitcon rounded-circle shadow" alt="linekdin icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default Header;