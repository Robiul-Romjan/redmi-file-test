import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar bg-primary p-4 sticky-top'>
            <NavLink className="text-white" to="/">Home</NavLink>
            <NavLink className="text-white" to="/shirts">Shirts</NavLink>
            <NavLink className="text-white" to="/about">About</NavLink>
            <NavLink className="text-white" to="/dada">Dada</NavLink>
        </div>
    );
};

export default Navbar;