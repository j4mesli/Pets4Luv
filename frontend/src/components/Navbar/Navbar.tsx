import './Navbar.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    

    return (
        <div className='navbar'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Adopt">Adopt</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                <NavLink to="/Contribute">Contribute</NavLink>
                <NavLink to="/Services">Services</NavLink>
                <NavLink to="/Donate">Donate</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;