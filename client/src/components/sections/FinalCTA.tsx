import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, CheckCircle, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { submitWaitlist } from '../../services/api';
import { WaitlistFormData } from '../../types/waitlist';

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    company: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Front-end validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Please enter your company name.');
      return;
    }

    setLoading(true);

    try {
      const result = await submitWaitlist(formData);
      if (result.success) {
        setSuccessMessage(result.message || 'You have successfully joined the waitlist!');
        setFormData({ name: '', email: '', company: '' });
      } else {
        setErrorMessage(result.error || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <section id="waitlist" className="py-16 md:py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-primary/20 to-accent/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 md:p-16 rounded-3xl bg-white/95 backdrop-blur-md border border-indigo-200/80 shadow-2xl hover:shadow-glow transition-all duration-300 text-center relative overflow-hidden"
        >
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Early Access Pass</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Ready to Transform Your Workflow?
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-[700px] mx-auto mb-10 leading-relaxed font-normal">
            Join 1,200+ forward-thinking engineering teams on the TaskFlow AI waitlist. Get early access & priority onboarding.
          </p>

          {/* Dynamic Form or Success Card */}
          <AnimatePresence mode="wait">
            {successMessage ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-md mx-auto p-7 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">You're on the list!</h3>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    {successMessage} We'll notify you as soon as your access slot opens up.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Team</span>
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto space-y-5 text-left"
              >
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-extrabold text-slate-900 mb-2 uppercase tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    disabled={loading}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-900 mb-2 uppercase tracking-wider">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    disabled={loading}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-900 mb-2 uppercase tracking-wider">
                    Company Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Tech Solutions"
                    disabled={loading}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary focus:bg-white transition-all shadow-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-3"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Registering your team...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Priority Waitlist</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
                <p className="text-center text-xs text-slate-500 pt-1">
                  🔒 No credit card required. Zero spam policy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
};
