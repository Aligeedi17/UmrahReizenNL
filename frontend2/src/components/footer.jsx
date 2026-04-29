import React from "react";
import "../stylescss/Footer.css"
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / Intro */}
        <div className="footer-section">
          <h2>UmrahReizenNL</h2>
          <p>
            Wij bieden volledig verzorgde Umrah reizen met focus op comfort,
            begeleiding en een zorgeloze ervaring.
          </p>
        </div>

        {/* Navigatie */}
        <div className="footer-section">
          <h3>Navigatie</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Over ons</a></li>
            <li><a href="/umrah">Pakketten</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <a href="mailto:info@umrahreizennl.nl" className="footer-link">
            <FaEnvelope /> info@umrahreizennl.nl
          </a>

          <a
            href="https://wa.me/31612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link whatsapp"
          >
            <FaWhatsapp /> WhatsApp ons
          </a>

          <div className="footer-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UmrahReizenNL. Alle rechten voorbehouden. | <a href="/privacy">Privacybeleid</a> | <a href="/terms">Algemene voorwaarden</a>
      </div>

    </footer>
  );
}

export default Footer;