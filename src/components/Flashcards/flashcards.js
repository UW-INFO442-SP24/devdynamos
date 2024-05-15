import React from 'react';
import ReactDom from 'react-dom/client';
// import '.src/style.css'
// import 'bootstrap/dist/css/bootstrap.css'
// Testing git

function Card(props) {
    return (
      <div className="card">
        <a href={props.link}>
          <img src={props.image} className="card-img-top" alt="Study Spot Image" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="attributes">
              {props.attributes.map((attribute, index) => (
                <div key={index} className="attribute-bubble">{attribute}</div>
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  }
  
  function Flashcards() {
    const facts = [
      { title: "Is plastic recyclable"}
    ];
  
    return (
      <div>
        <header>
          <nav>
            <h1>ReNewCycle Project</h1>
            <ul className="nav-links">
              <li><a href="about.js">About</a></li>
              <li><a href="flashcards.js">Flashcards</a></li>
              <li><a href="quiz.js">Quiz</a></li>
              <li><a href="resources.js">Resources</a></li>
              {/* likely need to fix all of this to fit JS */}
            </ul>
          </nav>
        </header>
  
        <div className="index-container">
          <h1>Learn about how to recycle at UW!</h1>
          <div className="search-bar">
            <label htmlFor="filter">Search:</label>
            <input type="text" id="filter" />
          </div>
  
          {/* <div className="card-container">
            {studySpots.map((spot, index) => (
              <Card key={index} title={spot.title} link={spot.link} image={spot.image} attributes={spot.attributes} />
            ))}
          </div> */}
        </div>
  
        <footer>
          <p>&copy; 2024 ReNewCycle Project</p>
          <p>Info 442</p>
        </footer>
      </div>
    );
  }
  
  export default Flashcards;