import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* Logo that links to homepage */}
                <Link className="navbar-brand" to="/">Income & Expense Tracker</Link>

                {/* Navbar toggler for mobile responsiveness */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/income">Income</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/expenses">Expenses</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/admin">Admin Panel</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                        <li className="nav-item"><Link className="nav-link btn btn-primary text-white px-3" to="/login">Login/Signup</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;