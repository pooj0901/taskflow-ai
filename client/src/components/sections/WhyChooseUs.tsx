import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Cpu, Zap, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const columns = [
    {
      title: 'Save Time',
      subtitle: 'Reclaim 18+ engineering hours per developer every week.',
      icon: Clock,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      points: [
        'Automated task breakdown from high-level specs',
        'Zero manual status updates required',
        'Instant standup and sprint summaries',
      ],
    },
    {
      title: 'Automate Workflows',
      subtitle: 'Continuous AI sync across GitHub, Jira, Figma & Slack.',
      icon: Cpu,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      points: [
        'Bi-directional code repository integration',
        'Predictive pull-request impact analysis',
        'Smart bottleneck detection & notification',
      ],
    },
    {
      title: 'Increase Team Productivity',
      subtitle: 'Focus strictly on writing impactful code and shipping faster.',
      icon: Zap,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      points: [
        'Context-aware developer task routing',
        'Real-time velocity & effort benchmarking',
        'Eliminate unnecessary status check meetings',
      ],
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[700px] mx-auto space-y-4 mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-slate-200/80 text-xs font-extrabold text-secondary uppercase tracking-wider">
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Why Teams Choose TaskFlow AI
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Built from the ground up to replace outdated spreadsheets and manual project management software.
          </p>
        </motion.div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {columns.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${col.bgColor} ${col.color} flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {col.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {col.subtitle}
                  </p>

                  <ul className="space-y-3.5 border-t border-slate-200/60 pt-6">
                    {col.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
