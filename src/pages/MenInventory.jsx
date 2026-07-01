import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InventoryFooter from './InventoryFooter';
import '../styles/InventoryCategory.css';

// Importing assets based on your file structure
import p18500 from '../assets/Premium Blended Fleece Pullover.png';
import p4000 from '../assets/Premium Black Fleece Pullover.png';
import mineralTee from '../assets/Mineral Wash Tee.png';

export default function MenInventory() {
  return (
    <div className="category-page">
      <Navbar isInventoryPage={true} />
      
      <main className="category-container">
        <Link to="/inventory" className="back-to-inventory-link">
          &larr; RETURN TO INVENTORY
        </Link>

        <header className="cat-header">
          <h1 className="cat-title">Men<span className="brand-dot">.</span></h1>
          <div className="cat-meta">
            <span className="cat-meta-label">STYLES</span>
            <span className="cat-meta-value">3 available</span>
          </div>
        </header>

        <div className="product-grid">
          <Link to="/inventory/men/pt-18500" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">280 GSM</span>
              <img src={p18500} alt="Premium Blended Fleece Pullover" className="product-img" />
            </div>
            <div className="product-sku">PT-18500</div>
            <h3 className="product-title">Premium Blended Fleece Pullover</h3>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </Link>

          <Link to="/inventory/men/pt-4000" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">340 GSM</span>
              <img src={p4000} alt="Premium Black Fleece Pullover" className="product-img" />
            </div>
            <div className="product-sku">PT-4000</div>
            <h3 className="product-title">Premium Black Fleece Pullover</h3>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </Link>

          <Link to="/inventory/men/pt-5000-mw" className="product-card">
            <div className="product-image-box">
              <span className="gsm-badge">180 GSM</span>
              <img src={mineralTee} alt="Mineral Wash Tee" className="product-img" />
            </div>
            <div className="product-sku">PT-5000-MW</div>
            <h3 className="product-title">Mineral Wash Tee</h3>
            <span className="view-link">VIEW PRODUCT &rarr;</span>
          </Link>
        </div>
      </main>
      <InventoryFooter />
    </div>
  );
}