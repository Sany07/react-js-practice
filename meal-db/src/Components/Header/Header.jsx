import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = (props)=> {
    return (
        <div>
            <ul className='menu-bar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Header;