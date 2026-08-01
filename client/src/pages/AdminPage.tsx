import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowUpDown,
  RefreshCw,
  Users,
  Building,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Download,
  Filter
} from 'lucide-react';
import { fetchWaitlist } from '../services/api';
import { WaitlistEntry } from '../types/waitlist';

export const AdminPage: React.FC = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<'createdAt' | 'name' | 'company'>('createdAt');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const loadEntries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWaitlist();
      if (res.success && res.data) {
        setEntries(res.data);
      } else {
        setError(res.error || 'Failed to load waitlist entries.');
      }
    } catch (err) {
      setError('Error loading data from API server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handleSort = (field: 'createdAt' | 'name' | 'company') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // Filtered & Sorted list calculation
  const filteredEntries = entries
    .filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      let valA: any = a[sortField];
      let valB: any = b[sortField];

      if (sortField === 'createdAt') {
        valA = new Date(valA).getTime();
        valB = new Date(valB).getTime();
      } else {
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const uniqueCompanies = new Set(entries.map((e) => e.company.toLowerCase())).size;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-border shadow-subtle">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Internal Admin Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight">
              Waitlist Submissions Overview
            </h1>
            <p className="text-xs text-secondary mt-1">
              Live overview of registered early-access accounts and company leads.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadEntries}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-border text-xs font-bold text-dark hover:bg-surface transition-all shadow-subtle disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Data</span>
            </button>

            <button
              onClick={() => {
                const jsonStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(entries, null, 2))}`;
                const downloadAnchor = document.createElement('a');
                downloadAnchor.setAttribute('href', jsonStr);
                downloadAnchor.setAttribute('download', `taskflow_waitlist_${Date.now()}.json`);
                document.body.appendChild(downloadAnchor);
                downloadAnchor.click();
                downloadAnchor.remove();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-hover shadow-md shadow-primary/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-secondary">Total Registrations</p>
              <h3 className="text-2xl font-black text-dark mt-1">{entries.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-secondary">Unique Companies</p>
              <h3 className="text-2xl font-black text-dark mt-1">{uniqueCompanies}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-border shadow-subtle flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-secondary">Latest Sign-up</p>
              <h3 className="text-xs font-bold text-dark mt-1">
                {entries.length > 0
                  ? new Date(entries[0].createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : 'N/A'}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Table Filter Control Bar */}
        <div className="p-4 rounded-2xl bg-white border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-secondary" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or company..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface border border-border text-xs text-dark placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-xs text-secondary font-medium self-end sm:self-center">
            Showing <span className="font-bold text-dark">{filteredEntries.length}</span> of {entries.length} entries
          </div>
        </div>

        {/* Main Table Container */}
        <div className="rounded-2xl bg-white border border-border shadow-card overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-secondary text-xs flex flex-col items-center gap-3">
              <RefreshCw className="w-6 h-6 animate-spin text-primary" />
              <span>Fetching latest waitlist submissions...</span>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-rose-600 text-xs flex flex-col items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              <span>{error}</span>
            </div>
          ) : filteredEntries.length === 0 ? (
            <div className="p-12 text-center text-secondary text-xs space-y-2">
              <Filter className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="font-bold text-dark">No matching entries found.</p>
              <p className="text-slate-400">Try adjusting your search criteria or add entries from the landing page.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface/80 border-b border-border text-[11px] font-extrabold text-secondary uppercase tracking-wider">
                    <th className="py-3.5 px-6">User / Lead</th>
                    <th
                      className="py-3.5 px-6 cursor-pointer hover:text-dark transition-colors"
                      onClick={() => handleSort('company')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Company</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3.5 px-6">Status</th>
                    <th
                      className="py-3.5 px-6 cursor-pointer hover:text-dark transition-colors"
                      onClick={() => handleSort('createdAt')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Submitted At</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs">
                  {filteredEntries.map((entry) => (
                    <tr key={entry.id || entry.email} className="hover:bg-surface/50 transition-colors">
                      {/* Name & Email */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">
                            {entry.name[0]?.toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-dark">{entry.name}</p>
                            <p className="text-[11px] text-secondary font-mono">{entry.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Company */}
                      <td className="py-4 px-6 font-semibold text-slate-800">
                        {entry.company}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          Verified
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-secondary font-mono text-[11px]">
                        {new Date(entry.createdAt).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
