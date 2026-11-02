import { getSession } from '@/lib/auth';
import { logoutAction } from '@/actions/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { 
  Truck, 
  LayoutDashboard, 
  MapPin, 
  Receipt,
  FileSpreadsheet, 
  LogOut, 
  ShieldCheck, 
  Eye, 
  ExternalLink,
  Activity
} from 'lucide-react';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const isAdmin = session.role === 'ADMIN';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900/90 border-r border-slate-800/80 flex flex-col shrink-0">
        {/* Brand */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <Link href="/vehicles" className="flex items-center gap-3 group">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base tracking-tight">FleetPulse</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[0.65rem] text-slate-400 block -mt-0.5 font-medium">Ops & Telemetry v2.0</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="p-4 flex-1 space-y-6 overflow-y-auto">
          <div className="space-y-1">
            <div className="px-3 pb-2 text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">
              Core Modules
            </div>

            <Link
              href="/vehicles"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-800/60 transition group"
            >
              <Truck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Vehicles & Fleet</span>
              <span className="ml-auto px-1.5 py-0.5 rounded text-[0.6rem] bg-emerald-500/20 text-emerald-300 font-mono">
                Day 2
              </span>
            </Link>

            <Link
              href="/expenses"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-800/60 transition group"
            >
              <Receipt className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Expenses & Service</span>
              <span className="ml-auto px-1.5 py-0.5 rounded text-[0.6rem] bg-emerald-500/20 text-emerald-300 font-mono">
                Day 3
              </span>
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition group"
            >
              <LayoutDashboard className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>KPI Dashboard</span>
              <span className="ml-auto text-[0.6rem] text-slate-500">Day 4</span>
            </Link>

            <Link
              href="/map"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition group"
            >
              <MapPin className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Live Radar Map</span>
              <span className="ml-auto text-[0.6rem] text-slate-500">Day 5</span>
            </Link>

            <Link
              href="/reports"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 transition group"
            >
              <FileSpreadsheet className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:scale-110 transition-transform" />
              <span>CSV & Reports</span>
              <span className="ml-auto text-[0.6rem] text-slate-500">Day 6</span>
            </Link>
          </div>

          {/* Engine Status Box */}
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/70 space-y-2">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[0.7rem] font-bold text-slate-300">In-Memory Engine</span>
            </div>
            <p className="text-[0.65rem] text-slate-500 leading-normal">
              Zero external databases. Realtime Next.js memory cache holds 30 vehicles, 15 drivers, 670+ expense logs.
            </p>
          </div>
        </div>

        {/* User Profile Card & Signout */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center font-bold text-xs text-white shrink-0">
                {session.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white truncate">{session.name}</div>
                <div className="text-[0.65rem] text-slate-400 truncate">{session.email}</div>
              </div>
            </div>

            <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-bold border shrink-0 ${
              isAdmin 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
            }`}>
              {session.role}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 gap-2">
            <Link
              href="/"
              target="_blank"
              className="text-[0.7rem] text-slate-400 hover:text-white flex items-center gap-1 transition"
            >
              <span>Landing</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="text-[0.7rem] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-slate-700/60 flex items-center gap-1.5 transition cursor-pointer"
              >
                <LogOut className="w-3 h-3" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top bar */}
        <header className="h-14 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Fleet Operations</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200 font-medium">Telemetry Console</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[0.7rem] text-slate-400">
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Write Permissions</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Viewer Mode (Read-Only)</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page children */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}