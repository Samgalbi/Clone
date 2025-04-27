import React from 'react';
import ProductCard from './ProductCard';

function PopularProducts() {
  const popularProducts = [
    {
      id: 1,
      name: 'Flash Voeloon 700RX',
      price: '720,00',
      image: '/images/products/flash-voeloon-700rx.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 2,
      name: 'Trigger Voeloon 810RT',
      price: '137,00',
      image: '/images/products/trigger-voeloon-810rt.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 3,
      name: 'Flash Voeloon FJ40 II',
      price: '479,00',
      image: '/images/products/flash-voeloon-fj40-ii.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 4,
      name: 'Flash Voeloon V58',
      price: '645,00',
      image: '/images/products/flash-voeloon-v58.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 5,
      name: 'Flash Voeloon V760',
      price: '680,00',
      image: '/images/products/flash-voeloon-v760.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 6,
      name: 'Commande VX-5 Pour Nikon',
      price: '125,00',
      image: '/images/products/commande-vx5-nikon.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    }
  ];

  return (
    <section className="popular-products section">
      <div className="section-header">
        <h2>PRODUITS POPULAIRES</h2>
      </div>
      <div className="products-grid">
        {popularProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="section-footer">
        <a href="/products" className="see-all">Tous les produits &gt;</a>
      </div>
    </section>
  );
}

export default PopularProducts;