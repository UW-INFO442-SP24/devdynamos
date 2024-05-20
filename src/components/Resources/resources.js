import React from "react";
import "./resources.css";

import trashcans from '../img/trashcan.jpeg';

const resources = () => {
    return (
      <div>
        <section className="section">
          <div className="container overview-container">
            <div className="row align-items-center">
              <div className="col-lg-6 overview-text">
                <h2 className="section-heading">Resources</h2>
                <a href="https://facilities.uw.edu/services/recycling" target="_blank" aria-label="Click for UW recycling guide">UW Recycling Guide</a>
                <p>University of Washington recycling guide that includes a blog, disposable guide, 
                recycling services, and way to partner with them.
                </p>
              </div>
              <div className="col-lg-6 overview-img-container">
                <img src={trashcans} alt="Trash cans at UW" class="img-fluid overview-img" />
              </div>
            </div>
          </div>
  
        </section>
  
      </div>
  
  
    )
  }
  
  export default resources;


