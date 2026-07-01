import React, { useLayoutEffect, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import MenInventory from './pages/MenInventory';
import WomenInventory from './pages/WomenInventory';
import ProductDetail from './pages/ProductDetail';

// Styles
import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

function RouteManager() {
  const location = useLocation();

  // Reveal animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((elem) => {
        gsap.fromTo(
          elem,
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [location.pathname]);

  // Handle navigation + hashes
  useEffect(() => {
    const timer = setTimeout(() => {
      // No hash → scroll to top
      if (!location.hash) {
        if (window.lenis) {
          window.lenis.scrollTo(0, {
            immediate: true,
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'auto',
          });
        }

        return;
      }

      const target = document.getElementById(location.hash.substring(1));

      if (!target) return;

      if (window.lenis) {
        window.lenis.scrollTo(target, {
          offset: -20,
          duration: 1.4,
        });
      } else {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

export default function App() {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Make Lenis available globally
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <RouteManager />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/men" element={<MenInventory />} />
        <Route path="/inventory/women" element={<WomenInventory />} />
        <Route
          path="/inventory/:category/:slug"
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  );
}