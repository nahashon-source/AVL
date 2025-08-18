import React from "react";
import "../index.css";

const Airlines = () => {
  return (
    <div className="airlines-page">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/images/airlines/6388d39d656e55338b401d2dc78062016e40e041.png"
          alt="Airplane Engine"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>FLIGHTS</h1>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-text">
            <h2>
              WHAT WE <br /> <span>OFFER</span>
            </h2>
            <p>
              Africa Direct Limited is a trusted partner of Ethiopian Airlines,
              operating a diverse fleet of freighters including B737, B767,
              B777, B787, and A350-900.
            </p>
          </div>
        </div>
      </section>

      {/* Cargo Operations Section */}
      <section className="cargo-section">
        <img
          src="/images/airlines/3dc086574628b360c3f71ca43471bd6ae0fe316e.png"
          alt="Cargo Loading"
          className="cargo-image"
        />
        <div className="cargo-overlay">
          <p>
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage. Our experienced
            team, trained by top airlines and forwarders, is skilled in handling
            both narrow and wide-body aircraft. Explore our site to learn more.
          </p>
        </div>
      </section>

      {/* Airlines Fleet Section with About Us Style Layout */}
      <section className="airlines-section">
        <h2 className="section-title">OUR FLEET</h2>
        <div className="space-y-4 p-4">
          {/* Boeing 767 with Image on Left and Centered Content on Right */}
          <div className="flex flex-wrap items-center gap-2 max-w-1200 mx-auto">
            <div className="flex-1 flex justify-center">
              <img
                src="/images/airlines/473d8ec4e84cb8fb5e3dfc732c7a8da5e1b0ddb5.png"
                alt="Boeing 767"
                className="max-w-[380px] rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-[280px] text-center">
              <h4 className="text-sm uppercase text-gray-500 mb-1">Aircraft</h4>
              <h3 className="text-xl font-bold mb-1">Boeing 767</h3>
              <p className="text-base text-gray-600 max-w-prose">
                A Wide-Body Twin-Engine Jet Airliner known for its Versatility and Use in both Passenger and Cargo Operations.
              </p>
            </div>
          </div>
          {/* Boeing 777 with Centered Content on Left and Image on Right */}
          <div className="flex flex-wrap items-center gap-2 max-w-1200 mx-auto">
            <div className="flex-1 min-w-[280px] text-center">
              <h4 className="text-sm uppercase text-gray-500 mb-1">Aircraft</h4>
              <h3 className="text-xl font-bold mb-1">Boeing 777</h3>
              <p className="text-base text-gray-600 max-w-prose">
                A Wide-Body Airliner, Renowned As The World's Largest Twin-Engine Jet With A Unique Combination Of Superior Range, Outstanding Fuel Efficiency And Passenger-Preferred Comfort Has Created Long-Range Success For Carriers Around The World.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/airlines/c7897a7e12366964194dc4706e8ba14d96b37591.jpg"
                alt="Boeing 777"
                className="max-w-[380px] rounded-lg object-cover"
              />
            </div>
          </div>
          {/* Boeing 787 with Image on Left and Centered Content on Right */}
          <div className="flex flex-wrap items-center gap-2 max-w-1200 mx-auto">
            <div className="flex-1 flex justify-center">
              <img
                src="/images/airlines/ea1dd91dd93b37e98a154e676c4dc66081f66592 (1).jpg"
                alt="Boeing 787"
                className="max-w-[380px] rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-[280px] text-center">
              <h4 className="text-sm uppercase text-gray-500 mb-1">Aircraft</h4>
              <h3 className="text-xl font-bold mb-1">Boeing 787</h3>
              <p className="text-base text-gray-600 max-w-prose">
                A Long-Range, Wide-Body, Twin-Engine Commercial Aircraft known for its Fuel Efficiency and Passenger Comfort.
              </p>
            </div>
          </div>
          {/* Boeing 737 with Centered Content on Left and Image on Right */}
          <div className="flex flex-wrap items-center gap-2 max-w-1200 mx-auto">
            <div className="flex-1 min-w-[280px] text-center">
              <h4 className="text-sm uppercase text-gray-500 mb-1">Aircraft</h4>
              <h3 className="text-xl font-bold mb-1">Boeing 737</h3>
              <p className="text-base text-gray-600 max-w-prose">
                A Narrow-Body Twin-jet commercial Airliner Produced By Boeing, Known For Its Versatility And Widespread Use In The Airline Industry.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/airlines/0d17f5fe96bed13bc8282fcf73c7593d793ea9eb.jpg"
                alt="Boeing 737"
                className="max-w-[380px] rounded-lg object-cover"
              />
            </div>
          </div>
          {/* Airbus A350 with Image on Left and Centered Content on Right */}
          <div className="flex flex-wrap items-center gap-2 max-w-1200 mx-auto">
            <div className="flex-1 flex justify-center">
              <img
                src="/images/airlines/a3c9ad47d70ed64a99a86326f5eeaef180fe2dab.jpg"
                alt="Airbus A350"
                className="max-w-[380px] rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-[280px] text-center">
              <h4 className="text-sm uppercase text-gray-500 mb-1">Aircraft</h4>
              <h3 className="text-xl font-bold mb-1">Airbus A350</h3>
              <p className="text-base text-gray-600 max-w-prose">
                A Long-Range, Wide Body Commercial Aircraft Known For Its Efficiency, Spacious Cabin, And Advanced Technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Airlines;