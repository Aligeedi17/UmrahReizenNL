import React from "react";
import { Link } from "react-router-dom";
import { umrahPackages } from "../data/umrahPackages";
import UmrahCard from "./UmrahCard";
import "../stylescss/Umrah.css";
import "../stylescss/FeaturePackages.css";

function FeaturePackages() {
  const featuredPackages = umrahPackages.slice(0, 3);

  return (
    <section className="feature-packages">
      <div className="feature-header">
        <h2>Populaire Umrah pakketten</h2>
        <p>Een selectie van onze geplande reizen.</p>
      </div>

      <div className="umrah-grid">
        {featuredPackages.map((pakket) => (
          <UmrahCard key={pakket.id} pakket={pakket} />
        ))}
      </div>

      <div className="feature-button-wrapper">
        <Link to="/umrah" className="feature-button">
          Bekijk alle pakketten
        </Link>
      </div>
    </section>
  );
}

export default FeaturePackages;