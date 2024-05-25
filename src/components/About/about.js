import React from "react";
import { Link } from 'react-router-dom';
// import './about.css'
import uw_recycling_logo from '../img/uw-recycling-logo.jpeg';
import un_sdgs from '../img/un_sdgs.webp';
import "./about.css";


function About() {
  return (
    <>
      <body class="about-body">
      <div>
        <section>
          <h1></h1>
        </section>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-6 d-flex">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            Our team, comprised of students from the University of Washington, is dedicated to informing UW students about recycling.
          </p>
          <p>
            Within our site, users will discover an array of tools such as a quiz and flashcards to enahnce their recycling knowledge.
          </p>
          <img src={uw_recycling_logo} alt="UW Recycling Logo" style={{ width: '40%', height: 'auto' }} />
        </div>
        </div>
        <div className="col-lg-6 mb-6">
        <div className="about-us">
          <h2>UN Sustainable Development Goals</h2>
          <p>
            We focused on how we could prioritzie UN SDG 11 which is creating sustainable cities and communities.
          </p>
          <p>
            We wanted to create a platform that allowed for UW students, staff, and visitors to learn about consumption on our campus
            and ensure they are following our communities guidelines. 
          </p>
          <p>
            <a href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/" style={{ fontWeight: 'bold' }}>Learn more about the UN Sustainable Development Goals here</a>!
            <img src={un_sdgs} alt="UN SDG Goals" style={{ width: '50%', height: 'auto' }} />
          </p>
        </div>
        </div>
      </div>
      </div>
      </body>
    </>
  );
}

export default About;
