import React from "react";
import "../stylescss/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-info">
          <h1>Contact</h1>

          <p className="contact-intro">
            Als je een vraag hebt of met ons in contact wil, staan we je graag
            te woord.
          </p>

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
          <h2>Stuur een bericht</h2>

          <input type="text" placeholder="Naam" />

          <input type="email" placeholder="E-mailadres" />

          <select defaultValue="">
            <option value="" disabled>
              Kies een onderwerp
            </option>
            <option value="umrah">Umrah reis</option>
            <option value="hadj">Hadj reis</option>
            <option value="vraag">Algemene vraag</option>
          </select>

          <textarea placeholder="Bericht"></textarea>

          <button type="submit">Versturen</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;