import React from 'react';
import './InventoryFooter.css';

export default function InventoryFooter() {
  return (
    <footer className="inventory-site-footer">
      <div className="inv-footer-top">
        <div className="inv-footer-left">
          <span className="inv-footer-eyebrow">START A PROJECT</span>
          <h2 className="inv-footer-heading">
            Let's build <br />
            <span className="inv-text-orange">the standard.</span>
          </h2>
          <a href="mailto:standard@paktex.com" className="inv-footer-email">
            standard@paktex.com &rarr;
          </a>
        </div>
        
        <div className="inv-footer-right">
          <div className="inv-footer-column">
            <span className="inv-footer-eyebrow">KARACHI</span>
            <address>
              Scheme 33, Gulzar e Hijri<br />
              Karachi, Pakistan
            </address>
          </div>
          <div className="inv-footer-column">
            <span className="inv-footer-eyebrow">LAGUNA BEACH</span>
            <address>
              Starlit Drive<br />
              California, United States
            </address>
          </div>
          <div className="inv-footer-column">
            <span className="inv-footer-eyebrow">FOLLOW</span>
            <div className="inv-footer-links">
              <a href="#linkedin">LinkedIn</a>
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="inv-footer-bottom">
        <div className="inv-footer-logo-area">
          <span className="inv-footer-logo-line">PakTex</span>
          <span className="inv-footer-logo-line">
            Apparel<sup className="inv-logo-reg">®</sup>
          </span>
          <span className="inv-footer-logo-tagline">The New Standard</span>
        </div>
        <div className="inv-footer-legal">
          <p>&copy; 2026 PakTex Apparel®</p>
          <p>The New Standard</p>
        </div>
      </div>
    </footer>
  );
}