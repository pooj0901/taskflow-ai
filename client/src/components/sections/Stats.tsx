import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Building2 } from 'lucide-react';

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  sublabel: string;
  icon: React.ElementType;
}

const StatCounter: React.FC<StatItemProps> = ({ label, value, suffix, sublabel, icon: Icon }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000; // ms
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 shadow-sm">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-1 font-sans">
        {value % 1 === 0 ? Math.round(count) : count.toFixed(1)}{suffix}
      </div>
      <div className="text-sm sm:text-base font-extrabold text-slate-900">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sublabel}</div>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-14 md:py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            label="Projects Managed"
            value={250}
            suffix="K+"
            sublabel="Active tasks across teams"
            icon={Layers}
          />
          <StatCounter
            label="Platform Uptime"
            value={99.9}
            suffix="%"
            sublabel="Enterprise-grade SLA"
            icon={ShieldCheck}
          />
          <StatCounter
            label="Faster Delivery"
            value={40}
            suffix="%"
            sublabel="Reduction in sprint cycles"
            icon={Zap}
          />
          <StatCounter
            label="Enterprise Teams"
            value={100}
            suffix="+"
            sublabel="Global tech organizations"
            icon={Building2}
          />
        </div>
      </div>
    </section>
  );
};
