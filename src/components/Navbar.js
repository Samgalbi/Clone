import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Nabegh DNS" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Rechercher" />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <div className="cart">
            <a href="/panier">
              <FaShoppingCart />
              <span>Panier (0)</span>
            </a>
          </div>
        </div>
        <div className="main-menu">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/travelling-trepied">Travelling & Trépied</a></li>
            <li><a href="/eclairage-studio">Eclairage & Studio</a></li>
            <li><a href="/audio">Audio</a></li>
            <li><a href="/traitement-acoustique">Traitement acoustique</a></li>
            <li><a href="/accessoires">Accessoires</a></li>
            <li><a href="/support-tv">Support TV</a></li>
            <li><a href="/photo-video">Photo & vidéo</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;