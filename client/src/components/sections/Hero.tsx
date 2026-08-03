import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Clock, Users, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-primary/15 via-purple-500/10 to-accent/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-primary/10 blur-[110px] rounded-full pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 blur-[100px] rounded-full pointer-events-none -z-10 animate-float" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-slate-200/80 text-xs font-semibold text-dark shadow-sm hover:border-primary/30 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-bold">TaskFlow AI 2.0</span>
              <span className="text-secondary">— Autonomous Project Engine</span>
            </div>

           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Manage Projects <br />
              <span className="text-gradient">Smarter with AI</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              Supercharge your engineering and product teams. TaskFlow AI auto-assigns tasks, predicts delivery deadlines, and eliminates project bottlenecks before they happen.
            </p>

           <div className="flex flex-wrap items-center gap-4 pt-1">
              <motion.a
                href="#waitlist"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="
                  inline-flex items-center justify-center gap-2
                  w-44 h-12
                  rounded-xl
                  bg-primary
                  text-sm font-semibold text-white
                  shadow-lg shadow-primary/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-primary-hover
                  hover:shadow-xl hover:shadow-primary/30
                  active:scale-95
                "
              >
                <span>Start Free</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="#showcase"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="
                  inline-flex items-center justify-center gap-2
                  w-44 h-12
                  rounded-xl
                  border border-slate-200
                  bg-white
                  text-sm font-semibold text-slate-900
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-lg
                  active:scale-95
                "
              >
                <Play className="h-3.5 w-3.5 fill-current text-slate-900" />
                <span>Live Demo</span>
              </motion.a>
            </div>

            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-secondary">No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-secondary">2-min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-medium text-secondary">SOC2 Certified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-purple-500/20 to-accent/30 blur-2xl rounded-3xl -z-10 animate-pulse-glow" />

           <div className="relative rounded-3xl bg-white p-4.5 shadow-2xl border border-slate-200/90 glass-card animate-float-slow">
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-secondary/70 bg-surface px-2.5 py-0.5 rounded border border-border/50">
                  taskflow.ai/dashboard
                </div>
                <div className="w-10" />
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between bg-surface/60 p-3 rounded-xl border border-border/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      TF
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-dark">Q3 Product Sprint</h4>
                      <p className="text-[10px] text-secondary">14 Active Tasks • 8 Team Members</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    On Track
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface/40 border border-border/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        AI Recommended
                      </span>
                      <span className="text-[10px] font-mono text-secondary">Today</span>
                    </div>
                    <p className="text-xs font-semibold text-dark">Refactor Auth Middleware</p>
                    <div className="flex items-center justify-between pt-1 text-[10px] text-secondary">
                      <span>Est: 2.5 hrs</span>
                      <div className="flex -space-x-1.5">
                        <div className="w-4 h-4 rounded-full bg-indigo-500 text-[9px] text-white flex items-center justify-center font-bold">SC</div>
                        <div className="w-4 h-4 rounded-full bg-purple-500 text-[9px] text-white flex items-center justify-center font-bold">AK</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface/40 border border-border/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">
                        Automated Test
                      </span>
                      <span className="text-[10px] font-mono text-secondary">In Progress</span>
                    </div>
                    <p className="text-xs font-semibold text-dark">Vite Bundler Optimization</p>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-full rounded-full w-3/4" />
                    </div>
                  </div>
                </div>

               
                <div className="p-3 rounded-xl bg-dark text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-200">Velocity Projection</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">+38% Efficiency</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5 h-12 items-end pt-2">
                    <div className="bg-slate-700 rounded-t h-4" />
                    <div className="bg-slate-700 rounded-t h-6" />
                    <div className="bg-slate-600 rounded-t h-8" />
                    <div className="bg-primary/80 rounded-t h-10" />
                    <div className="bg-primary rounded-t h-11" />
                    <div className="bg-gradient-to-t from-primary to-accent rounded-t h-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

        
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-white shadow-card-hover border border-border glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-secondary">AI Prediction</p>
                <p className="text-xs font-bold text-dark">4.2 Days Ahead of Schedule</p>
              </div>
            </motion.div>

             <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl bg-white shadow-card-hover border border-border glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-secondary">Weekly Time Saved</p>
                <p className="text-sm font-extrabold text-dark">18.5 hrs / dev</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
