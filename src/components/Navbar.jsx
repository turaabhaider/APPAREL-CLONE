import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ isInventoryPage = false }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // If we are on the inventory page, we force the light theme and skip scroll logic
    if (isInventoryPage) return;

    let frame = null;

    const updateTheme = () => {
      frame = null;
      // Triggers theme change after scrolling past 85% of the viewport height
      const threshold = window.innerHeight * 0.85;
      setIsLight(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateTheme);
    };

    // Initial check
    updateTheme();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isInventoryPage]);

  // Combine classes based on scroll state or if it is the inventory page
  const navClasses = `nav-header ${isLight ? 'theme-light' : ''} ${isInventoryPage ? 'inventory-nav' : ''}`;

  return (
    <header className={navClasses}>
      {/* Left: Wordmark Logo */}
      <Link to="/" className="nav-logo" aria-label="PakTex Apparel — Home">
        <span className="logo-line">PakTex</span>
        <span className="logo-line">
          Apparel<sup className="logo-reg">®</sup>
        </span>
        <span className="logo-tagline">The New Standard</span>
      </Link>

      {/* Center: Nav Links */}
      <nav className="nav-center">
        <ul className="nav-links">
          {/* We use href="/#..." so they work from both Home and Inventory pages */}
          <li><a href="/#capabilities">Capabilities</a></li>
          <li><a href="/#scale">Scale</a></li>
          <li><a href="/#standard">Standard</a></li>
        </ul>
      </nav>

      {/* Right: CTA Button */}
      <div className="nav-right">
        {isInventoryPage ? (
          <Link to="/" className="nav-cta">
            <span className="cta-arrow" style={{ transform: 'none', marginRight: '6px' }}>←</span>
            <span className="cta-text">HOME</span>
          </Link>
        ) : (
          <Link to="/inventory" className="nav-cta">
            <span className="cta-text">INVENTORY</span>
            <span className="cta-arrow">→</span>
          </Link>
        )}
      </div>
    </header>
  );
}