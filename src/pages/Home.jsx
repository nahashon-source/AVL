import React from "react";
import { FaLeaf, FaBoxOpen, FaTruck, FaMugHot, FaTshirt, FaCapsules, FaHandsHelping } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import "../index.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Text Section */}
          <div className="hero-text">
            <h1 className="hero-title">
              East Africa’s leading General Sales & Service Agent.
            </h1>
            <p className="hero-subtitle">
              Africa Direct Ltd represents a number of carriers across our
              region as their GSSA/CSA partners, including Ethiopian Airlines,
              Air Malawi, TAM and a number of other national carriers.
            </p>
            <button className="cta-btn">Get Started</button>
          </div>

          {/* Hero Images */}
          <div className="hero-images">
            <div className="image-card">
              <img
                src="/images/landing/5ba290bcffc259cbb5982ef5e50b255c46136dce.jpg"
                alt="plane 1"
                className="hero-img"
              />
            </div>
            <div className="image-card placeholder"></div>
            <div className="image-card">
              <img
                src="/images/landing/72dfed76b44e0b91b22721371f387415ee086cc2.jpg"
                alt="plane 2"
                className="hero-img"
              />
            </div>
            <div className="image-card placeholder"></div>
          </div>
        </div>
      </section>

      {/* Focus Area Section */}
      <section className="focus bg-[#00BCD4] py-16 text-white">
        <div className="focus-header text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Our Focus Area</h2>
          <p className="mt-4 text-white/90">
            Our extensive network coverage across Africa enables seamless
            connectivity, efficient operations, and comprehensive service for
            our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 focus-cards">
          {/* Card 1 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaLeaf className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fresh to door service</h3>
            <p className="text-white/80 text-sm">
              Offering end-to-end handling and delivery of fresh products,
              ensuring freshness and quality at the destination.
            </p>
          </article>

          {/* Card 2 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaBoxOpen className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">General Cargo</h3>
            <p className="text-white/80 text-sm">
              Expertly managing a wide range of general cargo shipments,
              providing efficient and reliable transportation solutions.
            </p>
          </article>

          {/* Card 3 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaTruck className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Courier</h3>
            <p className="text-white/80 text-sm">
              Delivering swift and dependable courier services for time-critical
              shipments, ensuring prompt and secure delivery.
            </p>
          </article>

          {/* Card 4 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaMugHot className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Tea & Coffee</h3>
            <p className="text-white/80 text-sm">
              Leveraging expertise in handling tea and coffee shipments,
              preserving aroma, flavor, and quality throughout the supply chain.
            </p>
          </article>

          {/* Card 5 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaTshirt className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Textiles</h3>
            <p className="text-white/80 text-sm">
              Providing tailored logistics services for the textile industry,
              including storage, inventory management, and timely distribution.
            </p>
          </article>

          {/* Card 6 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaCapsules className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Pharmaceuticals</h3>
            <p className="text-white/80 text-sm">
              Specializing in the safe and secure transportation of
              pharmaceutical products, maintaining strict temperature control
              and compliance with regulations.
            </p>
          </article>

          {/* Card 7 */}
          <article className="card bg-white/20 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
            <FaHandsHelping className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Humanitarian</h3>
            <p className="text-white/80 text-sm">
              Facilitating logistics and transportation support for
              humanitarian initiatives, ensuring timely delivery of aid and
              relief supplies.
            </p>
          </article>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter bg-[#00AEEF] py-8 text-center text-white">
        <h2 className="text-xl font-bold mb-2">Sign Up For Our Newsletter</h2>
        <p className="text-sm mb-6">Subscribe to receive our latest news and updates.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 w-full sm:w-auto border border-white bg-transparent text-white placeholder-white rounded-lg focus:outline-none"
          />
          <button className="bg-white text-[#00AEEF] px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            &gt; Sign me up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;