import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <section className="stats-footer">
      <div className="label-tiny reveal-up" style={{ marginBottom: '5vw' }}>04 — SCALE</div>
      <h2 className="heading-large reveal-up">Built to <span className="accent-dot">deliver.</span></h2>
      <div className="stats-grid">
        <div className="reveal-up"><div className="stat-number">12M</div><div className="label-tiny">UNITS / YEAR</div></div>
        <div className="reveal-up"><div className="stat-number">80+</div><div className="label-tiny">SKILLED STAFF</div></div>
        <div className="reveal-up"><div className="stat-number">28+</div><div className="label-tiny">YEARS</div></div>
        <div className="reveal-up"><div className="stat-number">3</div><div className="label-tiny">MANUFACTURING FACILITIES</div></div>
      </div>
      <div className="footer-bottom">
        <div>
          <div className="label-tiny reveal-up" style={{ marginBottom: '2vw' }}>START A PROJECT</div>
          <h2 className="heading-large reveal-up" style={{ fontSize: '4.5rem' }}>Let's build<br />the standard<span className="accent-dot">.</span></h2>
        </div>
        <div className="label-tiny footer-links reveal-up">
           <div className="footer-col"><p>KARACHI</p><p>74/1 Block 7/8, KCHSU</p><p>Karachi, Pakistan</p></div>
           <div className="footer-col"><p>SOCIALS</p><p>LinkedIn</p><p>Instagram</p></div>
        </div>
      </div>
      <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '6vw 0 2vw' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2vw' }} className="label-tiny">
        <p>© 2026 Professional Apparel Solutions</p>
        <p>The New Standard</p>
      </div>
    </section>
  );
}