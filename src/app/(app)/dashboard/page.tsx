import { getFleetStats } from '@/lib/data/fleetStore';
import { LayoutDashboard, TrendingUp, DollarSign, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// dynamic inferred

export default async function DashboardPage() {
  const stats = await getFleetStats();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Fleet Performance & Expense Analytics</h1>
        <p className="text-xs text-slate-400 mt-1">
          High-level operational metrics, scheduled maintenance, and operating cost summaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Total Monthly Operating Spend</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">
            ${stats.totalMonthlySpend.toLocaleString()}
          </div>
          <p className="text-[0.7rem] text-slate-500">Current calendar month telemetry aggregation</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Scheduled Services</span>
            <Wrench className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-amber-400">
            {stats.pendingMaintenanceCount}
          </div>
          <p className="text-[0.7rem] text-slate-500">Maintenance tasks pending in queue</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Fleet Utilization</span>
            <TrendingUp className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">
            {Math.round(((stats.activeVehicles + stats.inServiceVehicles) / (stats.totalVehicles || 1)) * 100)}%
          </div>
          <p className="text-[0.7rem] text-slate-500">
            {stats.activeVehicles + stats.inServiceVehicles} of {stats.totalVehicles} assets deployed
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-sm font-bold text-white">Detailed Charts & Expense Breakdown (Day 4 Scope)</h2>
          <p className="text-xs text-slate-400">
            Full Recharts visualization, category filtering, and monthly spending trends are scheduled for Day 4.
          </p>
        </div>
        <Link 
          href="/vehicles"
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition"
        >
          <span>Manage Vehicles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
