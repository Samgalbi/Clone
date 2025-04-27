import React from 'react';
import ProductCard from './ProductCard';

function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      name: 'Mousse Acoustique Phonique',
      price: '9,80',
      image: '/images/products/mousse-acoustique-1.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    },
    {
      id: 2,
      name: 'Mousse Acoustique Phonique Studio',
      price: '12,495',
      image: '/images/products/mousse-acoustique-studio.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    },
    {
      id: 3,
      name: 'Panneau En Mousse Pyramidale',
      price: '9,758',
      image: '/images/products/panneau-mousse-pyramidale.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    },
    {
      id: 4,
      name: 'Clap Cinéma Grand Modèle',
      price: '29,00',
      image: '/images/products/clap-cinema.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    },
    {
      id: 5,
      name: 'Panneaux Acoustique Muraux',
      price: '9,52',
      image: '/images/products/panneaux-acoustique-muraux.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    },
    {
      id: 6,
      name: 'Mousse Acoustique Forme T',
      price: '65,45',
      image: '/images/products/mousse-acoustique-forme-t.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    }
  ];

  return (
    <section className="best-sellers section">
      <div className="section-header">
        <h2>MEILLEURES VENTES</h2>
      </div>
      <div className="products-grid">
        {bestSellers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="section-footer">
        <a href="/meilleures-ventes" className="see-all">Toutes les meilleures ventes &gt;</a>
      </div>
    </section>
  );
}

export default BestSellers;