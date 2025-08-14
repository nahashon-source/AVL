import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Plane } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/agents', label: 'Agents' },
    { path: '/airlines', label: 'Airlines' },
    { path: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
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
              className="w-6 h-6 text-blue-600 transform -rotate-45" 
              style={{display: 'none'}}
            />
            <span className="text-2xl font-bold text-blue-600">
              ADL Aviation
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button (simplified) */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-sm ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
