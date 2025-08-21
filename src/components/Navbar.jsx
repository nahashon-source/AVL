import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "About Us", "Airlines", "Agents", "Contact Us"];

  return (
    <nav>
      <div className="container">
        <a href="#home" className="brand">
          ADL Aviation
        </a>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <span>&#10005;</span> // X symbol
          ) : (
            <span>&#9776;</span> // Hamburger menu
          )}
        </button>
      </div>
    </nav>
  );
}
