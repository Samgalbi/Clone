import React from 'react';
import ProductCard from './ProductCard';

function PromoProducts() {
  const promoProducts = [
    {
      id: 1,
      name: 'Flash Voeloon 331EX',
      price: '370,00',
      oldPrice: '540,00',
      image: '/images/slider1.jpg',
      brandLogo: '/images/brands/voeloon.png',
      brand: 'Voeloon'
    },
    {
      id: 2,
      name: 'Filtre UV 67mm',
      price: '28,00',
      oldPrice: '35,00',
      image: '/images/products/filtre-uv-67mm.jpg',
      brandLogo: '/images/brands/kenko.png',
      brand: 'Kenko'
    },
    {
      id: 3,
      name: 'Clamp Super Pince JY0012',
      price: '22,00',
      oldPrice: '30,00',
      image: '/images/products/clamp-super-pince-jy0012.jpg',
      brandLogo: '/images/brands/jieyang.png',
      brand: 'JieYang'
    },
    {
      id: 4,
      name: 'Clamp Super Pince XJY219',
      price: '20,00',
      oldPrice: '28,00',
      image: '/images/products/clamp-super-pince-xjy219.jpg',
      brandLogo: '/images/brands/jieyang.png',
      brand: 'JieYang'
    }
  ];

  return (
    <section className="promo-products section">
      <div className="section-header">
        <h2>EN PROMO</h2>
      </div>
      <div className="products-grid">
        {promoProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="section-footer">
        <a href="/promotions" className="see-all">Tous les produits en promotion &gt;</a>
      </div>
    </section>
  );
}

export default PromoProducts;