import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'NovaTech',
      avatarBg: 'bg-indigo-600',
      initials: 'SC',
      rating: 5,
      content:
        'TaskFlow AI eliminated 80% of our manual sprint planning overhead. Our engineers now spend their time coding instead of filling out progress tickets.',
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Product',
      company: 'CloudWorks',
      avatarBg: 'bg-purple-600',
      initials: 'MV',
      rating: 5,
      content:
        'The deadline prediction engine is astonishingly accurate. We delivered our last three quarterly major releases exactly on the predicted day.',
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Architect',
      company: 'PixelForge',
      avatarBg: 'bg-emerald-600',
      initials: 'ER',
      rating: 5,
      content:
        'Seamless integration with GitHub and Slack. The AI automated task breakdown alone saved our team over 150 hours during launch month.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[700px] mx-auto space-y-4 mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold tracking-wide uppercase">
            <span>Customer Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Loved by Engineering Leaders
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            See how innovative teams build products faster with TaskFlow AI.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed italic relative font-normal">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-200/60">
                <div className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-extrabold text-xs flex items-center justify-center shadow-md`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-500">
                    {rev.role} • <span className="font-semibold text-primary">{rev.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
