import React from "react";
import { NavLink } from "react-router-dom";
import "./resources.css";

import trashcans from '../img/trashcan.jpeg';
import cherry from '../img/cheery.jpeg';
import rainier from '../img/rainer.jpeg';
import sustainability from '../img/sustainaility.jpeg';
// import uw from '../img/uw-recycling-logo.jpeg';
import campusTrash from "../img/campusTrash.jpeg";
import kcRecycle from "../img/kcRecycle.jpeg";

function Resources() {
  return (
    <div className="container">
      <div className="row step">
        <div className="col-md-6 step-image">
          <img src={campusTrash} alt="Step 1" className="img-fluid" />
        </div>
        <div className="col-md-6 step-content">
          <h3>1. UW Recycling Guide</h3>
          <p>University of Washington recycling guide that includes a blog, disposable guide, 
              recycling services, and ways to partner with them.
          </p>
          <NavLink to='https://facilities.uw.edu/services/recycling' className="learn-more">Learn More</NavLink>
        </div>
      </div>
      <div className="row step">
        <div className="col-md-6 step-content">
          <h3>2. King County Recycling </h3>
          <p>King County’s recycling best practices and services. University of Washington is in King County.</p>
          <NavLink to="https://kingcounty.gov/en/dept/dnrp/waste-services/garbage-recycling-compost/services/recycling" className="learn-more">Learn More</NavLink>
        </div>
        <div className="col-md-6 step-image">
          <img src={kcRecycle} alt="Step 2" className="img-fluid" />
        </div>
      </div>
      <div className="row step">
        <div className="col-md-6 step-image">
          <img src={cherry} alt="Step 3" className="img-fluid" />
        </div>
        <div className="col-md-6 step-content">
          <h3>3. Hazardous Materials</h3>
          <p>University of Washington resource for getting rid of hazardous and potentially contaminated supplies.</p>
          <NavLink to="https://www.ehs.washington.edu/hazardous-material-disposal-and-recycling" className="learn-more">Learn More</NavLink>
        </div>
      </div>
      <div className="row step">
        <div className="col-md-6 step-content">
          <h3>4. UW Sustainability</h3>
          <p>University of Washington sustainability student organizations individuals can become involved with.</p>
          <NavLink to="https://sustainability.uw.edu/action/students/groups" className="learn-more">Learn More</NavLink>
        </div>
        <div className="col-md-6 step-image">
          <img src={sustainability} alt="Step 4" className="img-fluid" />
        </div>
      </div>
      <div className="row step">
        <div className="col-md-6 step-image">
          <img src={rainier} alt="Step 5" className="img-fluid" />
        </div>
        <div className="col-md-6 step-content">
          <h3>5. UW Waste 101</h3>
          <p>University of Washington Waste 101 Learning Course.</p>
          <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSdmfVrk0dR9I1KRfd7yqFtahQa626VOHAxpPh_ZhkGWYrzTCA/viewform" className="learn-more">Learn More</NavLink>
        </div>
      </div>
      <div className="row step">
        <div className="col-md-6 step-content">
          <h3>6. Recycle More!</h3>
          <p>Video showing that often recyclable items end up in the trash.</p>
        </div>
        <div className="col-md-6 step-image">
          <iframe width="100%" height="315" src="https://youtube.com/embed/2TfL6c01cBA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resources;
