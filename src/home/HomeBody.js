import React from "react";
import decoderRing from "../img/decoder-ring.png";
import thinkfulbnb from "../img/thinkfulbnb.png";

const HomeBody = () => {
    return (
        <main className="container">
            <div className="mb-4">
                <div className="card shadow text-center">
                    <div className="card-header">
                        <h2 className="display-6">About Me</h2>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Hi, I'm Tyler!</h4>
                        <p className="lead justify">
                            Passionate Frontend developer who's proficient in HTML, 
                            CSS, and JavaScript. Creates seamless UX and UI with 
                            creative but functional designs. I also have five years 
                            of experience in sales, which helps me effectively 
                            work in a team environment. I have an interest in design, 
                            which ensures that my websites are both beautiful and 
                            user-friendly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="display-6 text-center">Recent Projects</h2>
                    </div>
                    <div className="card-body row">
                        <div className="card-group">
                            <div className="card col" >
                                <img src={decoderRing} className="img-fluid" alt="decoder-ring" />
                                <hr/>
                                <div className="card-body">
                                    <h5 className="card-title">Project Decoder Ring</h5>
                                    <p className="lead">Designed an application that will encode and decode messages</p>
                                    <h6>Skills Used</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">JavaScript</li>
                                        <li className="list-group-item">HTML</li>
                                        <li className="list-group-item">CSS</li>
                                        <li className="list-group-item">Mocha</li>
                                        <li className="list-group-item">Chai</li>
                                    </ul>
                                    <div className="mt-2">
                                        <a href="https://tylerisaac.github.io/Project_Decoder_Ring_1/" className="btn btn-sm bg-main-color">Demo</a>
                                        <a href="https://github.com/TylerIsaac/Project_Decoder_Ring_1" className="btn btn-sm bg-main-color ms-2">Repo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card col">
                                <img src={thinkfulbnb} className="img-fluid" alt="thinkfulbnb" />
                                <hr/>
                                <div className="card-body">
                                    <h5>Thinkfulbnb</h5>
                                    <p className="lead">Stylized a website that's like Airbnb using mobile-first design</p>
                                    <h6>Skills Used</h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">HTML</li>
                                        <li className="list-group-item">CSS</li>
                                        <li className="list-group-item">Flexbox</li>
                                        <li className="list-group-item">Media Queries</li>
                                        <li className="list-group-item">Mobile-first design</li>
                                    </ul>
                                    <div className="mt-2">
                                            <a href="https://tylerisaac.github.io/starter-thinkfulbnb/" className="btn btn-sm bg-main-color">Demo</a>
                                            <a href="https://github.com/TylerIsaac/starter-thinkfulbnb" className="btn btn-sm bg-main-color ms-2">Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomeBody;