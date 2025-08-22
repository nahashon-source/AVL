// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Airlines", href: "#" },
//     { name: "Agents", href: "#" },
//     { name: "Contact Us", href: "#" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-20 bg-gray-900/70 backdrop-blur-md text-white">
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Left side: Logo */}
//         <div className="text-2xl font-extrabold tracking-wide text-blue-400">
//           ADL
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-1 justify-evenly ml-12">
//           {navLinks.map((link, idx) => (
//             <li key={idx}>
//               <a
//                 href={link.href}
//                 className="hover:text-blue-400 transition-colors font-medium"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 space-y-4">
//           {navLinks.map((link, idx) => (
//             <a
//               key={idx}
//               href={link.href}
//               className="block text-white hover:text-blue-400 transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Airlines", href: "#" },
    { name: "Agents", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-blue-400">
          ADL
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-evenly ml-12">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block text-white hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
