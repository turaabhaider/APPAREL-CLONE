import React from 'react';
import '../styles/Capabilities.css';

const ITEMS = [
  {
    title: 'Knitting',
    desc: '100+ circular & flat bed machines. Single jersey to interlock, pique, fleece — yarn to greige in one floor.'
  },
  {
    title: 'Dyeing & Finishing',
    desc: '15,000 KGS certified dye house with reactive, pigment and garment dye lines. Design accuracy within ΔE 0.8.'
  },
  {
    title: 'Cut & Sew',
    desc: '2,400 stitchers across eight lines. T-shirts, polos, hoodies, activewear — built to spec, audited to AQL 1.5.'
  },
  {
    title: 'Quality & Export',
    desc: 'Inline and final inspection, customs in-house, shipped on schedule to 40+ markets across EU, UK and North America.'
  }
];

export default function Capabilities() {
  return (
    <section className="capabilities container">
      <div className="capabilities__eyebrow reveal-up">02 — CAPABILITIES</div>

      <h2 className="capabilities__heading reveal-up">
        Four floors.<br />One standard.
      </h2>

      <ul className="capabilities__list">
        {ITEMS.map((item, i) => (
          <li className="capability-row reveal-up" key={item.title}>
            <div className="capability-row__main">
              <span className="capability-row__index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="capability-row__title">
                <span>{item.title}</span>
                <svg
                  className="capability-row__arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h3>
            </div>
            <p className="capability-row__desc">{item.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}