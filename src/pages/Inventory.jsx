import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Inventory.css';
import menImg from '../assets/men.png';
import womenImg from '../assets/women.png';

export default function Inventory() {
  return (
    <div className="inventory-page">
      <Navbar isInventoryPage={true} />
      
      <main className="inventory-container" style={{ paddingBottom: '15vh' }}>
        <section className="inv-header">
          <div className="inv-title-area">
            <span className="inv-eyebrow">INVENTORY</span>
            <h1 className="inv-title">
              Stock<span className="brand-comma">,</span> ready.
            </h1>
          </div>
          <div className="inv-desc-area">
            <p>
              Blank apparel from our floor. Select a category to view available styles, weights and sizes.
            </p>
          </div>
        </section>

        <section className="inv-grid">
          {/* Changed <a> to <Link> */}
          <Link to="/inventory/men" className="inv-card">
            <div className="inv-card-image-box">
              <span className="inv-card-count">3 STYLES</span>
              <img src={menImg} alt="Men's Apparel" className="inv-card-img" />
            </div>
            <div className="inv-card-footer">
              <h2 className="inv-card-title">Men</h2>
              <span className="inv-card-link">VIEW &rarr;</span>
            </div>
          </Link>

          {/* Changed <a> to <Link> */}
          <Link to="/inventory/women" className="inv-card">
            <div className="inv-card-image-box">
              <span className="inv-card-count">4 STYLES</span>
              <img src={womenImg} alt="Women's Apparel" className="inv-card-img" />
            </div>
            <div className="inv-card-footer">
              <h2 className="inv-card-title">Women</h2>
              <span className="inv-card-link">VIEW &rarr;</span>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}