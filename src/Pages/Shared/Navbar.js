import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {

    return (
        <div className="navbar px-8 pt-4">
            <div className="navbar-start">
                <img className='w-32' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black font-medium">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/portfolio'>Our Portfolio</Link></li>
                    <li><Link to='/ourTeam'>Our Team</Link></li>
                    <li><Link to='/contractUs'>Contract Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='#' id='botton' className="btn primary text-white w-32">Login</a>
            </div>
        </div>
    );
};

export default Navbar;