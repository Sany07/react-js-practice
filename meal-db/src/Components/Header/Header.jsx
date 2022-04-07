import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import CustomLink from '../../CustomLink';


const Header = (props)=> {
    return (
        <div>
            <ul className='menu-bar my-5'>
                <li><CustomLink to="/">Home</CustomLink></li>
                <li><CustomLink to="/search">Search</CustomLink></li>
                <li><CustomLink to="/about">About</CustomLink></li>
                <li><CustomLink to="/contact">Contact</CustomLink></li>
            </ul>
        </div>
    );
}

export default Header;