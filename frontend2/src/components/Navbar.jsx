import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../stylescss/Navbar.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="nav">

      <NavLink to="/" className="nav-logo">
        UmrahReizenNL
        <img src={logo} alt="logo" />
      </NavLink>

      <FaBars className="bars" />

      <div className="nav-menu">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/umrah" className="nav-link">
          Umrah
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        
      </div>

      <div className="nav-btn">
        <a
          href="https://wa.me/31612345678"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn-link whatsapp"
        >
          WhatsApp
        </a>
      </div>

    </nav>
  );
};

export default Navbar;