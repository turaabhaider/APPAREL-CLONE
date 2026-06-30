import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    let frame = null;

    // Flips the nav from light-text-on-dark-hero to dark-text-on-cream
    // once the hero has scrolled mostly out of view (matches the two
    // looks in the reference screenshots). If your hero section isn't
    // roughly one viewport tall, adjust the 0.85 multiplier below, or
    // swap this for an IntersectionObserver watching the hero element
    // directly for a more robust trigger.
    const updateTheme = () => {
      frame = null;
      const threshold = window.innerHeight * 0.85;
      setIsLight(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`nav-header${isLight ? ' theme-light' : ''}`}>
      {/* Left: Wordmark Logo */}
      <a href="/" className="nav-logo" aria-label="PakTex Apparel — Home">
        <span className="logo-line">PakTex</span>
        <span className="logo-line">
          Apparel<sup className="logo-reg">®</sup>
        </span>
        <span className="logo-tagline">The New Standard</span>
      </a>

      {/* Center: Nav Links */}
      <nav className="nav-center">
        <ul className="nav-links">
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#scale">Scale</a></li>
          <li><a href="#standard">Standard</a></li>
        </ul>
      </nav>

      {/* Right: CTA Button */}
      <div className="nav-right">
        <button className="nav-cta">
          <span className="cta-text">INVENTORY</span>
          <span className="cta-arrow">→</span>
        </button>
      </div>
    </header>
  );
}