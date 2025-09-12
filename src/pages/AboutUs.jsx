import React, { useState } from "react";
import "../index.css";
import { motion } from "framer-motion";

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionInput = motion.input;
const MotionButton = motion.button;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const About = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  // === Our Story Collage Styles ===
  const storyCollageStyles = {
    collage: {
      position: "relative",
      width: "100%",
      height: "520px",
      maxWidth: "640px",
      marginLeft: "0",
      marginRight: "auto",
      pointerEvents: "auto",
    },
    collageItem: {
      position: "absolute",
      borderRadius: "14px",
      overflow: "hidden",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.16)",
      transition: "transform 0.28s ease, box-shadow 0.28s ease",
      backgroundColor: "#fff",
    },
    collageImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    // Left column
    collage1: { top: "12px", left: "0px", width: "200px", height: "220px", zIndex: 6 },
    collage2: { top: "268px", left: "-70px", width: "220px", height: "210px", zIndex: 5 },
    // Right column
    collage3: { top: "40px", right: "180px", width: "170px", height: "170px", zIndex: 4 },
    collage4: { top: "250px", right: "270px", width: "120px", height: "120px", zIndex: 3 },
    collage5: { top: "390px", right: "200px", width: "220px", height: "200px", zIndex: 2 },
  };

  const storyImages = [
    "648493b9c733359ceda93fed64080c3c2827254e (1).jpg",
    "54ea1dd91860df5aad3770e099aae817b265dd7e.jpg",
    "4af5c5452bd50bb3b31e258741bbc90db9b0eb07.jpg",
    "8d8b8105930e8aac307d2f856843421237e53a84.jpg",
    "33258dcd2e8d6ba50f276159a69fe728c9d3de4e.jpg",
  ];

  return (
    <div className="relative overflow-visible bg-white text-gray-900 font-brand pt-12">
      {/* === Intro Section === */}
      <MotionSection
        className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionDiv variants={fadeUp}>
          <h1 className="custom-about-title">
            About ADL <br /> Aviation
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            We represent and manage cargo operations for leading carriers,
            extending their brand with comprehensive coverage.
          </p>
        </MotionDiv>

        <MotionDiv className="about-collage" variants={staggerContainer}>
          {[
            "7b296e817999e62a406e928025aea1c0e29248aa.jpg",
            "648493b9c733359ceda93fed64080c3c2827254e (1).jpg",
            "b643818345603355140a9f7644a8898b11796ab6.jpg",
            "8d8b8105930e8aac307d2f856843421237e53a84.jpg",
          ].map((img, i) => (
            <MotionImg
              key={i}
              src={`/images/about/${img}`}
              alt={`About collage image ${i + 1}`}
              className={`img${i + 1}`}
              loading="lazy"
              variants={fadeUp}
            />
          ))}
        </MotionDiv>
      </MotionSection>

      {/* === Our Story Section === */}
      <MotionSection
         className="relative text-white pt-6 md:pt-10 lg:pt-12 pb-16 overflow-hidden font-brand min-h-[700px]"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Wave Background (upright, not flipped) */}
  <div className="absolute inset-0 z-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 500"
      className="w-full h-[900px]"
      preserveAspectRatio="none"
      style={{ transform: "translateY(-160px)" }} // raise crest upward
    >
      <path
        fill="#1E3A8A"
        fillOpacity="1"
        d="M0,160L60,186.7C120,213,240,267,360,288C480,309,600,299,720,261.3C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,0L0,0Z"
      />
      <path
        fill="#3B82F6"
        fillOpacity="0.85"
        d="M0,256L60,234.7C120,213,240,171,360,154.7C480,139,600,149,720,181.3C840,213,960,267,1080,266.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L0,0Z"
      />
      <path
        fill="#60A5FA"
        fillOpacity="0.75"
        d="M0,320L60,309.3C120,299,240,277,360,256C480,235,600,213,720,202.7C840,192,960,192,1080,213.3C1200,235,1320,277,1380,298.7L1440,320L1440,0L0,0Z"
      />
    </svg>
        </div>

        {/* Blurred overlays */}
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
          {/* LEFT: Collage */}
          <MotionDiv variants={staggerContainer} className="order-1 lg:order-1 flex justify-start">
            <div style={storyCollageStyles.collage} className="hidden md:block">
              {storyImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    ...storyCollageStyles.collageItem,
                    ...storyCollageStyles[`collage${i + 1}`],
                  }}
                  className="hover:scale-105 hover:shadow-xl cursor-pointer"
                >
                  <MotionImg
                    src={`/images/about/${img}`}
                    alt={`Our story collage image ${i + 1}`}
                    style={storyCollageStyles.collageImg}
                    loading="lazy"
                    variants={fadeUp}
                  />
                </div>
              ))}
            </div>

            {/* Mobile fallback */}
            <div className="md:hidden flex justify-center">
              <MotionImg
                src={`/images/about/${storyImages[1]}`}
                alt="Our story"
                className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-lg"
                loading="lazy"
                variants={fadeUp}
              />
            </div>
          </MotionDiv>

          {/* RIGHT: Text */}
          <MotionDiv variants={fadeUp} className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-extrabold">Our Story</h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-100">
              ADL Aviation Ltd, founded in 2009, is East Africa's leading
              independent GSA company. We represent major global airlines with
              dedicated cargo teams that specialize in general cargo, special
              cargo, and project logistics — serving both local and
              international forwarders.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* === Mission & Vision === */}
      <MotionSection
        className="mission-vision-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mission-vision">
          <MotionDiv className="mv-block" variants={fadeUp}>
            <img src="/images/about/Square-removebg-preview.png" alt="Our Mission" className="mv-img" />
            <h3>Our Mission</h3>
            <p>
              To be a leading global General Sales & Service Agent (GSSA), delivering
              world-class operations by representing top-tier airlines with unmatched
              professionalism, integrity, & commitment.
            </p>
          </MotionDiv>

          <MotionDiv className="mv-block" variants={fadeUp}>
            <img src="/images/about/Colors-removebg-preview.png" alt="Our Vision" className="mv-img" />
            <h3>Our Vision</h3>
            <p>
              To lead as the most trusted & innovative global GSSA, bridging Africa's
              top air cargo capacity to international markets through seamless
              solutions, innovation, & strategic partnerships that connect the
              continent to the world.
            </p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* === Newsletter === */}
      <MotionSection
        className="bg-[#003366] text-white py-10 px-6 text-center font-brand"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-xl font-extrabold">
          Sign up for our newsletter
        </h3>
        <p className="mt-1 text-gray-200">Get the latest news and updates.</p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col md:flex-row gap-3 justify-center"
        >
          <MotionInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-xl w-full md:w-96 text-gray-900 focus:outline-none"
            whileFocus={{ scale: 1.02 }}
          />
          <MotionButton
            type="submit"
            className="px-5 py-2 bg-green-500 rounded-xl font-medium hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </MotionButton>
        </form>
      </MotionSection>
    </div>
  );
};

export default About;
