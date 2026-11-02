import Link from 'next/link';
import { getVehicles, getFleetStats } from '@/lib/data/fleetStore';
import { 
  Truck, 
  Activity, 
  Wrench, 
  DollarSign, 
  CheckCircle2, 
  Server, 
  Database, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Receipt,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default async function HomePage() {
  const stats = await getFleetStats();
  const { vehicles, total } = await getVehicles({ limit: 6, page: 1 });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-lg">
              <Truck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                FleetPulse
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Day 3 Active
                </span>
              </span>
              <p className="text-xs text-slate-400">Native Next.js Full-Stack Fleet Engine</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              <span>Launch App Console</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Native Next.js 16 (No Supabase, Firebase, or Prisma required)</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Fleet Management & Telemetry Core
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Complete fleet operations hub built with Next.js App Router, Server Actions, cookie authentication, route protection middleware, and internal in-memory persistence.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link 
                href="/vehicles" 
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition"
              >
                <Truck className="w-4 h-4" />
                <span>Go to Vehicles Fleet</span>
              </Link>
              <Link 
                href="/expenses" 
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-2 border border-slate-700/80 transition"
              >
                <Receipt className="w-4 h-4 text-emerald-400" />
                <span>Operating Expenses & Service</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Total Fleet</span>
                <Truck className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-white">{stats.totalVehicles}</div>
              <p className="text-[0.65rem] text-slate-500">{stats.activeVehicles} active ? {stats.inServiceVehicles} in service</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Fleet Health</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">
                {Math.round(((stats.activeVehicles + stats.inServiceVehicles) / (stats.totalVehicles || 1)) * 100)}%
              </div>
              <p className="text-[0.65rem] text-slate-500">Operational readiness</p>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Native Cookie Authentication</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              HTTP-only signed cookie session with role-based access control (Admin full CRUD vs Viewer read-only).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Vehicles CRUD & Pagination</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Realtime telemetry table with 8 assets/page, URL-synced search, status pills, and detailed asset sheets.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 w-fit">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Expense & Service Workflows</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fuel, maintenance, and toll expense logging, plus preventative maintenance tasks with live status toggling.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}