import React from 'react';
import heroImg from '../assets/hero.png';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Layer */}
      <div className="hero-bg-wrapper">
        <img src={heroImg} alt="Manufacturing Facility" className="hero-img-bg" />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Main Content Layer */}
      <div className="hero-content">
        <div className="hero-title-wrapper">
          <h1 className="heading-massive reveal-up">
            The new standard <br />
            in apparel
            <span className="accent-square"></span>
          </h1>
        </div>

        <div className="hero-subtitle-wrapper reveal-up">
          <p className="subtitle-text">
            Building relationships one stitch at a time.
          </p>
        </div>
      </div>

      {/* Bottom Stats & Scroll Layer */}
      <div className="hero-bottom-bar reveal-up">
        {/* Stat 1 */}
        <div className="stat-block">
          <span className="stat-label">EST.</span>
          <span className="stat-value">1998</span>
        </div>

        {/* Scroll Indicator (Absolute Centered) */}
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-line"></div>
        </div>

        {/* Stat 2 */}
        <div className="stat-block">
          <span className="stat-label">CAPACITY</span>
          <span className="stat-value">12M units / year</span>
        </div>

        {/* Stat 3 */}
        <div className="stat-block">
          <span className="stat-label">FOOTPRINT</span>
          <span className="stat-value">Karachi · Faisalabad · Sialkot</span>
        </div>
      </div>
    </section>
  );
}