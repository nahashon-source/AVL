// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import {
  Package,
  Truck,
  Send,
  Coffee,
  Shirt,
  Pill,
  HeartHandshake,
} from "lucide-react"; // icons
import "../index.css";

const Home = () => {
  const areasOfFocus = [
    {
      title: "Fresh Freight",
      icon: <Truck className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Offering fresh door to door service with swift handling of destinations efficiently.",
    },
    {
      title: "General Cargo",
      icon: <Package className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Providing a wide range of general cargo shipments with reliable transportation solutions.",
    },
    {
      title: "Courier",
      icon: <Send className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Delivering swift and dependable courier services for time-critical deliveries via air.",
    },
    {
      title: "Tea & Coffee",
      icon: <Coffee className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Transporting perishable commodities with care to preserve quality and aroma.",
    },
    {
      title: "Textiles",
      icon: <Shirt className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Tailored logistics for textiles, including inventory storage and timely delivery.",
    },
    {
      title: "Pharmaceuticals",
      icon: <Pill className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Safe, temperature-controlled pharmaceutical transport adhering to strict regulations.",
    },
    {
      title: "Humanitarian",
      icon: <HeartHandshake className="w-12 h-12 text-blue-600 mb-4" />,
      desc: "Logistics for humanitarian aid and emergency relief supplies across Africa.",
    },
  ];

  // Reorder cards: Humanitarian below Textiles, Pharmaceuticals in middle
  const reorderedAreas = [
    areasOfFocus[0], // Fresh Freight
    areasOfFocus[1], // General Cargo  
    areasOfFocus[2], // Courier
    areasOfFocus[3], // Tea & Coffee
    areasOfFocus[4], // Textiles
    areasOfFocus[6], // Humanitarian (moved below Textiles)
    areasOfFocus[5], // Pharmaceuticals (in middle)
  ];

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Connecting Africa with Seamless Logistics
        </h1>
        <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed">
          We specialize in freight forwarding, customs brokerage, warehousing,
          and distribution, ensuring your goods move efficiently across borders.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 transition duration-300">
            Get a Quote
          </button>
          <button className="px-6 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>

      {/* Logos Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-14 px-6">
          <img
            src="public/images/landing/0549de7bfa3dd5623494df2ff2557c9ea9634771.png"
            alt="TAM"
            className="h-10 md:h-12 object-contain"
          />
          <img
            src="public/images/landing/6694857779a8e23d9ed2e71d443c6f98e62d2ac6.png"
            alt="Ethiopian Airlines"
            className="h-10 md:h-12 object-contain"
          />
          <img
            src="public/images/landing/f27ee68b9b9058d387fc7ebdd84906fae4853a73.png"
            alt="Malawi Airlines"
            className="h-10 md:h-12 object-contain"
          />
        </div>
      </section>

      {/* Areas of Focus Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Our Areas of Focus
          </h2>
          <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Our extensive network spans across Africa, enabling seamless
            connectivity, efficient operations, and comprehensive service for
            our clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {reorderedAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="relative bg-blue-600 py-16 text-white"
        style={{
          backgroundImage: "url('/image/landing/wave.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center max-w-2xl px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Sign up for Our Newsletter
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Subscribe to receive our latest news and updates.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center w-full max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 py-3 px-4 rounded-md sm:rounded-r-none bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-black hover:bg-gray-800 py-3 px-6 rounded-md sm:rounded-l-none text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;