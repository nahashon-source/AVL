import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plane, 
  Users, 
  Globe, 
  Award, 
  Shield, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Star,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react';

// Animation Hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isVisible];
};

// Enhanced Aircraft Carousel with better animations and auto-play
const AircraftCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  
  const aircraft = [
    { name: 'Boeing 737', capacity: '23 tons', range: '6,570 km', description: 'Reliable narrow-body freighter' },
    { name: 'Airbus A320', capacity: '28 tons', range: '6,150 km', description: 'Efficient short to medium-haul' },
    { name: 'Boeing 777', capacity: '103 tons', range: '9,070 km', description: 'Heavy-duty long-haul freighter' },
    { name: 'Boeing 787', capacity: '84 tons', range: '14,140 km', description: 'Next-generation efficiency' },
    { name: 'Airbus A350', capacity: '109 tons', range: '15,000 km', description: 'Ultra-long range capability' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % aircraft.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, aircraft.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aircraft.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aircraft.length) % aircraft.length);
  };

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Fleet</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern, efficient aircraft ensuring reliable cargo operations across Africa and beyond
          </p>
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Aircraft display */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative w-full max-w-4xl">
            {aircraft.map((plane, index) => {
              const isActive = index === currentSlide;
              const offset = index - currentSlide;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    isActive 
                      ? 'opacity-100 scale-100 translate-x-0 z-10' 
                      : offset === 1 || (offset === -(aircraft.length - 1))
                      ? 'opacity-60 scale-90 translate-x-32 z-5'
                      : offset === -1 || (offset === aircraft.length - 1)
                      ? 'opacity-60 scale-90 -translate-x-32 z-5'
                      : 'opacity-0 scale-75 z-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 mx-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <Plane className="w-24 h-24 mx-auto text-cyan-500 transform rotate-90" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">{plane.name}</h3>
                      <p className="text-gray-600 mb-6">{plane.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <div className="font-semibold text-cyan-700">Capacity</div>
                          <div className="text-gray-700">{plane.capacity}</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="font-semibold text-blue-700">Range</div>
                          <div className="text-gray-700">{plane.range}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2">
          {aircraft.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Counter Component
const StatsCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useScrollAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const animateCount = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isVisible, end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-cyan-600 mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

// Enhanced Service Card Component
// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ icon: IconComponent, title, description, color, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 mx-auto mb-6 ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-center">{description}</p>
      <div className="mt-6 text-center">
        <button className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center transition-colors duration-300">
          Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

// Value Card Component
// eslint-disable-next-line no-unused-vars
const ValueCard = ({ icon: IconComponent, title, description, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`text-center p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
        <IconComponent className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-blue-100 leading-relaxed">{description}</p>
    </div>
  );
};

// Values/Mission Component
const ValuesSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering exceptional service with precision and reliability in every operation.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparent, honest, and ethical business practices.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology and modern solutions.'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The principles that guide everything we do, ensuring we deliver beyond expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsPage = () => {
  const [activeNav, setActiveNav] = useState('About Us');

  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Airlines', href: '#' },
    { name: 'Agents', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/logos/logo.png" 
                alt="ADL Aviation Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'inline';
                }}
              />
              <Plane 
                className="w-6 h-6 text-cyan-400 transform -rotate-45" 
                style={{display: 'none'}}
              />
              <span className="text-xl font-semibold text-gray-800">
                <span className="text-cyan-400">adl</span> AVIATION
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`text-sm font-medium transition-colors ${
                    activeNav === item.name
                      ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Plane className="w-full h-full transform rotate-12" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  About <span className="text-yellow-300">ADL Aviation</span>
                </h1>
                <div className="w-20 h-1 bg-yellow-300 rounded"></div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-light leading-relaxed text-blue-100">
                East Africa's leading General Sales & Service Agent, connecting continents through reliable cargo operations.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-blue-50">
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Trusted partner of Ethiopian Airlines with diverse fleet capabilities</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Specialized cargo operations across Africa and international destinations</span>
                </p>
                <p className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mt-0.5 flex-shrink-0" />
                  <span>Expert professionals trained on all aircraft types from narrow to wide body</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <StatsCounter end={50} suffix="+" />
                <p className="text-blue-100 mt-2">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <StatsCounter end={1000} suffix="+" />
                <p className="text-blue-100 mt-2">Flights Handled</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <StatsCounter end={25} />
                <p className="text-blue-100 mt-2">Countries Served</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <StatsCounter end={99} suffix="%" />
                <p className="text-blue-100 mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Carousel */}
      <AircraftCarousel />

      {/* Enhanced Services Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cargo solutions across diverse industries, ensuring seamless connectivity and reliable operations throughout Africa and beyond.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={TrendingUp}
              title="Fresh to Door Service"
              description="End-to-end handling and delivery of fresh products, ensuring quality from origin to destination with temperature-controlled logistics."
              color="bg-gradient-to-r from-green-500 to-emerald-600"
              delay={100}
            />
            <ServiceCard
              icon={Globe}
              title="General Cargo"
              description="Expert management of diverse cargo shipments, providing efficient and reliable transportation solutions across all destinations."
              color="bg-gradient-to-r from-blue-500 to-cyan-600"
              delay={200}
            />
            <ServiceCard
              icon={Shield}
              title="Pharmaceuticals"
              description="Specialized secure transportation of pharmaceutical products with strict temperature control and regulatory compliance."
              color="bg-gradient-to-r from-purple-500 to-violet-600"
              delay={300}
            />
            <ServiceCard
              icon={Star}
              title="Textiles"
              description="Comprehensive textile industry services including storage, inventory management, and timely delivery solutions."
              color="bg-gradient-to-r from-amber-500 to-orange-600"
              delay={400}
            />
            <ServiceCard
              icon={Award}
              title="Tea & Coffee"
              description="Expert handling of tea and coffee shipments, preserving aroma, flavor, and quality throughout the supply chain."
              color="bg-gradient-to-r from-rose-500 to-pink-600"
              delay={500}
            />
            <ServiceCard
              icon={Clock}
              title="Express Courier"
              description="Swift and dependable courier services for urgent shipments, ensuring prompt and secure delivery worldwide."
              color="bg-gradient-to-r from-teal-500 to-cyan-600"
              delay={600}
            />
          </div>

          {/* Humanitarian Section - Enhanced */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <ServiceCard
                icon={Users}
                title="Humanitarian Logistics"
                description="Specialized logistics and transportation support for humanitarian organizations, ensuring timely delivery of critical aid and relief supplies to those in need."
                color="bg-gradient-to-r from-red-500 to-rose-600"
                delay={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/logos/logo.png" 
                  alt="ADL Aviation Logo" 
                  className="w-10 h-10 object-contain brightness-0 invert"
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'inline';
                  }}
                />
                <Plane 
                  className="w-8 h-8 text-white transform -rotate-45" 
                  style={{display: 'none'}}
                />
                <span className="text-2xl font-semibold">
                  <span className="text-white">adl</span>
                  <br />
                  <span className="text-sm tracking-wider">AVIATION</span>
                </span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                ADL Aviation has become East Africa's leading General Sales & Service Agent.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Airlines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Stay In Touch */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay In Touch</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/90 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
              <p>© 2023 adl aviation. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;