import React from 'react';
import './Header.css';

const Header = (props)=> {
    return (
        <div>
            <ul className='menu-bar'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Meals</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;