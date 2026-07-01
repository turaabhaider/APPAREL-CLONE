import React from 'react';
import Navbar from '../components/Navbar';
import InventoryFooter from './InventoryFooter';
import '../styles/InventoryCategory.css';

// Importing assets based on your file structure
import babyTee from '../assets/Premium Baby Tee.png';
import boyfriendTee from '../assets/Premium Boyfriend Tee.png';
import cropTee from '../assets/Jersey Boxy Crop Tee.png';
import ribBoxyCropTee from '../assets/Rib Boxy Crop Tee.png';

export default function WomenInventory() {
  return (
    <div className="category-page">
      <Navbar isInventoryPage={true} />
      
      <main className="category-container">
        <a href="/inventory" className="back-to-inventory-link">
          &larr; RETURN TO INVENTORY
        </a>

        <header className="cat-header">
          <h1 className="cat-title">Women<span className="brand-dot">.</span></h1>
          <div className="cat-meta">
            <span className="cat-meta-label">STYLES</span>
            <span className="cat-meta-value">4 available</span>
          </div>
        </header>

        <div className="product-grid">
          <a href="#product" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">180 GSM</span>
              <img src={babyTee} alt="Premium Baby Tee" className="product-img" />
            </div>
            <div className="product-sku">W2017</div>
            <h3 className="product-title">Premium Baby Tee</h3>
            <p className="product-desc">50/50 Cotton-Poly 1x1 Rib Baby Tee</p>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </a>

          <a href="#product" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">150 GSM</span>
              <img src={boyfriendTee} alt="Premium Boyfriend Tee" className="product-img" />
            </div>
            <div className="product-sku">W2012</div>
            <h3 className="product-title">Premium Boyfriend Tee</h3>
            <p className="product-desc">60/40 Cotton-Poly Jersey Boyfriend Tee</p>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </a>

          <a href="#product" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">145 GSM</span>
              <img src={cropTee} alt="Jersey Boxy Crop Tee" className="product-img" />
            </div>
            <div className="product-sku">W2036</div>
            <h3 className="product-title">Jersey Boxy Crop Tee</h3>
            <p className="product-desc">100% Cotton Jersey Boxy Crop Tee</p>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </a>

          <a href="#product" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">180 GSM</span>
              <img src={ribBoxyCropTee} alt="Rib Boxy Crop Tee" className="product-img" />
            </div>
            <div className="product-sku">W2036</div>
            <h3 className="product-title">Rib Boxy Crop Tee</h3>
            <p className="product-desc">100% Cotton 1x1 Rib Boxy Crop Tee</p>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </a>
        </div>
      </main>
      <InventoryFooter />
    </div>
  );
}