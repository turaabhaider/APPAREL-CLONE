// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InventoryFooter from './InventoryFooter';
import { getProductBySlug } from './productsData';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.find((c) => c.selected)?.name || null
  );

  // Find the full color object for whatever is currently selected, so we can
  // pull its image (falls back to the product's default image if that color
  // doesn't have its own image, e.g. only one colorway exists).
  const activeColor = product?.colors?.find((c) => c.name === selectedColor);
  const displayImage = activeColor?.image || product?.image;

  if (!product) {
    return (
      <div className="category-page">
        <Navbar isInventoryPage={true} />
        <main className="product-detail-container">
          <p className="product-not-found">We couldn't find that product.</p>
          <Link to="/inventory" className="back-to-inventory-link">
            &larr; RETURN TO INVENTORY
          </Link>
        </main>
        <InventoryFooter />
      </div>
    );
  }

  const maxUnits = Math.max(...product.sizes.map((s) => s.units || 0));

  return (
    <div className="category-page">
      <Navbar isInventoryPage={true} />

      <main className="product-detail-container">
        <div className="pd-breadcrumb">
          <Link to="/inventory">INVENTORY</Link> / <Link to={product.backPath}>{product.categoryLabel}</Link> / {product.sku}
        </div>

        <div className="pd-top">
          <div className="pd-image-box">
            <span className="gsm-badge">{product.gsm} GSM</span>
            <img
              src={displayImage}
              alt={activeColor ? `${product.name} - ${activeColor.name}` : product.name}
              className="pd-image"
            />
          </div>

          <div className="pd-info">
            <span className="pd-eyebrow">{product.sku}</span>
            <h1 className="pd-title">{product.name}</h1>
            <p className="pd-tagline">{product.tagline}</p>

            <div className="pd-divider" />

            <div className="pd-specs-row">
              <div className="pd-spec">
                <span className="pd-spec-label">WEIGHT</span>
                <span className="pd-spec-value">{product.weight}</span>
              </div>
              <div className="pd-spec">
                <span className="pd-spec-label">GSM</span>
                <span className="pd-spec-value">{product.gsm}</span>
              </div>
            </div>

            {product.packing && (
              <div className="pd-spec-block">
                <span className="pd-spec-label">PACKING</span>
                <p className="pd-spec-text">{product.packing}</p>
              </div>
            )}

            <div className="pd-spec-block">
              <span className="pd-spec-label">FABRIC</span>
              <p className="pd-spec-text">{product.fabric}</p>
            </div>

            {product.colors && (
              <div className="pd-spec-block">
                <span className="pd-spec-label">COLOR</span>
                <div className="pd-color-swatches">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`pd-color-swatch ${selectedColor === c.name ? 'is-selected' : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pd-actions">
              <a href="#inventory-levels" className="pd-btn-primary">
                VIEW INVENTORY LEVELS &darr;
              </a>
              <Link to={product.backPath} className="pd-btn-secondary">
                {product.backLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="pd-inventory" id="inventory-levels">
          <div className="pd-inventory-header">
            <div>
              <span className="pd-inventory-eyebrow">INVENTORY</span>
              <h2 className="pd-inventory-title">{product.inventoryLabel}</h2>
            </div>
            <div className="pd-inventory-total-label">
              <span>TOTAL UNITS</span>
              <span className="pd-inventory-total-value">
                {product.totalUnits.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="pd-size-grid">
            {product.sizes.map((s) => (
              <div className="pd-size-box" key={s.size}>
                <div className="pd-size-row">
                  <span className="pd-size-label">{s.size}</span>
                  <span className="pd-size-units-label">UNITS</span>
                </div>
                <span className="pd-size-value">
                  {s.units != null ? s.units.toLocaleString() : '—'}
                </span>
                <div className="pd-size-bar-track">
                  <div
                    className="pd-size-bar-fill"
                    style={{ width: s.units ? `${(s.units / maxUnits) * 100}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pd-total-bar">
            <span>TOTAL AVAILABLE</span>
            <span>{product.totalUnits.toLocaleString()}</span>
          </div>
        </div>

        <div className="pd-cta">
          <p>Ready to order or need a sample?</p>
          <a
            href={`mailto:standard@paktex.com?subject=${encodeURIComponent(
              product.sku + ' — ' + product.name
            )}`}
            className="pd-cta-btn"
          >
            ENQUIRE ABOUT THIS PRODUCT &rarr;
          </a>
        </div>
      </main>

      <InventoryFooter />
    </div>
  );
}