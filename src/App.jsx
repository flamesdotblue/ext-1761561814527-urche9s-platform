import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-[#fff9c4] text-slate-800 px-4 py-2 rounded shadow"
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <main id="main-content" className="flex-1">
        <InfoSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
