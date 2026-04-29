import React from "react";
import "../stylescss/Contact.css";

function Boeking() {
  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-info">
          <h1>Boeking</h1>



          <div className="contact-block">
            <h3>Bezoekadres - op afspraak</h3>
            <p>OskadeWijzer 477WM, 8934 LW Amsterdam</p>
          </div>

          <div className="contact-block">
            <h3>Telefonische bereikbaarheid</h3>
            <p>maandag t/m zaterdag van 11:00 tot 20:00</p>
          </div>

          <a href="tel:+31612067306" className="contact-button">
            ☎ +31 (0) 6 99 99 99 99
          </a>

          <a href="mailto:info@mekka-medina.nl" className="contact-button">
            ✉ info@UmrahReizen.nl
          </a>
        </div>

        <form className="contact-form">
          <h2>Boeking</h2>
          <select defaultValue="">
            <option value="" disabled>
              Gekozen Umrah pakket
            </option>
            <option value="umrah">Umrah reis</option>
            <option value="hadj">Hadj reis</option>
            <option value="vraag">Algemene vraag</option>
          </select>

          <input type="text" placeholder="Naam Boeker" />
          <input type="text" placeholder="Achternaam Boeker" />

          <input type="email" placeholder="E-mailadres" />
          <input type="text" placeholder="Telefoonnummer" />



          <textarea placeholder="Bericht"></textarea>

          <button type="submit">Boeken</button>
        </form>
      </section>
    </main>
  );
}

export default Boeking;