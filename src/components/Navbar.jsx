import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ isInventoryPage = false }) {
  const [isLight, setIsLight] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInventoryPage) return;

    let frame = null;

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
  }, [isInventoryPage]);

  // Smooth section navigation
  const goToSection = (id) => {
    // If we're not on home, navigate there first
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);

    if (!element) return;

    // Lenis support
    if (window.lenis) {
      window.lenis.scrollTo(element, {
        duration: 1.4,
      });
    } else {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navClasses = `nav-header ${isLight ? 'theme-light' : ''} ${
    isInventoryPage ? 'inventory-nav' : ''
  }`;

  return (
    <header className={navClasses}>
      {/* Logo */}
      <Link to="/" className="nav-logo" aria-label="PakTex Apparel — Home">
        <span className="logo-line">PakTex</span>
        <span className="logo-line">
          Apparel<sup className="logo-reg">®</sup>
        </span>
        <span className="logo-tagline">The New Standard</span>
      </Link>

      {/* Navigation */}
      <nav className="nav-center">
        <ul className="nav-links">
          <li>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => goToSection('capabilities')}
            >
              Capabilities
            </button>
          </li>

          <li>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => goToSection('scale')}
            >
              Scale
            </button>
          </li>

          <li>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => goToSection('standard')}
            >
              Standard
            </button>
          </li>
        </ul>
      </nav>

      {/* Right CTA */}
      <div className="nav-right">
        {isInventoryPage ? (
          <Link to="/" className="nav-cta">
            <span
              className="cta-arrow"
              style={{ transform: 'none', marginRight: '6px' }}
            >
              ←
            </span>
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