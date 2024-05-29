import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './header.css';

function Header() {
    return (
        <header>
            <h1>ReNewCycle Project</h1>
            <HamburgerMenu />
        </header>
    );
}

export default Header;