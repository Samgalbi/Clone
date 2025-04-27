import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-logo">
        <img src={product.brandLogo} alt={product.brand} />
      </div>
      <h3 className="product-title">{product.name}</h3>
      <div className="product-price">
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice} TND</span>
        )}
        <span className="current-price">{product.price} TND</span>
      </div>
    </div>
  );
}

export default ProductCard;
