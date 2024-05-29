import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // importing Bootstrap CSS
import Header from './components/Header/header';
import About from './components/About/about';
import Resources from './components/Resources/resources';
import QuizComponent from './components/Quiz/quiz';
import Flashcards from './components/Flashcards/flashcards';
import { Route, Routes } from 'react-router-dom';
import './index.css';


function App(prop) {
    return (
        <div className="App">
            <Header />
            <div className="content">
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path='resources' element={<Resources />} />
                    <Route path="quiz" element={<QuizComponent />} />
                    <Route path="flashcards" element={<Flashcards />} />
                </Routes>
            </main>
            </div>
            <footer>
                <p>&copy; 2024 ReNewCycle Project</p>
                <p>INFO 442</p>
            </footer>
        </div>
    );
}

export default App;