import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>ReNewCycle Project</h1>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/flashcards">Flashcards</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;