import React from 'react';
import './index.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Flashcards from './components/Flashcards/flashcards';
import Resources from './components/Resources/resources';
import { Route, Routes } from 'react-router-dom';

function App(prop) {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="flashcards" element={<Flashcards />} />
                    <Route path='resources' element={<Resources />} />
                </Routes>
            </main>
            <footer>
                <p>&copy; 2024 ReNewCycle Project</p>
                <p>INFO 442</p>
            </footer>
        </div>
    );
}

export default App;