import React from 'react';

function Brands() {
  const brands = [
    { name: 'COMICA', logo: '/images/brands/comica.png' },
    { name: 'KINGJOY', logo: '/images/brands/kingjoy.png' },
    { name: 'COMER', logo: '/images/brands/comer.png' },
    { name: 'BEIKE', logo: '/images/brands/beike.png' },
    { name: 'Voeloon', logo: '/images/brands/voeloon.png' },
    { name: 'JIEYANG', logo: '/images/brands/jieyang.png' },
    { name: 'OMB', logo: '/images/brands/omb.png' }
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;