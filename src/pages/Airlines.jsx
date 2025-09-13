import React from "react";
import "../index.css";

const Airlines = () => {
  return (
    <div className="airlines-page font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/images/airlines/6388d39d656e55338b401d2dc78062016e40e041.png"
          alt="Airplane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">FLIGHTS</h1>
          <p className="max-w-2xl text-lg mb-6">
            Operating a fleet of freighters including B737, B767, B777, B787, and A350-900.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Book Now
            </button>
            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Diagonal Shape */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-blue-600 clip-diagonal"></div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            WHAT WE <span className="text-blue-600">OFFER</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
            Africa Direct Limited is a trusted partner of Ethiopian Airlines,
            representing and managing cargo operations with unmatched coverage and expertise.
          </p>

          {/* Offer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Cargo Operations", icon: "📦" },
              { title: "Fleet Management", icon: "✈️" },
              { title: "Global Coverage", icon: "🌍" },
              { title: "24/7 Support", icon: "📞" },
            ].map((offer, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{offer.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* Airlines Fleet Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            OUR FLEET
          </h2>

          <div className="space-y-12">
            {[
              {
                name: "Boeing 767",
                desc: "A Wide-Body Twin-Engine Jet Airliner known for its Versatility and Use in both Passenger and Cargo Operations.",
                img: "/images/airlines/473d8ec4e84cb8fb5e3dfc732c7a8da5e1b0ddb5.png",
              },
              {
                name: "Boeing 777",
                desc: "A Wide-Body Airliner, Renowned As The World's Largest Twin-Engine Jet With Superior Range, Fuel Efficiency, And Comfort.",
                img: "/images/airlines/c7897a7e12366964194dc4706e8ba14d96b37591.jpg",
              },
              {
                name: "Boeing 787",
                desc: "A Long-Range, Wide-Body, Twin-Engine Commercial Aircraft known for its Fuel Efficiency and Passenger Comfort.",
                img: "/images/airlines/ea1dd91dd93b37e98a154e676c4dc66081f66592 (1).jpg",
              },
              {
                name: "Boeing 737",
                desc: "A Narrow-Body Twin-jet commercial Airliner Produced By Boeing, Known For Its Versatility And Widespread Use.",
                img: "/images/airlines/0d17f5fe96bed13bc8282fcf73c7593d793ea9eb.jpg",
              },
              {
                name: "Airbus A350",
                desc: "A Long-Range, Wide Body Commercial Aircraft Known For Its Efficiency, Spacious Cabin, And Advanced Technology.",
                img: "/images/airlines/a3c9ad47d70ed64a99a86326f5eeaef180fe2dab.jpg",
              },
            ].map((plane, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div
                  className={`flex justify-center ${
                    index % 2 !== 0 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={plane.img}
                    alt={plane.name}
                    className="rounded-xl shadow-lg max-w-sm object-cover"
                  />
                </div>
                <div
                  className={`text-center md:text-left ${
                    index % 2 !== 0 ? "md:order-1" : ""
                  }`}
                >
                  <h4 className="text-sm uppercase text-gray-500 mb-1">
                    Aircraft
                  </h4>
                  <h3 className="text-2xl font-bold mb-3">{plane.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{plane.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Airlines;
