import React from "react";
import "../stylescss/Umrah.css";
import { umrahPackages } from "../data/umrahPackages";
import UmrahCard from "../components/UmrahCard";

function Umrah() {
  return (
    <main className="umrah-page">
      <section className="umrah-header">
        <h1>Umrah pakketten</h1>
        <p>Bekijk onze geplande Umrah reizen.</p>
      </section>

      <section className="umrah-grid">
        {umrahPackages.map((pakket) => (
          <UmrahCard key={pakket.id} pakket={pakket} />
        ))}
      </section>
    </main>
  );
}

export default Umrah;