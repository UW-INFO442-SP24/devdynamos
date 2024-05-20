import React from "react";
import { NavLink } from "react-router-dom";
import "./resources.css";

import trashcans from '../img/trashcan.jpeg';
import cherry from '../img/cheery.jpeg';
import rainer from '../img/rainer.jpeg';
import sustainability from '../img/sustainaility.jpeg';
import uw from '../img/uw-recycling-logo.jpeg';


function resources() {
    return (
      <div>
          <div className="step">
          <div className="step-image">
            <img src={uw} alt="Step 1" />
          </div>
          <div className="step-content">
            <h3>1. UW Recycling Guide</h3>
            <p>University of Washington recycling guide that includes a blog, disposable guide, 
                recycling services, and way to partner with them.
            </p>
              <NavLink to='https://facilities.uw.edu/services/recycling' activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>2. Find Local Infrastructures </h3>
            <p>To find resources such as the nearest non-profit organizations near you, libraries, educational institutions and skill centers, 
              you can go to the Interactive Map tab and filter for which infrastructures you would like to find. </p>
              <NavLink to="/interactivemap" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
          <div className="step-image">
            <img src={trashcans} alt="Step 2" />
          </div>
        </div>
        <div className="step">
          <div className="step-image">
            <img src={cherry} alt="Step 3" />
          </div>
          <div className="step-content">
            <h3>3. Budget Your Program</h3>
            <p>To access helpful budgeting tips for planning your program, simply navigate to the budgeting page. 
              There, you'll find valuable insights to assist you in effectively managing your community initiatives.</p>
              <NavLink to="/funding" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>4. Enhance Your Leadership Skills</h3>
            <p>Explore workshops and relevant articles on expanding your leadership skills on our Practitioner Toolkit page. Access insights, connect with organizations, and 
              learn effective community service strategies.</p>
              <NavLink to="/practitioner" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
          <div className="step-image">
            <img src={rainer} alt="Step 4" />
          </div>
        </div>
      </div>
    );
  }

  export default resources;


