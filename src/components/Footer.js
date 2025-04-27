import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>INFORMATIONS</h3>
            <p>NABEGH DNS</p>
            <p>14 Rue d'Athènes 1ère étage</p>
            <p>1001 Tunis</p>
            <p>Tunisia</p>
            <p>Appelez-nous : 00 216 55 33 03 35</p>
            <p>Écrivez-nous : commercial@nabegh-dns.tn</p>
          </div>
          <div className="footer-column">
            <h3>PRODUITS</h3>
            <ul>
              <li><a href="/promotions">Promotions</a></li>
              <li><a href="/nouveaux-produits">Nouveaux produits</a></li>
              <li><a href="/meilleures-ventes">Meilleures ventes</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>VOTRE COMPTE</h3>
            <ul>
              <li><a href="/informations-personnelles">Informations personnelles</a></li>
              <li><a href="/commandes">Commandes</a></li>
              <li><a href="/avoirs">Avoirs</a></li>
              <li><a href="/adresses">Adresses</a></li>
              <li><a href="/bons-reduction">Bons de réduction</a></li>
              <li><a href="/mes-alertes">Mes alertes</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 - Nabegh DNS™ - Distributeur Matériel Audiovisuel Pro & Broadcast.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;