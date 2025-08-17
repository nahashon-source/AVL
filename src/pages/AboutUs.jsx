// src/pages/AboutUs.jsx
import React from "react";
import "../index.css";

export default function AboutUs() {
  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <img
          src="/images/about/73e1499ce2be1001cc4f0c82433f267f17181cca.png"
          alt="Airplane cargo"
          className="aboutus-hero-img"
        />
        <div className="aboutus-hero-overlay">
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="aboutus-whatwedo">
        <div className="aboutus-whatwedo-img">
          <img src="/images/about/e339f6d9083475e5654a10987ad2d38dead9cfea.jpg" alt="Cargo loading" />
        </div>
        <div className="aboutus-whatwedo-text">
          <h4>[WHAT WE DO]</h4>
          <h2>African Reach, Global Solutions</h2>
          <p>
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="aboutus-gallery">
        <div className="aboutus-gallery-item">
          <img src="/images/about/7b296e817999e62a406e928025aea1c0e29248aa.jpg" alt="Forklift" />
        </div>
        <div className="aboutus-gallery-item">
          <img src="/images/about/e56e274dbeac8b39622751a50e521f67b231ebc8.jpg" alt="Ground operations" />
        </div>
        <div className="aboutus-gallery-item">
          <img src="/images/about/11028df4baf4bcfffe9c71c1373dd9fd61a26319 (1).jpg" alt="Night plane loading" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutus-mission">
        <div className="aboutus-mission-text">
          <h4>[OUR MISSION]</h4>
          <h2>East Africa’s Leading GSSA.</h2>
          <p>
            To be a leading global General Sales & Service Agent (GSSA),
            delivering world-class air cargo solutions by representing top-tier
            airlines with unmatched professionalism, integrity, and commitment.
          </p>
        </div>
        <div className="aboutus-mission-img">
          <img src="/images/about/44dbc1eb930352e35052b02197bf129fb3ccb46a.jpg" alt="Mission operations" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="aboutus-vision">
        <div className="aboutus-vision-img">
          <img src="/images/about/b643818345603355140a9f7644a8898b11796ab6.jpg" alt="Vision cargo" />
        </div>
        <div className="aboutus-vision-text">
          <h4>[OUR VISION]</h4>
          <h2>Redefining Freight, Connecting Africa To The World.</h2>
          <p>
            To lead as the most trusted and innovative global GSSA, becoming
            Africa’s top air cargo partner by redefining standards through
            excellence, innovation, and strategic partnerships that connect the
            continent to the world.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="aboutus-newsletter">
        <div className="aboutus-newsletter-content">
          <h2>Sign Up For Our Newsletter</h2>
          <p>
            Subscribe to receive our latest news and updates.
          </p>
          <form className="aboutus-newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
