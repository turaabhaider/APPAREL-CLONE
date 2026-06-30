import React, { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Editorial from './components/Editorial';
import Capabilities from './components/Capabilities';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  
  useLayoutEffect(() => {
    // 1. Initialize Vanilla Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Run Global Animations
    let ctx = gsap.context(() => {
      // Global stagger fade-up for elements across all components
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

    // Clean up instances on component unmount
    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Editorial />
        <Capabilities />
        <Showcase />
        <Footer />
      </main>
    </>
  );
}