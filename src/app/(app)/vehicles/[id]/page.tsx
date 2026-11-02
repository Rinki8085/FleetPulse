import { 
  getVehicleById, 
  getDrivers, 
  getExpenses, 
  getMaintenanceTasks, 
  getVehicleTrips 
} from '@/lib/data/fleetStore';
import { getSession } from '@/lib/auth';
import { VehicleStatus, ExpenseType, MaintenanceStatus } from '@/types/fleet';
import CreateExpenseModal from '@/components/expenses/CreateExpenseModal';
import CreateMaintenanceModal from '@/components/expenses/CreateMaintenanceModal';
import EditVehicleModal from '@/components/vehicles/EditVehicleModal';
import DeleteVehicleButton from '@/components/vehicles/DeleteVehicleButton';
import MaintenanceStatusToggle from '@/components/expenses/MaintenanceStatusToggle';
import DeleteItemButton from '@/components/expenses/DeleteItemButton';
import Link from 'next/link';
import { 
  Truck, 
  ArrowLeft, 
  Fuel, 
  Gauge, 
  DollarSign, 
  Wrench, 
  UserCheck, 
  MapPin, 
  Calendar, 
  Clock, 
  FileText,
  AlertCircle,
  Navigation
} from 'lucide-react';

export default async function VehicleDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const vehicle = await getVehicleById(id);

  if (!vehicle) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center space-y-4">
        <div className="p-4 rounded-full bg-slate-900 border border-slate-800 w-16 h-16 mx-auto flex items-center justify-center text-rose-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-white">Vehicle Record Not Found</h2>
        <p className="text-xs text-slate-400">
          The requested vehicle identifier ({id}) does not exist or has been decommissioned.
        </p>
        <Link
          href="/vehicles"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Fleet Overview
        </Link>
      </div>
    );
  }

  const session = await getSession();
  const isAdmin = session?.role === 'ADMIN';

  const [drivers, expenses, maintenanceTasks, trips] = await Promise.all([
    getDrivers(),
    getExpenses({ vehicleId: vehicle.id }),
    getMaintenanceTasks(vehicle.id),
    getVehicleTrips(vehicle.id),
  ]);

  const driver = drivers.find((d) => d.id === vehicle.driverId);
  const totalSpend = expenses.reduce((sum, e) => sum + e.amount, 0);

  const statusConfig: Record<VehicleStatus, { badge: string; dot: string; label: string }> = {
    ACTIVE: {
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-400',
      label: 'Active (In Yard)',
    },
    IN_SERVICE: {
      badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      dot: 'bg-sky-400',
      label: 'In Service (On Route)',
    },
    DECOMMISSIONED: {
      badge: 'bg-slate-700/30 text-slate-400 border-slate-700/40',
      dot: 'bg-slate-500',
      label: 'Decommissioned',
    },
  };

  const currentStatus = statusConfig[vehicle.status] || {
    badge: 'bg-slate-800 text-slate-400 border-slate-700',
    dot: 'bg-slate-400',
    label: vehicle.status,
  };

  const fuelColor =
    vehicle.fuelLevel > 60
      ? 'bg-emerald-500'
      : vehicle.fuelLevel > 25
      ? 'bg-amber-500'
      : 'bg-rose-500';

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Fleet List</span>
          </Link>
          <div className="flex items-center gap-3 pt-1">
            <h1 className="text-2xl font-bold tracking-tight text-white">{vehicle.model}</h1>
            <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
              {vehicle.plateNumber}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold border ${currentStatus.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${currentStatus.dot}`} />
              {currentStatus.label}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <CreateExpenseModal
            vehicles={[vehicle]}
            defaultVehicleId={vehicle.id}
            isAdmin={isAdmin}
          />
          <CreateMaintenanceModal
            vehicles={[vehicle]}
            defaultVehicleId={vehicle.id}
            isAdmin={isAdmin}
          />
          <EditVehicleModal vehicle={vehicle} drivers={drivers} isAdmin={isAdmin} />
          <DeleteVehicleButton vehicleId={vehicle.id} isAdmin={isAdmin} />
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Fuel / Charge Level</span>
            <Fuel className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{vehicle.fuelLevel}%</div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full ${fuelColor} rounded-full transition-all`}
              style={{ width: `${vehicle.fuelLevel}%` }}
            />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Current Odometer</span>
            <Gauge className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {vehicle.odometer.toLocaleString()}{' '}
            <span className="text-xs font-normal text-slate-400">km</span>
          </div>
          <p className="text-[0.65rem] text-slate-500">Last serviced: {vehicle.lastServiceDate}</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Logged Operating Cost</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">
            ${totalSpend.toLocaleString()}
          </div>
          <p className="text-[0.65rem] text-slate-500">Across {expenses.length} expense entries</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Maintenance Tasks</span>
            <Wrench className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">
            {maintenanceTasks.filter((m) => m.status !== 'COMPLETED').length}
          </div>
          <p className="text-[0.65rem] text-slate-500">Active tasks in workshop queue</p>
        </div>
      </div>

      {/* Main Grid: Telemetry & Driver Left, Expenses & Tasks Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Driver Info & GPS Telemetry */}
        <div className="space-y-6">
          {/* Driver Card */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                Assigned Driver
              </span>
              <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                Primary Operator
              </span>
            </div>

            {driver ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-emerald-400">
                    {driver.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{driver.name}</h4>
                    <p className="text-xs text-slate-400">{driver.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60 text-xs">
                  <div>
                    <span className="text-[0.65rem] text-slate-500 block">License #</span>
                    <span className="font-mono text-slate-300 font-medium">{driver.licenseNumber}</span>
                  </div>
                  <div>
                    <span className="text-[0.65rem] text-slate-500 block">License Expiry</span>
                    <span className="font-mono text-slate-300 font-medium">{driver.licenseExpiry}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-slate-500 text-xs italic">
                No driver currently assigned to this vehicle asset.
              </div>
            )}
          </div>

          {/* GPS Coordinates & Telemetry */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Last Known Telemetry Ping
              </span>
              <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                GPS Live
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Latitude:</span>
                <span className="font-mono text-white">{vehicle.latitude.toFixed(6)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Longitude:</span>
                <span className="font-mono text-white">{vehicle.longitude.toFixed(6)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Vehicle Type:</span>
                <span className="font-medium text-white">{vehicle.type} ({vehicle.year})</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/map"
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                Locate On Live Radar Map
              </Link>
            </div>
          </div>

          {/* Recent Trips Log */}
          {trips.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                Recent Trip Logs
              </span>
              <div className="space-y-2.5">
                {trips.map((t) => (
                  <div key={t.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-1">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-medium truncate max-w-[150px]">{t.startLocation}</span>
                      <span className="text-[0.65rem] font-mono text-emerald-400 font-bold">{t.distanceKm} km</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500">➔ {t.endLocation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Maintenance Tasks & Expense Ledger */}
        <div className="lg:col-span-2 space-y-6">
          {/* Maintenance Tasks Box */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  Scheduled Maintenance Tasks
                </h3>
                <p className="text-[0.65rem] text-slate-400">Workshop queue and repair logs</p>
              </div>
              <CreateMaintenanceModal
                vehicles={[vehicle]}
                defaultVehicleId={vehicle.id}
                isAdmin={isAdmin}
              />
            </div>

            {maintenanceTasks.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-xs">
                No active or scheduled maintenance tasks for this vehicle.
              </div>
            ) : (
              <div className="space-y-2.5">
                {maintenanceTasks.map((m) => (
                  <div
                    key={m.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs hover:border-slate-700 transition"
                  >
                    <div className="space-y-0.5">
                      <div className="font-semibold text-white">{m.description}</div>
                      <div className="flex items-center gap-3 text-[0.65rem] text-slate-400">
                        <span>Due: <strong className="text-slate-300">{m.dueDate}</strong></span>
                        <span>Est: <strong className="text-amber-400 font-mono">${m.estimatedCost}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <MaintenanceStatusToggle
                        taskId={m.id}
                        currentStatus={m.status}
                        vehicleId={vehicle.id}
                        isAdmin={isAdmin}
                      />
                      <DeleteItemButton
                        id={m.id}
                        vehicleId={vehicle.id}
                        type="maintenance"
                        isAdmin={isAdmin}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Expense History Table */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Operational Expense History
                </h3>
                <p className="text-[0.65rem] text-slate-400">Logged fuel, repairs, tolls, and miscellaneous</p>
              </div>
              <CreateExpenseModal
                vehicles={[vehicle]}
                defaultVehicleId={vehicle.id}
                isAdmin={isAdmin}
              />
            </div>

            {expenses.length === 0 ? (
              <div className="py-8 text-center text-slate-500 text-xs">
                No expenses logged for this vehicle yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-[0.65rem] uppercase tracking-wider text-slate-400 font-bold">
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Notes</th>
                      <th className="py-2.5 px-3 text-right">Amount</th>
                      <th className="py-2.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {expenses.slice(0, 15).map((e) => {
                      const typeBadge = {
                        FUEL: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                        MAINTENANCE: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                        TOLL: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                        OTHER: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                      }[e.type] || 'bg-slate-800 text-slate-300';

                      return (
                        <tr key={e.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-2.5 px-3 font-mono text-slate-300">{e.date}</td>
                          <td className="py-2.5 px-3">
                            <span className={`px-2 py-0.5 rounded-full text-[0.65rem] font-bold border ${typeBadge}`}>
                              {e.type}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 text-slate-400 max-w-xs truncate">{e.note || '—'}</td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-white">
                            ${e.amount.toFixed(2)}
                          </td>
                          <td className="py-2.5 px-3 text-right">
                            <DeleteItemButton
                              id={e.id}
                              vehicleId={vehicle.id}
                              type="expense"
                              isAdmin={isAdmin}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}