import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MainSlider() {
  return (
    <div className="main-slider">
      <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
        <div className="slide comer-slide">
          <div className="slide-content">
            <div className="slide-text">
              <h2>PROJECTEUR LED CM - LED 5500K</h2>
              <button className="details-btn">voir détails</button>
            </div>
            <div className="product-images">
              <div className="product-stands">
                <img src="/images/led-standard.jpg" alt="LED Stands" />
              </div>
              <div className="product-panels">
                <div className="panel panel-3200">
                  <img src="/images/slider1.jpg" alt="LED 3200K" />
                  <span className="temperature">3200K</span>
                </div>
                <div className="panel panel-4500">
                  <img src="/images/slider2.jpg" alt="LED 4500K" />
                  <span className="temperature">4500K</span>
                </div>
                <div className="panel panel-5600">
                  <img src="/images/slider3.jpg" alt="LED 5600K" />
                  <span className="temperature">5600K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
}

export default MainSlider;