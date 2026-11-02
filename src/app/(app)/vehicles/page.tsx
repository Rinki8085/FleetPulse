import { getVehicles, getDrivers, getFleetStats } from '@/lib/data/fleetStore';
import { getSession } from '@/lib/auth';
import { VehicleStatus } from '@/types/fleet';
import CreateVehicleModal from '@/components/vehicles/CreateVehicleModal';
import EditVehicleModal from '@/components/vehicles/EditVehicleModal';
import DeleteVehicleButton from '@/components/vehicles/DeleteVehicleButton';
import Pagination from '@/components/vehicles/Pagination';
import { 
  Truck, 
  Search, 
  Filter, 
  Fuel, 
  Gauge, 
  UserCheck, 
  ShieldCheck, 
  Activity, 
  Wrench,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default async function VehiclesPage(props: {
  searchParams?: Promise<{ search?: string; status?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || '';
  const status = searchParams?.status || '';
  const page = Math.max(1, Number(searchParams?.page || 1));
  const limit = 8;

  const session = await getSession();
  const isAdmin = session?.role === 'ADMIN';

  const [{ vehicles, total, totalPages }, drivers, stats] = await Promise.all([
    getVehicles({
      search: search || undefined,
      status: status || undefined,
      page,
      limit
    }),
    getDrivers(),
    getFleetStats()
  ]);

  const driverMap = new Map(drivers.map((d) => [d.id, d.name]));

  const statusConfig: Record<VehicleStatus, { badge: string; dot: string; label: string }> = {
    ACTIVE: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-400',
      label: 'Active'
    },
    IN_SERVICE: {
      badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      dot: 'bg-sky-400',
      label: 'In Service'
    },
    DECOMMISSIONED: {
      badge: 'bg-slate-700/30 text-slate-400 border-slate-700/40',
      dot: 'bg-slate-500',
      label: 'Decommissioned'
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header & Overview */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Fleet Asset Management</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium border border-slate-700">
              {total} Total Assets
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Realtime telemetry, operational status, odometer logs, driver assignment, and pagination.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <CreateVehicleModal isAdmin={isAdmin} />
        </div>
      </div>

      {/* KPI Metric Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Total Fleet</span>
            <Truck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">{stats.totalVehicles}</div>
          <div className="text-[0.65rem] text-slate-500">Live indexed in-memory store</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Available in Yard</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400">{stats.activeVehicles}</div>
          <div className="text-[0.65rem] text-emerald-500/80">Ready for dispatch</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">On Route (In Service)</span>
            <Wrench className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-sky-400">{stats.inServiceVehicles}</div>
          <div className="text-[0.65rem] text-sky-500/80">Active deliveries & trips</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Average Odometer</span>
            <Gauge className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white">
            {stats.averageOdometer.toLocaleString()} <span className="text-xs font-normal text-slate-400">km</span>
          </div>
          <div className="text-[0.65rem] text-slate-500">Fleet average distance</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <form method="GET" action="/vehicles" className="flex-1 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Search by license plate or model..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              name="status"
              defaultValue={status}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-emerald-500 transition cursor-pointer"
            >
              <option value="">All Statuses</option>
              <option value="ACTIVE">ACTIVE (In Yard)</option>
              <option value="IN_SERVICE">IN_SERVICE (On Route)</option>
              <option value="DECOMMISSIONED">DECOMMISSIONED</option>
            </select>
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition cursor-pointer"
          >
            Filter
          </button>

          {(search || status || page > 1) && (
            <Link
              href="/vehicles"
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs flex items-center gap-1.5 transition border border-slate-800"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </Link>
          )}
        </form>

        <div className="text-[0.7rem] text-slate-400 flex items-center gap-2 self-end md:self-center">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Role: <strong className="text-white">{session?.role}</strong></span>
        </div>
      </div>

      {/* Vehicles Table Card */}
      <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/40 text-[0.7rem] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-3.5 px-4">Vehicle Identifier</th>
                <th className="py-3.5 px-4">Type & Year</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Fuel / Battery</th>
                <th className="py-3.5 px-4">Odometer</th>
                <th className="py-3.5 px-4">Assigned Driver</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {vehicles.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    <AlertTriangle className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-slate-300">No vehicles match your search criteria</p>
                    <p className="text-xs text-slate-500 mt-1">Try resetting filters or adding a new vehicle above</p>
                  </td>
                </tr>
              ) : (
                vehicles.map((v) => {
                  const driverName = v.driverId ? driverMap.get(v.driverId) : null;
                  const fuelColor = 
                    v.fuelLevel > 60 
                      ? 'bg-emerald-500' 
                      : v.fuelLevel > 25 
                      ? 'bg-amber-500' 
                      : 'bg-rose-500';

                  const currentStatusConfig = statusConfig[v.status] || {
                    badge: 'bg-slate-800 text-slate-400 border-slate-700',
                    dot: 'bg-slate-400',
                    label: v.status
                  };

                  return (
                    <tr 
                      key={v.id} 
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Vehicle identifier */}
                      <td className="py-3.5 px-4">
                        <Link 
                          href={'/vehicles/' + v.id}
                          className="font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                        >
                          <span>{v.model}</span>
                          <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                        </Link>
                        <div className="font-mono text-[0.65rem] text-slate-400 mt-0.5 inline-block px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                          {v.plateNumber}
                        </div>
                      </td>

                      {/* Type & Year */}
                      <td className="py-3.5 px-4 text-slate-300">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Truck className="w-3.5 h-3.5 text-slate-500" />
                          <span>{v.type}</span>
                        </div>
                        <span className="text-[0.65rem] text-slate-500">{v.year} Model</span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold border ${currentStatusConfig.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${currentStatusConfig.dot}`} />
                          {currentStatusConfig.label}
                        </span>
                      </td>

                      {/* Fuel / Battery */}
                      <td className="py-3.5 px-4">
                        <div className="w-28 space-y-1">
                          <div className="flex items-center justify-between text-[0.65rem] text-slate-400 font-mono">
                            <span className="flex items-center gap-1">
                              <Fuel className="w-3 h-3 text-slate-500" />
                              {v.fuelLevel}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${fuelColor} rounded-full transition-all`}
                              style={{ width: `${v.fuelLevel}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* Odometer */}
                      <td className="py-3.5 px-4 font-mono text-slate-200">
                        {v.odometer.toLocaleString()} <span className="text-[0.65rem] text-slate-500">km</span>
                      </td>

                      {/* Assigned Driver */}
                      <td className="py-3.5 px-4 text-slate-300">
                        {driverName ? (
                          <div className="flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="font-medium text-xs text-slate-200">{driverName}</span>
                          </div>
                        ) : (
                          <span className="text-slate-500 italic text-[0.7rem]">Unassigned</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            href={'/vehicles/' + v.id}
                            title="View Vehicle Sheet"
                            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <EditVehicleModal vehicle={v} drivers={drivers} isAdmin={isAdmin} />
                          <DeleteVehicleButton vehicleId={v.id} isAdmin={isAdmin} />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={total}
          limit={limit}
          search={search}
          status={status}
        />
      </div>
    </div>
  );
}
