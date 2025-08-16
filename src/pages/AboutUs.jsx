import React from "react";
import "../index.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-image">
          <img src="/images/about/plane-cargo.jpg" alt="Cargo Plane" />
        </div>
        <div className="about-text">
          <h4>[WHAT WE DO]</h4>
          <h2>African Reach, Global Solutions</h2>
          <p>
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage and local
            expertise.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
