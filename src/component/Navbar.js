import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/LOG.png";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Temple Logo" className="navbar-logo" />
        <span className="navbar-title">Divine Temple</span>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active-link" : "")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active-link" : "")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active-link" : "")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "navbar-link" + (isActive ? " active-link" : "")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              "navbar-link donate-btn" + (isActive ? " active-link" : "")
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
