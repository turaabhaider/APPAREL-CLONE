import React, { useLayoutEffect, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './pages/Home';
import Inventory from './pages/Inventory';
import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

// 1. Create a helper component to watch for page changes
function RouteManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll to the very top when navigating between pages
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    // Re-run GSAP animations for the new DOM elements on the current page
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-up').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 60, autoAlpha: 0 },
          { 
            y: 0, 
            autoAlpha: 1, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            }
          }
        );
      });
    });

    // Clean up animations when leaving the page so they don't break on return
    return () => ctx.revert();
  }, [pathname]); // <--- This runs every time the URL changes

  return null;
}

export default function App() {
  
  useLayoutEffect(() => {
    // 2. Lenis stays here because we want smooth scrolling active globally forever
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      {/* 3. Drop the RouteManager inside the Router so it can detect URL changes */}
      <RouteManager />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}