import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
                <div className="container px-5">
                    <div>
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/">CYBER GUARDIAN</Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/whats-new">What's New</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/knowledge-center">Knowledge Centre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/q-and-a">Q&A</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/quiz">Quiz</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/useful-resources">Useful Resources</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
