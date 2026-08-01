import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Users, BarChart3, ArrowUpRight } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      id: 'ai-planning',
      title: 'AI Task Planning',
      description: 'Automatically breakdown epics into actionable subtasks, estimate effort, and assign to team members based on bandwidth.',
      icon: Sparkles,
      gradient: 'from-primary/10 to-indigo-500/10',
      badge: 'Autonomous',
      color: 'text-primary',
    },
    {
      id: 'smart-deadlines',
      title: 'Smart Deadline Prediction',
      description: 'Machine-learning models analyze commit velocity and historical pull requests to forecast true delivery dates with 96% accuracy.',
      icon: Clock,
      gradient: 'from-accent/10 to-purple-500/10',
      badge: 'Predictive',
      color: 'text-accent',
    },
    {
      id: 'team-collab',
      title: 'Team Collaboration',
      description: 'Real-time multi-user cursor editing, instant contextual discussions, and automatic standup summaries sent right to Slack.',
      icon: Users,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      badge: 'Real-time',
      color: 'text-blue-600',
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Deep engineering metrics, cycle-time tracking, bottleneck heatmaps, and AI-driven sprint health scores at a glance.',
      icon: BarChart3,
      gradient: 'from-emerald-500/10 to-teal-500/10',
      badge: 'Insights',
      color: 'text-emerald-600',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-white relative">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen Platform</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Engineered for Modern Tech Teams
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Replace fragmented tools with an intelligent, unified workspace that plans, tracks, and optimizes project execution automatically.
          </p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Gradient Blob */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${feature.gradient} blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none -z-10`} />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-surface border border-slate-200/80 flex items-center justify-center ${feature.color} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-secondary bg-surface px-3 py-1.5 rounded-full border border-slate-200/60">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-bold text-primary opacity-90 group-hover:opacity-100">
                  <span>Explore Feature</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
