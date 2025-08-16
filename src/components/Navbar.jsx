// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Plane } from "lucide-react";

// const Navbar = () => {
//   const [logoError, setLogoError] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About Us" },
//     { path: "/airlines", label: "Airlines" },
//     { path: "/agents", label: "Agents" },
//     { path: "/contact", label: "Contact Us" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-sm" : "bg-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center space-x-2">
//             {!logoError ? (
//               <img
//                 src="/logos/792b28e937c8f9de7bcdcebb2d2d447ba60bd0e0.png"
//                 alt="ADL Aviation Logo"
//                 className="w-10 h-10 object-contain"
//                 onError={() => setLogoError(true)}
//               />
//             ) : (
//               <Plane className="w-10 h-10 text-blue-600 transform -rotate-45" />
//             )}
//             <span className="text-xl font-semibold tracking-wide text-gray-800">
//               ADL Aviation
//             </span>
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`text-sm font-medium tracking-wide transition-colors ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-gray-700 hover:text-blue-600"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Mobile Navigation (scrollable row) */}
//           <div className="md:hidden flex space-x-4 overflow-x-auto scrollbar-hide">
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;
//               return (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`whitespace-nowrap text-sm font-medium tracking-wide ${
//                     isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plane } from "lucide-react";
import "../index.css"; // import CSS file

const Navbar = () => {
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/airlines", label: "Airlines" },
    { path: "/agents", label: "Agents" },
    { path: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          {!logoError ? (
            <img
              src="/logos/792b28e937c8f9de7bcdcebb2d2d447ba60bd0e0.png"
              alt="ADL Aviation Logo"
              className="logo-img"
              onError={() => setLogoError(true)}
            />
          ) : (
            <Plane className="logo-fallback" />
          )}
          <span className="brand-text">ADL Aviation</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Links */}
        <div className="nav-links-mobile">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link-mobile ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
