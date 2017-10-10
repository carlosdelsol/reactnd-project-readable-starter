import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-default">
        <div className="container">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
            </div>
        </div>
    </nav>
);

export default NavBar;