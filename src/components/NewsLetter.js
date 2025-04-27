import React from 'react';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <p>Recevez nos offres spéciales</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Votre adresse e-mail" />
            <button className="subscribe-btn">S'ABONNER</button>
          </div>
          <div className="newsletter-disclaimer">
            <p>Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;