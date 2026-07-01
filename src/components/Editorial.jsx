import React, { useEffect, useRef } from 'react';
import sewingImg from '../assets/sewing.png';
import '../styles/Editorial.css';

const HEADLINE =
  "Pakistan is home to some of the world's most reliable apparel producers. We are proud to be one of them—delivering for the nation's largest license groups, distributors, and uniform programs for over 25 years.";

export default function Editorial() {
  const sectionRef = useRef(null);
  const wordRefs = useRef([]);

  useEffect(() => {
    wordRefs.current = wordRefs.current.filter(Boolean);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Respect reduced-motion: skip the dim→ink animation entirely and just
    // show the headline fully read, instead of leaving half of it stuck dim.
    if (prefersReducedMotion) {
      wordRefs.current.forEach((w) => w.classList.add('is-read'));
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      wordRefs.current.forEach((w) => w.classList.add('is-read'));
      return undefined;
    }

    let frame = null;
    let listening = false;

    const updateWords = () => {
      frame = null;
      // Words whose center has crossed this horizontal line read as
      // "already read" and lock to full ink/bold; words still below it
      // stay dimmed, exactly like the reference's scroll-darken effect.
      const triggerY = window.innerHeight * 0.55;

      wordRefs.current.forEach((word) => {
        const rect = word.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (center < triggerY) {
          word.classList.add('is-read');
        } else {
          word.classList.remove('is-read');
        }
      });
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateWords);
    };

    const startListening = () => {
      if (listening) return;
      listening = true;
      updateWords();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    };

    const stopListening = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };

    // Only run the scroll loop while the section is actually near the
    // viewport — keeps this idle everywhere else on the page.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startListening();
        else stopListening();
      },
      { rootMargin: '15% 0px 15% 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      stopListening();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const words = HEADLINE.split(' ');

  return (
    <>
      {/* ===================================================
          01 — STANDARD
          Scroll-linked headline: words darken from dim to ink
          as they cross the trigger line on scroll.
          =================================================== */}
      <section id="standard" className="editorial container" ref={sectionRef}>
        <div className="editorial-label-col">
          <div className="label-tiny reveal-up">01 · STANDARD</div>
        </div>

        <div className="editorial-content-col">
          <h2 className="text-editorial reveal-up">
            {words.map((word, i) => (
              <React.Fragment key={i}>
                <span
                  className="ed-word"
                  ref={(el) => {
                    wordRefs.current[i] = el;
                  }}
                >
                  {word}
                </span>
                {i < words.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </h2>

          <div className="editorial-tag reveal-up">
            <span className="editorial-tag-line" />
            <span className="editorial-tag-text">The New Standard</span>
          </div>
        </div>
      </section>

      {/* ===================================================
          02 — MATERIAL
          Photo left, spec copy + stat row right.
          =================================================== */}
      <section className="material container">
        <div className="material-media reveal-up">
          <img src={sewingImg} alt="Stitching line on the production floor" />
        </div>

        <div className="material-content">
          <div className="label-tiny reveal-up">02 · MATERIAL</div>

          <h3 className="heading-large material-heading reveal-up">
            <span className="material-heading-strong">
              Fibre, weight, hand —
            </span>
            <br />
            <span className="material-heading-soft">
              measured to the gram.
            </span>
          </h3>

          <p className="material-copy reveal-up">
            Combed and ring-spun cotton from 140 to 320 GSM. Recipes logged
            per lot, hand-feel signed off before any garment leaves the
            floor. OEKO-TEX Standard 100 across the stack.
          </p>

          <div className="material-stats reveal-up">
            <div className="material-stat">
              <span className="material-stat-label">GSM Range</span>
              <span className="material-stat-value">140–320</span>
            </div>
            <div className="material-stat">
              <span className="material-stat-label">Color ΔE</span>
              <span className="material-stat-value">≤0.8</span>
            </div>
            <div className="material-stat">
              <span className="material-stat-label">AQL</span>
              <span className="material-stat-value">1.5</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}