import React, { useState } from "react";
import "../index.css";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const About = () => {
  // Newsletter form state
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail(""); // reset field
  };

  // Mission & Vision Data
  const highlights = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      text: "To be a leading global General Sales & Service Agent (GSSA), delivering world-class operations by representing top-tier airlines with unmatched professionalism, integrity, & commitment."
    },
    {
      icon: <FaLightbulb />,
      title: "Our Vision",
      text: "To lead as the most trusted & innovative global GSSA, bridging Africa’s top air cargo capacity to international markets through seamless solutions, innovation, & strategic partnerships that connect the continent to the world."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white text-gray-900 font-brand">
      {/* Top Section: About + Collage */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Left: Title + Text */}
        <div>
          <h1 className="custom-about-title">
            About ADL <br /> Aviation
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage.
          </p>
        </div>

        {/* Right: Collage */}
        <div className="about-collage">
          <img
            src="/images/about/7b296e817999e62a406e928025aea1c0e29248aa.jpg"
            alt="Cargo plane flying in the sky"
            className="img1"
            loading="lazy"
          />
          <img
            src="/images/about/648493b9c733359ceda93fed64080c3c2827254e (1).jpg"
            alt="Cargo plane at the airport"
            className="img2"
            loading="lazy"
          />
          <img
            src="/images/about/b643818345603355140a9f7644a8898b11796ab6.jpg"
            alt="Aircraft during operations"
            className="img3"
            loading="lazy"
          />
          <img
            src="/images/about/8d8b8105930e8aac307d2f856843421237e53a84.jpg"
            alt="Cargo plane close-up"
            className="img4"
            loading="lazy"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative bg-[#003366] text-white pt-32 pb-20 overflow-x-hidden font-brand">
        {/* Full Background Wave */}
        <img
          src="/images/about/—Pngtree—blue wave vector shape background_8928498.png"
          alt="Decorative wave background"
          className="absolute inset-0 w-[115%] h-full object-cover z-0 pointer-events-none"
          loading="lazy"
        />

        {/* Content sits above wave */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          {/* Left: Collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/about/648493b9c733359ceda93fed64080c3c2827254e (1).jpg"
              alt="Cargo handling operations"
              className="row-span-2 w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
            <img
              src="/images/about/54ea1dd91860df5aad3770e099aae817b265dd7e.jpg"
              alt="Air freight services"
              className="row-span-2 w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
            <img
              src="/images/about/4af5c5452bd50bb3b31e258741bbc90db9b0eb07.jpg"
              alt="Aircraft loading cargo"
              className="object-cover w-full h-auto md:h-40 rounded-xl"
              loading="lazy"
            />
            <img
              src="/images/about/8d8b8105930e8aac307d2f856843421237e53a84.jpg"
              alt="Cargo aircraft side view"
              className="object-cover w-full h-auto md:h-40 rounded-xl"
              loading="lazy"
            />
            <img
              src="/images/about/33258dcd2e8d6ba50f276159a69fe728c9d3de4e.jpg"
              alt="Large aircraft fleet"
              className="col-span-2 object-cover w-full h-auto md:h-72 rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Story</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              ADL Aviation Ltd, founded in 2009, is East Africa’s leading
              independent GSA company. We represent major global airlines with
              dedicated cargo teams that specialize in general cargo, special
              cargo, and project logistics — serving both local and
              international forwarders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Dynamic) */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center font-brand">
        {highlights.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-center text-[#003366] text-5xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-extrabold text-[#003366]">{item.title}</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Bottom Wave */}
      <img
        src="/image/waves/wave-bottom.svg"
        alt="Bottom decorative wave"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        loading="lazy"
      />

      {/* Newsletter Section */}
      <section className="bg-[#003366] text-white py-12 px-6 text-center font-brand">
        <h3 className="text-xl md:text-2xl font-extrabold">
          Sign up for our newsletter
        </h3>
        <p className="mt-2 text-gray-200">
          Get the latest news and updates.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
