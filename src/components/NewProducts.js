import React from 'react';
import ProductCard from './ProductCard';

function NewProducts() {
  const newProducts = [
    {
      id: 1,
      name: 'Mousse Acoustique Phonique...',
      price: '12,852',
      image: '/images/products/mousse-acoustique-phonique.jpg',
      brandLogo: '/images/brands/nabegh.png',
      brand: 'Nabegh'
    }
  ];

  return (
    <section className="new-products section">
      <div className="section-header">
        <h2>NOUVEAUX PRODUITS</h2>
      </div>
      <div className="products-grid">
        {newProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="section-footer">
        <a href="/nouveaux-produits" className="see-all">Tous les nouveaux produits &gt;</a>
      </div>
    </section>
  );
}

export default NewProducts;