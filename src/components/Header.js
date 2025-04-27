import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="contact-info">
            <p>Appelez-nous : 00 216 55 33 03 35</p>
          </div>
          <div className="header-right">
            <div className="currency-selector">
              <span>Devise : </span>
              <select>
                <option value="TND">TND</option>
              </select>
            </div>
            <button className="login-btn">
              <FaUser />
              <span>Connexion</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;