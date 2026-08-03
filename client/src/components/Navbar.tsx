import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, LayoutDashboard, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'admin';
  setCurrentView: (view: 'landing' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass-panel py-3 shadow-sm'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-200/60'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

        
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-sm shadow-primary/25"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-dark flex items-center gap-1">
                TaskFlow <span className="text-primary font-black">AI</span>
              </span>
              <span className="text-[9px] font-bold text-secondary/80 tracking-widest uppercase -mt-1">
                Project Intelligence
              </span>
            </div>
          </a>

           {currentView === 'landing' && (
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-secondary hover:text-dark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

           <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentView(currentView === 'landing' ? 'admin' : 'landing')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg text-secondary hover:text-dark hover:bg-surface border border-border/80 transition-all shadow-subtle"
              title="Toggle Admin View"
            >
              {currentView === 'landing' ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>Admin View</span>
                </>
              ) : (
                <>
                  <LayoutDashboard className="w-3.5 h-3.5 text-accent" />
                  <span>Landing Page</span>
                </>
              )}
            </motion.button>

            {currentView === 'landing' && (
              <motion.a
                href="#waitlist"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 min-w-[140px] rounded-xl bg-primary text-white text-sm font-semibold shadow-md hover:bg-primary-hover hover:shadow-lg transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            )}
          </div>

         
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setCurrentView(currentView === 'landing' ? 'admin' : 'landing')}
              className="p-2 rounded-lg text-secondary border border-border"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-dark hover:bg-surface focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

    
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-border px-4 pt-2 pb-6 space-y-3"
          >
            {currentView === 'landing' &&
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-secondary hover:text-primary py-2"
                >
                  {link.name}
                </a>
              ))}
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold shadow-md shadow-primary/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
