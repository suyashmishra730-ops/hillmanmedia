import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Proof } from './components/Proof';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Proof />
        <CallToAction />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;