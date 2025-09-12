import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Agents = () => {
  // State for handling image load errors
  const [imageErrors, setImageErrors] = useState({});

  const people = [
    "/images/agents/f791ee9d6216ba943ecd829641d853f639d64d92.jpg",
    "/images/agents/e1defc49fee299818c769dc685097bf72d0f3cf3.jpg", 
    "/images/agents/e1defc49fee299818c769dc685097bf72d0f3cf3 (1).jpg",
    "/images/agents/8b18ab58915e5fbc06c6a8e01e4ad6a9f03ff6b8.jpg",
    "/images/agents/e1defc49fee299818c769dc685097bf72d0f3cf3 (1).jpg",
  ];

  const agents = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Cargo Specialist",
      rating: 5,
      image: "/images/agents/e1defc49fee299818c769dc685097bf72d0f3cf3 (1).jpg",
      experience: "8+ years",
      specialization: "International Freight"
    },
    {
      id: 2,
      name: "John Smith", 
      role: "Flight Operations Expert",
      rating: 4,
      image: "/images/agents/8b18ab58915e5fbc06c6a8e01e4ad6a9f03ff6b8.jpg",
      experience: "6+ years",
      specialization: "Air Cargo Operations"
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Logistics Coordinator", 
      rating: 4,
      image: "/images/agents/e1defc49fee299818c769dc685097bf72d0f3cf3.jpg",
      experience: "5+ years",
      specialization: "Supply Chain Management"
    },
  ];

  // Fixed logo paths - make sure these files exist
  const logos = [
    "/images/logos/public/logos/792b28e937c8f9de7bcdcebb2d2d447ba60bd0e0.png",
    "/images/logos/cargo-logo2.png", 
    "/images/logos/ethiopian-logo.png",
  ];

  // Fallback logos in case local ones don't load
  const fallbackLogos = [
    "https://via.placeholder.com/120x60/0ea5e9/ffffff?text=Cargo+Pro",
    "https://via.placeholder.com/120x60/10b981/ffffff?text=Freight+Co",
    "https://via.placeholder.com/120x60/dc2626/ffffff?text=Airlines",
  ];

  // Handle image load errors
  const handleImageError = (type, index) => {
    setImageErrors(prev => ({
      ...prev,
      [`${type}_${index}`]: true
    }));
  };

  // Get image source with fallback
  const getImageSrc = (type, index, originalSrc, fallbackSrc = null) => {
    if (imageErrors[`${type}_${index}`] && fallbackSrc) {
      return fallbackSrc;
    }
    return originalSrc;
  };

  const collageStyles = {
    collage: {
      position: "relative",
      width: "100%", 
      height: "580px",
      maxWidth: "640px",
      marginLeft: "auto",
      marginRight: "0",
    },
    collageItem: {
      position: "absolute",
      borderRadius: "16px",
      overflow: "hidden", 
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    collageImg: { 
      width: "100%", 
      height: "100%", 
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    collage1: { top: "-180px", left: "0px", width: "240px", height: "300px", zIndex: 6 },
    collage2: { top: "140px", left: "0", width: "240px", height: "300px", zIndex: 5 },
    collage3: { top: "-110px", right: "-5px", width: "240px", height: "150px", zIndex: 2 },
    collage4: { top: "80px", right: "-5px", width: "240px", height: "300px", zIndex: 4 },
    collage5: { bottom: "-30px", right: "-5px", width: "240px", height: "190px", zIndex: 3 },
  };

  return (
    <div className="relative bg-white font-sans">
      <Navbar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 lg:px-12 pt-24 pb-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="order-2 lg:order-1 max-w-xl text-center lg:text-left">
            <p className="text-sm text-sky-600 font-semibold mb-4 flex items-center justify-center lg:justify-start">
              <span className="w-2 h-2 bg-sky-600 rounded-full mr-2 animate-pulse"></span>
              Find Your Trusted Agent
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
              Big or small, your shipment starts with{" "}
              <span className="text-sky-600 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                the right agent
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              Need expert help when shipping your goods? We've got your back with
              trusted agents worldwide who ensure your cargo reaches its destination safely.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg shadow-md font-medium transition-all duration-300 transform hover:scale-105">
                Find an Agent
              </button>
              <button className="border border-gray-300 px-8 py-4 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-all duration-300 hover:border-sky-600 hover:text-sky-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Right column - collage */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div style={collageStyles.collage} className="hidden md:block">
              {people.map((img, i) => (
                <div
                  key={i}
                  style={{ 
                    ...collageStyles.collageItem, 
                    ...collageStyles[`collage${i + 1}`] 
                  }}
                  className="hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <img 
                    src={getImageSrc('people', i, img, `https://via.placeholder.com/240x300/0ea5e9/ffffff?text=Agent+${i+1}`)}
                    alt={`Agent ${i + 1}`} 
                    style={collageStyles.collageImg}
                    onError={() => handleImageError('people', i)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Mobile fallback */}
            <div className="md:hidden flex justify-center">
              <img
                src={getImageSrc('mobile', 0, people[1], "https://via.placeholder.com/320x320/0ea5e9/ffffff?text=Our+Agents")}
                alt="Agent"
                className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                onError={() => handleImageError('mobile', 0)}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl shadow-lg p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Our Agents Are Trusted By
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {logos.map((logo, i) => (
                <div key={i} className="flex justify-center items-center h-16 hover:scale-110 transition-transform duration-300">
                  <img 
                    src={getImageSrc('logo', i, logo, fallbackLogos[i])}
                    alt={`Trusted Partner ${i + 1}`} 
                    className="h-12 md:h-16 object-contain filter hover:brightness-110 transition-all duration-300 max-w-[120px]"
                    onError={() => handleImageError('logo', i)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGENTS LIST SECTION */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl shadow-lg p-10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Meet Our Trusted Agents
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our experienced team of cargo specialists is ready to handle your shipping needs
                with expertise and dedication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center group hover:scale-105"
                >
                  <div className="relative mb-4">
                    <img
                      src={getImageSrc('agent', agent.id, agent.image, `https://via.placeholder.com/112x112/0ea5e9/ffffff?text=${agent.name.split(' ').map(n => n[0]).join('')}`)}
                      alt={agent.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-sky-100 group-hover:border-sky-300 transition-colors duration-300"
                      onError={() => handleImageError('agent', agent.id)}
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {agent.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{agent.name}</h3>
                  <p className="text-sm text-sky-600 font-medium mb-2">{agent.role}</p>
                  <p className="text-xs text-gray-500 mb-2">{agent.specialization}</p>
                  <p className="text-xs text-gray-400 mb-3">{agent.experience} experience</p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${i < agent.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      >
                        ⭐
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({agent.rating}/5)</span>
                  </div>
                  
                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-300 w-full">
                    Contact Agent
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="container mx-auto px-6 lg:px-12 py-16">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl shadow-lg p-10 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Ship with Confidence?
            </h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Connect with our trusted agents today and experience hassle-free cargo shipping
              with end-to-end support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Get Started Now
              </button>
              <button className="border border-sky-200 text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Agents;