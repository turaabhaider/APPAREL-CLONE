import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Editorial from '../components/Editorial';
import Capabilities from '../components/Capabilities';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

export default function Home() {
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