import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Box, Cpu, Compass } from 'lucide-react';

export const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'NovaTech', icon: Shield, subtitle: 'SOLUTIONS' },
    { name: 'CloudWorks', icon: Layers, subtitle: 'INFRASTRUCTURE' },
    { name: 'PixelForge', icon: Box, subtitle: 'STUDIOS' },
    { name: 'BrightScale', icon: Cpu, subtitle: 'AI SYSTEMS' },
    { name: 'FutureLabs', icon: Compass, subtitle: 'RESEARCH' },
  ];

  return (
    <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-bold uppercase tracking-widest text-secondary/80 mb-7"
        >
          Trusted by high-velocity engineering teams worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {companies.map((c, index) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2.5 group cursor-pointer transition-all duration-200"
              >
                <div className="p-2 rounded-xl bg-white border border-border/80 text-secondary group-hover:text-primary group-hover:border-primary/30 shadow-subtle transition-all duration-200">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-sm tracking-tight text-slate-800 group-hover:text-dark transition-colors">
                    {c.name}
                  </span>
                  <span className="text-[9px] font-mono font-medium text-secondary/70 tracking-wider">
                    {c.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
