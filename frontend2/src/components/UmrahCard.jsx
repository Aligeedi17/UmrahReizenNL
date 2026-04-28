import React from "react";

function UmrahCard({ pakket }) {
  return (
    <article className="umrah-card">
      <div className="umrah-image-wrapper">
        <img src={pakket.image} alt={pakket.title} />

        <span className="umrah-badge-left">Umrah</span>
        <span className="umrah-badge-right">{pakket.days}</span>
      </div>

      <div className="umrah-card-content">
        <h2>{pakket.title}</h2>
        <p className="umrah-date">📅 {pakket.date}</p>

        <p className="umrah-price">
            vanaf <strong>{pakket.price}</strong>
        </p>

        <div className="umrah-card-bottom">
          <div className="umrah-actions">
            <button>Bekijk</button>
            <button>Boeken →</button>
          </div>


        </div>
      </div>
    </article>
  );
}

export default UmrahCard;