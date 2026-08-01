import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Kanban,
  BarChart2,
  Calendar as CalendarIcon,
  Activity,
  Plus,
  CheckCircle,
  Clock,
  Sparkles,
  Search,
  Filter,
  MoreHorizontal,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Zap,
  Users
} from 'lucide-react';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kanban' | 'analytics' | 'calendar' | 'activity'>('kanban');

  // Kanban Tasks State
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Implement OAuth 2.0 Provider', column: 'todo', tag: 'Backend', priority: 'High', assignee: 'Alex', avatarBg: 'bg-indigo-600', aiStatus: 'Estimated 3.5h' },
    { id: '2', title: 'Design Glassmorphic Modal Component', column: 'in_progress', tag: 'UI/UX', priority: 'Medium', assignee: 'Sarah', avatarBg: 'bg-purple-600', aiStatus: '92% Quality Match' },
    { id: '3', title: 'Optimize PostgreSQL Indexing', column: 'in_progress', tag: 'Database', priority: 'Urgent', assignee: 'Marcus', avatarBg: 'bg-emerald-600', aiStatus: 'Query Speed +40%' },
    { id: '4', title: 'Configure CI/CD Deployment Pipeline', column: 'completed', tag: 'DevOps', priority: 'High', assignee: 'Elena', avatarBg: 'bg-blue-600', aiStatus: 'Verified Clean' },
    { id: '5', title: 'Write OpenAPI Spec Docs', column: 'todo', tag: 'Docs', priority: 'Low', assignee: 'David', avatarBg: 'bg-amber-600', aiStatus: 'Auto-Generated' },
  ]);

  const moveTask = (taskId: string, targetCol: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: targetCol } : t))
    );
  };

  return (
    <section id="showcase" className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[700px] mx-auto space-y-4 mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-extrabold tracking-wide uppercase">
            <Kanban className="w-3.5 h-3.5" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            The Command Center for Product Teams
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Experience how TaskFlow AI organizes tasks, forecasts bottlenecks, and monitors live metrics in real-time.
          </p>
        </motion.div>

        {/* Dashboard Frame Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-white border border-slate-200/80 shadow-xl overflow-hidden"
        >
          
          {/* Top Bar of Dashboard */}
          <div className="bg-slate-900 text-white p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-sm">
                  TF
                </div>
                <span className="font-bold text-sm text-slate-100 hidden sm:inline">Workspace / Main Project</span>
              </div>
              
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />

              {/* View Selector Tabs */}
              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg text-xs">
                <button
                  onClick={() => setActiveTab('kanban')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                    activeTab === 'kanban' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Kanban className="w-3.5 h-3.5" />
                  <span>Kanban</span>
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                    activeTab === 'analytics' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Analytics</span>
                </button>
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                    activeTab === 'calendar' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>Calendar</span>
                </button>
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all ${
                    activeTab === 'activity' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Activity</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <div className="relative hidden md:block">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter tasks or AI prompts..."
                  className="bg-slate-800 text-xs text-white placeholder-slate-400 pl-8 pr-3 py-1.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-52"
                  readOnly
                />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-xs font-semibold hover:bg-primary-hover transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Task</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Header Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:px-6 bg-surface border-b border-border">
            <div className="p-3 bg-white rounded-xl border border-border/80 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-secondary">Sprint Progress</p>
                <p className="text-base font-extrabold text-dark">78% Completed</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                78%
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-border/80 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-secondary">Velocity Score</p>
                <p className="text-base font-extrabold text-dark">142 pts/sprint</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-border/80 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-secondary">AI Automation</p>
                <p className="text-base font-extrabold text-dark">64 Tasks Auto-Resolved</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-border/80 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium text-secondary">Est. Delivery</p>
                <p className="text-base font-extrabold text-emerald-600">Aug 12 (On Time)</p>
              </div>
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Main Display Body based on Active Tab */}
          <div className="p-6 min-h-[420px]">
            <AnimatePresence mode="wait">
              {activeTab === 'kanban' && (
                <motion.div
                  key="kanban"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* Column 1: To Do */}
                  <div className="bg-surface p-4 rounded-xl border border-border/80 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                        <h4 className="text-xs font-extrabold text-dark uppercase tracking-wider">To Do</h4>
                        <span className="text-[11px] text-secondary font-bold bg-white px-2 py-0.5 rounded border border-border">
                          {tasks.filter((t) => t.column === 'todo').length}
                        </span>
                      </div>
                      <Plus className="w-4 h-4 text-secondary cursor-pointer hover:text-dark" />
                    </div>

                    <div className="space-y-3">
                      {tasks
                        .filter((t) => t.column === 'todo')
                        .map((task) => (
                          <div
                            key={task.id}
                            className="bg-white p-3.5 rounded-xl border border-border/80 shadow-subtle hover:shadow-md transition-all space-y-2.5 group cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                {task.tag}
                              </span>
                              <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                                {task.priority}
                              </span>
                            </div>
                            <h5 className="text-xs font-bold text-dark group-hover:text-primary transition-colors">
                              {task.title}
                            </h5>
                            <div className="flex items-center justify-between text-[11px] text-secondary pt-1 border-t border-slate-100">
                              <span className="inline-flex items-center gap-1 text-[10px] text-primary font-medium">
                                <Sparkles className="w-3 h-3" />
                                {task.aiStatus}
                              </span>
                              <button
                                onClick={() => moveTask(task.id, 'in_progress')}
                                className="text-[10px] font-bold text-primary hover:underline"
                              >
                                Move to Progress &rarr;
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div className="bg-surface p-4 rounded-xl border border-border/80 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        <h4 className="text-xs font-extrabold text-dark uppercase tracking-wider">In Progress</h4>
                        <span className="text-[11px] text-secondary font-bold bg-white px-2 py-0.5 rounded border border-border">
                          {tasks.filter((t) => t.column === 'in_progress').length}
                        </span>
                      </div>
                      <Plus className="w-4 h-4 text-secondary cursor-pointer hover:text-dark" />
                    </div>

                    <div className="space-y-3">
                      {tasks
                        .filter((t) => t.column === 'in_progress')
                        .map((task) => (
                          <div
                            key={task.id}
                            className="bg-white p-3.5 rounded-xl border border-primary/30 shadow-subtle hover:shadow-md transition-all space-y-2.5 group cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                {task.tag}
                              </span>
                              <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                                {task.priority}
                              </span>
                            </div>
                            <h5 className="text-xs font-bold text-dark group-hover:text-primary transition-colors">
                              {task.title}
                            </h5>
                            <div className="flex items-center justify-between text-[11px] text-secondary pt-1 border-t border-slate-100">
                              <div className="flex items-center gap-1.5">
                                <div className={`w-4 h-4 rounded-full ${task.avatarBg} text-white text-[9px] font-bold flex items-center justify-center`}>
                                  {task.assignee[0]}
                                </div>
                                <span className="text-[10px]">{task.assignee}</span>
                              </div>
                              <button
                                onClick={() => moveTask(task.id, 'completed')}
                                className="text-[10px] font-bold text-emerald-600 hover:underline"
                              >
                                Mark Complete &rarr;
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Column 3: Completed */}
                  <div className="bg-surface p-4 rounded-xl border border-border/80 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <h4 className="text-xs font-extrabold text-dark uppercase tracking-wider">Completed</h4>
                        <span className="text-[11px] text-secondary font-bold bg-white px-2 py-0.5 rounded border border-border">
                          {tasks.filter((t) => t.column === 'completed').length}
                        </span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    </div>

                    <div className="space-y-3">
                      {tasks
                        .filter((t) => t.column === 'completed')
                        .map((task) => (
                          <div
                            key={task.id}
                            className="bg-white/80 p-3.5 rounded-xl border border-border/80 opacity-90 space-y-2.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                {task.tag}
                              </span>
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            </div>
                            <h5 className="text-xs font-bold text-slate-700 line-through">
                              {task.title}
                            </h5>
                            <div className="flex items-center justify-between text-[10px] text-secondary pt-1 border-t border-slate-100">
                              <span>Verified by AI CI/CD</span>
                              <span className="font-mono text-emerald-600">Done</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Burnup Chart Mock */}
                    <div className="p-5 rounded-xl bg-white border border-border/80 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-dark">Sprint Burnup & Work Scope</h4>
                          <p className="text-xs text-secondary">Ideal line vs. Actual team throughput</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded">
                          +14% ahead
                        </span>
                      </div>
                      <div className="h-44 bg-surface rounded-lg p-4 flex items-end justify-between gap-2 border border-border/50">
                        {[40, 55, 62, 78, 85, 96, 110, 128, 142].map((val, idx) => (
                          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                            <div
                              className="w-full bg-gradient-to-t from-primary to-accent rounded-t hover:brightness-110 transition-all"
                              style={{ height: `${val * 0.9}px` }}
                            />
                            <span className="text-[9px] font-mono text-secondary">Day {idx + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cycle Time Distribution */}
                    <div className="p-5 rounded-xl bg-white border border-border/80 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-dark">Average Task Cycle Time</h4>
                          <p className="text-xs text-secondary">From backlog creation to production deploy</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                          1.4 Days Avg
                        </span>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div>
                          <div className="flex justify-between text-xs font-medium mb-1">
                            <span className="text-dark">Code Review Phase</span>
                            <span className="text-secondary font-mono">0.3 Days</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-primary h-full rounded-full" style={{ width: '35%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-medium mb-1">
                            <span className="text-dark">QA & Automated Tests</span>
                            <span className="text-secondary font-mono">0.4 Days</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-accent h-full rounded-full" style={{ width: '45%' }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-medium mb-1">
                            <span className="text-dark">Deployment & Verification</span>
                            <span className="text-secondary font-mono">0.2 Days</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '20%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'calendar' && (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <h4 className="text-sm font-bold text-dark">August 2026 Release Schedule</h4>
                    <span className="text-xs text-secondary font-mono">Timezone: UTC-5</span>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-secondary">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                      <div key={d} className="py-1 bg-surface rounded">
                        {d}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className={`p-3 min-h-[70px] rounded-xl border text-xs flex flex-col justify-between ${
                          i === 4
                            ? 'bg-primary/10 border-primary text-primary font-bold shadow-subtle'
                            : i === 9
                            ? 'bg-accent/10 border-accent text-accent font-bold shadow-subtle'
                            : 'bg-white border-border/80 text-secondary'
                        }`}
                      >
                        <span className="font-mono text-[11px]">{i + 1}</span>
                        {i === 4 && <span className="text-[10px] font-sans">Sprint Release v2.4</span>}
                        {i === 9 && <span className="text-[10px] font-sans">Security Audit</span>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'activity' && (
                <motion.div
                  key="activity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3 max-w-2xl mx-auto"
                >
                  {[
                    { user: 'TaskFlow AI Engine', action: 'Auto-assigned subtasks for OAuth provider to Alex', time: '5 mins ago', bg: 'bg-primary text-white' },
                    { user: 'Sarah Chen', action: 'Moved Glassmorphic Modal to In Progress', time: '22 mins ago', bg: 'bg-purple-600 text-white' },
                    { user: 'Marcus Vance', action: 'Merged PR #142 (PostgreSQL Query Optimization)', time: '1 hour ago', bg: 'bg-emerald-600 text-white' },
                    { user: 'System Bot', action: 'Triggered automated regression testing suite', time: '3 hours ago', bg: 'bg-slate-700 text-white' },
                  ].map((act, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border/80">
                      <div className={`w-8 h-8 rounded-full ${act.bg} text-xs font-bold flex items-center justify-center shrink-0`}>
                        {act.user[0]}
                      </div>
                      <div className="flex-1 text-xs">
                        <span className="font-bold text-dark">{act.user}</span>{' '}
                        <span className="text-secondary">{act.action}</span>
                      </div>
                      <span className="text-[10px] font-mono text-secondary shrink-0">{act.time}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
