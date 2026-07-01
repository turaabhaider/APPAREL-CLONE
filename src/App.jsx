import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your pages
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import MenInventory from './pages/MenInventory';
import WomenInventory from './pages/WomenInventory';
import ProductDetail from './pages/ProductDetail';

// Import styles
import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

// Helper component to handle route-based animations and scroll behavior
function RouteManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset scroll position to top on navigation[cite: 12]
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    // Re-initialize animations for new page elements[cite: 12]
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

    return () => ctx.revert(); // Cleanup on route change[cite: 12]
  }, [pathname]);

  return null;
}

export default function App() {
  
  useLayoutEffect(() => {
    // Initialize smooth scrolling[cite: 12]
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
      <RouteManager />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/men" element={<MenInventory />} />
        <Route path="/inventory/women" element={<WomenInventory />} />
        <Route path="/inventory/:category/:slug" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}