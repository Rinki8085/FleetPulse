import Link from 'next/link';
import { getVehicles, getFleetStats } from '@/lib/data/fleetStore';
import { createVehicleAction, deleteVehicleAction } from '@/actions/vehicles';
import { Truck, Activity, Wrench, DollarSign, CheckCircle2, Server, Database, Layers, Trash2, Plus } from 'lucide-react';

export default async function HomePage() {
  const stats = await getFleetStats();
  const { vehicles, total } = await getVehicles({ limit: 6, page: 1 });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
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
                  Day 1 Complete
                </span>
              </span>
              <p className="text-xs text-slate-400">Native Next.js Full-Stack Fleet Engine</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/api/vehicles" target="_blank" className="px-3 py-1.5 rounded-mg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 text-xs">
              <Server className="w-3.5 h-3.5 text-emerald-400" /> GET /api/vehicles
            </Link>
            <Link href="/api/stats" target="_blank" className="px-3 py-1.5 rounded-mg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 text-xs">
              <Database className="w-3.5 h-3.5 text-teal-400" /> GET /api/stats
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        <section className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/20 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100%/Native Next.js Architecture (Zero Third Parties)
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Fleet Management & Telemetry Core</h1>
          <p className="text-sm text-slate-300">Built with React Server Components, Next.js Server Actions, Route Handlers, and internal persistence.</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase"><span>Total Fleet Size</span><Truck className="w-4 h-4 text-emerald-400" /></div>
            <div className="text-3xl font-black text-white">{stats.totalVehicles}</div>
            <div className="text-xs text-slate-400"><span className="text-emerald-400 font-semibold">{stats.activeVehicles} active</span> • <span className="text-amber-400">{stats.inServiceVehicles} in service</span></div>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase"><span>Fleet Health</span><Activity className="w-4 h-4 text-teal-400" /></div>
            <div className="text-3xl font-black text-white">{Math.round((stats.activeVehicles / stats.totalVehicles) * 100)}%</div>
            <p className="text-xs text-slate-400">Operational readiness score</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase"><span>Monthly Spend</span><DollarSign className="w-4 h-4 text-sky-400" /></div>
            <div className="text-3xl font-black text-white">${stats.totalMonthlySpend.toLocaleString()}</div>
            <p className="text-xs text-slate-400">Fuel, maintenance, tolls</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs uppercase"><span>Alerts</span><Wrench className="w-4 h-4 text-rose-400" /></div>
            <div className="text-3xl font-black text-white">{stats.pendingMaintenanceCount}</div>
            <p className="text-xs text-slate-400">Scheduled inspections</p>
          </div>
        </section>

        <section className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2"><Plus className="w-5 h-5 text-emerald-400" />Test Server Action: Create Vehicle</h2>
            <p className="text-xs text-slate-400">Submits directly to a Next.js Server Action and revalidates cache instantly.</p>
          </div>
          <form action={createVehicleAction} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            <input name="plateNumber" placeholder="Plate Number" required className="px-3 py-2 rounded-mg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500" />
            <input name="model" placeholder="Vehicle Model" required className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500" />
            <select name="type" className="px-3 py-2 rounded-mg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-500">
              <option value="Van">Van</option><option value="Truck">Truck</option><option value="Semi">Semi</option><option value="Pickup">Pickup</option>
            </select>
            <input name="odometer" type="number" placeholder="Odometer in km" defaultValue="25000" className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500" />
            <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer">
              <Plus className="w-4 h-4" /> Add Vehicle
            </button>
          </form>
        </section>

        <section className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lw font-bold text-white flex items-center gap-2"><Layers className="w-5 h-5 text-emerald-400" />Vehicles Directory ({total} Total)</h2>
              <p className="text-xs text-slate-400">Server-rendered directly from Next.js internal data store</p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Showing first 6 vehicles</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                <tr><th className="py-3 px-4">Plate Number</th><th className="py-3 px-4">Model</th><th className="py-3 px-4">Type</th><th className="py-3 px-4">Status</th><th className="py-3 px-4">Odometer</th><th className="py-3 px-4">Driver</th><th className="py-3 px-4 text-right">Actions</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {vehicles.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-white">{v.plateNumber}</td>
                    <td className="py-3 px-4 text-slate-200">{v.model}</td>
                    <td className="py-3 px-4 text-slate-400">{v.type}</td>
                    <td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{v.status}</span></td>
                    <td className="py-3 px-4 font-mono text-slate-300">{v.odometer.toLocaleString()} km</td>
                    <td className="py-3 px-4 text-slate-300">{v.driver?.name || 'Unassigned'}</td>
                    <td className="py-3 px-4 text-right">
                      <form action={deleteVehicleAction.bind(null, v.id)} className="inline-block">
                        <button type="submit" title="Delete vehicle" className="p-1.5 rounded-md hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        FleetPulse • Next.js Full-Stack Fleet Management • Day 1 Complete
      </footer>
    </div>
  );
}