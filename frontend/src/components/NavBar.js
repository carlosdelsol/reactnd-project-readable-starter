import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/ti/home'

const NavBar = () => (
    <nav className="navbar navbar-default">
        <div className="container">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/"><HomeIcon size={30}/></Link>
            </div>
        </div>
    </nav>
);

export default NavBar;