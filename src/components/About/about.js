import React from "react";
import { Link } from 'react-router-dom';
// import './index.css'

function About() {
  return (
    <>
      <div>
        <section>
          <h2>Welcome to ReNewCycle Project</h2>
        </section>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Our team, comprised of students from the University of Washington, is dedicated to informing UW students about recycling.
        </p>
        <p>
          Within our site, users will discover an array of tools such as a quiz and flashcards to enahnce their recycling knowledge.
        </p>
      </div>
    </>
  );
}

export default About;

