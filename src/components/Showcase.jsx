import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Showcase.css';

import cutSewImg from '../assets/CUT-SEW.png';
import dyeingImg from '../assets/DYEING.png';
import finishingImg from '../assets/FINISHING.png';
import sewingImg from '../assets/sewing.png';

gsap.registerPlugin(ScrollTrigger);

const FACILITIES = [
  { eyebrow: 'KARACHI — FACILITY 01', title: 'Cut & Sew', image: cutSewImg },
  { eyebrow: 'FAISALABAD — FACILITY 02', title: 'Dyeing', image: dyeingImg },
  { eyebrow: 'SIALKOT — FACILITY 03', title: 'Finishing', image: finishingImg },
  { eyebrow: 'LAHORE — FACILITY 04', title: 'Sewing', image: sewingImg },
];

export default function Showcase() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    const progressFill = progressRef.current;
    if (!track || !container) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Pin-and-scrub only on wide screens with no reduced-motion preference.
      // Below 900px (or with reduced motion on), the track falls back to a
      // plain swipeable, scroll-snapping row — see the CSS fallback block.
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const getScrollDistance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: () => `+=${getScrollDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressFill) {
                progressFill.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });

        return () => {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="showcase-wrapper">
      <div className="showcase-header">
        <div className="label-tiny reveal-up showcase-eyebrow">04 · FLOOR</div>
        <h2 className="heading-large reveal-up">
          Inside the <br /><span className="accent-dot">floor.</span>
        </h2>
        <p className="showcase-subtitle reveal-up">
          Four processes, three cities, one continuous chain of custody — from greige fabric to packed carton.
        </p>
      </div>

      <div className="horizontal-container" ref={containerRef}>
        <div className="horizontal-track" ref={trackRef}>
          {FACILITIES.map((facility) => (
            <article className="horizontal-panel" key={facility.title}>
              <img
                className="panel-bg"
                src={facility.image}
                alt={facility.title}
                loading="lazy"
              />
              <div className="panel-content">
                <div className="label-tiny panel-eyebrow">{facility.eyebrow}</div>
                <h3 className="heading-large panel-title">{facility.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="scroll-progress" aria-hidden="true">
          <div className="scroll-progress__fill" ref={progressRef} />
        </div>
        <div className="swipe-hint" aria-hidden="true">Swipe to explore</div>
      </div>
    </section>
  );
}