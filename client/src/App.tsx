import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustedCompanies } from './components/sections/TrustedCompanies';
import { Features } from './components/sections/Features';
import { DashboardShowcase } from './components/sections/DashboardShowcase';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { AdminPage } from './pages/AdminPage';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');

  return (
    <div className="min-h-screen flex flex-col bg-white text-dark">
      {/* Navbar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentView === 'landing' ? (
          <>
            <Hero />
            <TrustedCompanies />
            <Features />
            <DashboardShowcase />
            <WhyChooseUs />
            <Stats />
            <Testimonials />
            <FinalCTA />
          </>
        ) : (
          <AdminPage />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
