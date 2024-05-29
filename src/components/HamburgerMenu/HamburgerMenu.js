import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
    return (
        <Menu right>
            <Link to="/" className="menu-item">About</Link>
            <Link to="/quiz" className="menu-item">Quiz</Link>
            <Link to="/resources" className="menu-item">Resources</Link>
        </Menu>
    );
}

export default HamburgerMenu;