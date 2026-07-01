import React, { useEffect, useRef } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const numbers = footer.querySelectorAll('.stat-number');

    const animateCounters = () => {
      numbers.forEach((el) => {
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix || '';

        const duration = 1800;
        const startTime = performance.now();

        function update(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = Math.floor(progress * target);

          el.textContent = value + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-footer" ref={footerRef}>
      {/* Top Header Section */}
      <div className="footer-top-header">
        <div className="header-left reveal-up">
          <div className="label-tiny">05 - SCALE</div>
          <div className="header-logo">
            <strong>
              PakTex
              <br />
              Apparel<sup>®</sup>
            </strong>
            <span className="logo-subtext">The New Standard</span>
          </div>
        </div>

        <h2 className="heading-large reveal-up">
          Built to <span className="accent-orange">deliver.</span>
        </h2>

        <div className="header-right reveal-up">
          <a href="#inventory" className="inventory-btn">
             &rarr;
          </a>
        </div>
      </div>

      {/* Stats Grid Section */}
      <div id="scale" className="stats-grid">
        <div className="stat-col reveal-up">
          <div
            className="stat-number"
            data-target="12"
            data-suffix="M"
          >
            0
          </div>

          <div className="label-tiny stat-title">UNITS / YEAR</div>
          <div className="stat-subtext">
            Tees - Hoodies - Denim - Activewear
          </div>
        </div>

        <div className="stat-col reveal-up">
          <div
            className="stat-number"
            data-target="80"
            data-suffix="+"
          >
            0
          </div>

          <div className="label-tiny stat-title">SKILLED STAFF</div>
          <div className="stat-subtext">
            Across knit, dye, cut, sew
          </div>
        </div>

        <div className="stat-col reveal-up">
          <div
            className="stat-number"
            data-target="28"
            data-suffix="+"
          >
            0
          </div>

          <div className="label-tiny stat-title">YEARS</div>
          <div className="stat-subtext">
            Building for global brands
          </div>
        </div>

        <div className="stat-col reveal-up">
          <div
            className="stat-number"
            data-target="3"
          >
            0
          </div>

          <div className="label-tiny stat-title">
            INTEGRATED FACILITIES
          </div>

          <div className="stat-subtext">
            Karachi - Faisalabad - Sialkot
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div
            className="label-tiny reveal-up"
            style={{ marginBottom: '1.5rem' }}
          >
            START A PROJECT
          </div>

          <h2 className="heading-huge reveal-up">
            Let's build
            <br />
            <span className="accent-orange">the standard.</span>
          </h2>

          <a
            href="mailto:standard@paktex.com"
            className="email-link reveal-up"
          >
            standard@paktex.com &rarr;
          </a>
        </div>

        <div className="footer-links reveal-up">
          <div className="footer-col">
            <p className="col-heading label-tiny">KARACHI</p>
            <p>Scheme 33, Gulzar e Hijri</p>
            <p>Karachi, Pakistan</p>
          </div>

          <div className="footer-col">
            <p className="col-heading label-tiny">LAGUNA BEACH</p>
            <p>Starlit Drive</p>
            <p>California, United States</p>
          </div>

          <div className="footer-col">
            <p className="col-heading label-tiny">FOLLOW</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Bottom Center Logo */}
      <div className="footer-bottom-logo reveal-up">
        <div className="big-logo">
          <strong>
            PakTex
            <br />
            Apparel<sup>®</sup>
          </strong>

          <span className="logo-subtext">
            The New Standard
          </span>
        </div>
      </div>
    </section>
  );
}