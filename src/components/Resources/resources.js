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
            <h3>2. King County Recycling </h3>
            <p>King County’s recycling best practices and services. University of Washington is in King County.</p>
              <NavLink to="https://kingcounty.gov/en/dept/dnrp/waste-services/garbage-recycling-compost/services/recycling" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
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
            <h3>3. Hazardous Materials</h3>
            <p>University of Washington resource for getting rid of hazardous and potentially contaminated supplies. </p>
              <NavLink to="https://www.ehs.washington.edu/hazardous-material-disposal-and-recycling" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>4. UW Sustainability</h3>
            <p>University of Washington sustainability student organizations individuals can become involved with.</p>
              <NavLink to="https://sustainability.uw.edu/action/students/groups" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
          <div className="step-image">
            <img src={sustainability} alt="Step 4" />
          </div>
        </div>
        <div className="step">
        <div className="step-image">
            <img src={cherry} alt="Step 5" />
          </div>
          <div className="step-content">
            <h3>5. UW Waste 101</h3>
            <p>University of Washington Waste 101 Learning Course.</p>
              <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSdmfVrk0dR9I1KRfd7yqFtahQa626VOHAxpPh_ZhkGWYrzTCA/viewform" activeClassName="active"> <div className="learn-more"> Learn More </div></NavLink>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>6. UW Recycling Insights</h3>
            <p>Insights into what happens to waster and recycling at the University of Washington.</p>
          </div>
            <div className="step-image">
                <iframe width="560" height="315" src="https://youtube.com/embed/2TfL6c01cBA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    );
  }

  export default resources;


