// src/pages/About.jsx
import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white text-gray-900">
      <Navbar />

      {/* Top Section: About + Collage */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Title + Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003366]">
            About ADL Aviation
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage.
          </p>
        </div>
        <div className="about-collage">
          <img
            src="public/images/about/7b296e817999e62a406e928025aea1c0e29248aa.jpg"
            alt="Plane 1"
            className="img1"
          />
          <img
            src="public/images/about/648493b9c733359ceda93fed64080c3c2827254e (1).jpg"
            alt="Plane 2"
            className="img2"
          />
          <img
            src="public/images/about/b643818345603355140a9f7644a8898b11796ab6.jpg"
            alt="Plane 3"
            className="img3"
          />
          <img
            src="public/images/about/8d8b8105930e8aac307d2f856843421237e53a84.jpg"
            alt="Plane 4"
            className="img4"
          />
        </div>

      </section>

      {/* Our Story Section */}
      <section className="relative bg-[#003366] text-white pt-32 pb-20">
        {/* Top Wave */}
        <img
          src="public/images/about/—Pngtree—blue wave vector shape background_8928498.png"
          alt="Wave Top"
          className="absolute -top-1 left-0 w-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Collage (5 images styled) */}
          <div className="grid grid-cols-2 gap-4">
            {/* Two tall images */}
            <img
              src="public/images/about/648493b9c733359ceda93fed64080c3c2827254e (1).jpg"
              alt="Story 1"
              className="row-span-2 w-full h-full object-cover rounded-xl"
            />
            <img
              src="public/images/about/54ea1dd91860df5aad3770e099aae817b265dd7e.jpg"
              alt="Story 2"
              className="row-span-2 w-full h-full object-cover rounded-xl"
            />

            {/* Two small stacked images */}
            <img
              src="public/images/about/4af5c5452bd50bb3b31e258741bbc90db9b0eb07.jpg"
              alt="Story 3"
              className="object-cover w-full h-28 md:h-40 rounded-xl"
            />
            <img
              src="public/images/about/8d8b8105930e8aac307d2f856843421237e53a84.jpg"
              alt="Story 4"
              className="object-cover w-full h-28 md:h-40 rounded-xl"
            />

            {/* One big wide image at bottom */}
            <img
              src="public/images/about/33258dcd2e8d6ba50f276159a69fe728c9d3de4e.jpg"
              alt="Story 5"
              className="col-span-2 object-cover w-full h-52 md:h-72 rounded-xl"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Our Story</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              ADL Aviation Ltd, founded in 2009, is East Africa’s leading
              independent GSA company. We represent major global airlines with
              dedicated cargo teams that specialize in general cargo, special
              cargo, and project logistics — serving both local and
              international forwarders.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <img
          src="/image/waves/wave-bottom.svg"
          alt="Wave Bottom"
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <div>
          <div className="flex justify-center text-[#003366] text-5xl mb-4">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-semibold text-[#003366]">Our Mission</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To be a leading global General Sales & Service Agent (GSSA),
            delivering world-class operations by representing top-tier airlines
            with unmatched professionalism, integrity, & commitment.
          </p>
        </div>
        <div>
          <div className="flex justify-center text-[#003366] text-5xl mb-4">
            <FaLightbulb />
          </div>
          <h3 className="text-xl font-semibold text-[#003366]">Our Vision</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To lead as the most trusted & innovative global GSSA, bridging
            Africa’s top air cargo capacity to international markets through
            seamless solutions, innovation, & strategic partnerships that
            connect the continent to the world.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#003366] text-white py-12 px-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold">
          Sign up for our newsletter
        </h3>
        <p className="mt-2 text-gray-200">Get the latest news and updates.</p>
        <form className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl w-full md:w-96 text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 rounded-xl font-medium hover:bg-green-600"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
