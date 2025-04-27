import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import PromoProducts from './components/PromoProducts';
import PopularProducts from './components/PopularProducts';
import NewProducts from './components/NewProducts';
import BestSellers from './components/BestSellers';
import Brands from './components/Brands';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <MainSlider />
        <div className="container">
          <PromoProducts />
          <PopularProducts />
          <NewProducts />
          <BestSellers />
        </div>
        <Brands />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
