import React from 'react';
import { Link } from 'react-router-dom';
import '../stylescss/Hero.css';
import { umrahPackages } from '../data/umrahPackages';

const Hero = () => {
  const nextTrip = umrahPackages[0];

  return (
    <main className="hero">
      <section className="hero-content">
        <p className="hero-label">Mekka & Medina Reizen</p>

        <h1>Verzorgde Umrah reizen</h1>

        <p className="hero-text">
          Met jarenlange ervaring zorgen wij voor een comfortabele en volledig
          georganiseerde reis, zodat u zich volledig kunt richten op uw
          aanbidding.
        </p>

        <div className="hero-buttons">
          <Link to="/umrah" className="primary-btn">
            Bekijk pakketten
          </Link>

          <Link to="/contact" className="secondary-btn">
            Neem contact op
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Hero;