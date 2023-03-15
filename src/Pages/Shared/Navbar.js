import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black font-normal">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Our Portfolio</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href='#'>Contract Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='#' className="btn bg-red-600 text-white w-32">Login</a>
            </div>
        </div>
    );
};

export default Navbar;