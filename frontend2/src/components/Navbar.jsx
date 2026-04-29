import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../stylescss/Navbar.css';
import logo from '../images/logo.svg';

const Navbar = () => {
  const message = encodeURIComponent(
  "As-salamu alaykoem!, ik wil graag meer informatie over jullie Umrah reizen."
);

const phone = "31612345678";
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

        <NavLink to="/blogs" className="nav-link">
          Blogs
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        
      </div>

      <div className="nav-btn">
        <a
          href={`https://wa.me/${phone}?text=${message}`}
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