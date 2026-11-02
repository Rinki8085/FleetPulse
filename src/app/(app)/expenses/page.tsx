import { getVehicles, getExpenses, getMaintenanceTasks } from '@/lib/data/fleetStore';
import { getSession } from '@/lib/auth';
import { ExpenseType, MaintenanceStatus } from '@/types/fleet';
import CreateExpenseModal from '@/components/expenses/CreateExpenseModal';
import CreateMaintenanceModal from '@/components/expenses/CreateMaintenanceModal';
import MaintenanceStatusToggle from '@/components/expenses/MaintenanceStatusToggle';
import DeleteItemButton from '@/components/expenses/DeleteItemButton';
import NextUISelect, { SelectOption } from '@/components/ui/NextUISelect';
import { 
  DollarSign, 
  Fuel, 
  Wrench, 
  Receipt, 
  Filter, 
  Calendar, 
  Truck, 
  Search,
  CheckCircle2,
  Clock,
  RotateCcw
} from 'lucide-react';
import Link from 'next/link';

export default async function ExpensesPage(props: {
  searchParams?: Promise<{
    tab?: string;
    type?: string;
    vehicleId?: string;
    maintStatus?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentTab = searchParams?.tab === 'maintenance' ? 'maintenance' : 'expenses';
  const typeFilter = searchParams?.type as ExpenseType | undefined;
  const vehicleFilter = searchParams?.vehicleId;
  const maintStatusFilter = searchParams?.maintStatus as MaintenanceStatus | undefined;

  const session = await getSession();
  const isAdmin = session?.role === 'ADMIN';

  const [{ vehicles }, allExpenses, allMaintenance] = await Promise.all([
    getVehicles({ limit: 100 }),
    getExpenses(),
    getMaintenanceTasks(),
  ]);

  const vehicleMap = new Map(vehicles.map((v) => [v.id, v]));

  // Calculate high-level KPIs
  const totalExpenseSum = allExpenses.reduce((sum, e) => sum + e.amount, 0);
  const fuelExpenseSum = allExpenses
    .filter((e) => e.type === 'FUEL')
    .reduce((sum, e) => sum + e.amount, 0);
  const maintExpenseSum = allExpenses
    .filter((e) => e.type === 'MAINTENANCE')
    .reduce((sum, e) => sum + e.amount, 0);
  const pendingMaintenanceCount = allMaintenance.filter((m) => m.status !== 'COMPLETED').length;

  // Filter expenses
  let filteredExpenses = allExpenses;
  if (typeFilter) {
    filteredExpenses = filteredExpenses.filter((e) => e.type === typeFilter);
  }
  if (vehicleFilter) {
    filteredExpenses = filteredExpenses.filter((e) => e.vehicleId === vehicleFilter);
  }

  // Filter maintenance
  let filteredMaintenance = allMaintenance;
  if (maintStatusFilter) {
    filteredMaintenance = filteredMaintenance.filter((m) => m.status === maintStatusFilter);
  }
  if (vehicleFilter) {
    filteredMaintenance = filteredMaintenance.filter((m) => m.vehicleId === vehicleFilter);
  }

  // NextUI select options for categories
  const categoryOptions: SelectOption[] = [
    { value: '', label: 'All Categories' },
    { value: 'FUEL', label: 'Fuel & EV Charging', badge: 'FUEL', badgeColor: 'bg-emerald-500/20 text-emerald-400' },
    { value: 'MAINTENANCE', label: 'Workshop Maintenance', badge: 'MAINT', badgeColor: 'bg-amber-500/20 text-amber-400' },
    { value: 'TOLL', label: 'Highway Tolls', badge: 'TOLL', badgeColor: 'bg-cyan-500/20 text-cyan-400' },
    { value: 'OTHER', label: 'Miscellaneous / Other', badge: 'OTHER', badgeColor: 'bg-purple-500/20 text-purple-400' },
  ];

  // NextUI select options for vehicles
  const vehicleOptions: SelectOption[] = [
    { value: '', label: 'All Vehicles', subLabel: 'Entire active fleet' },
    ...vehicles.map((v) => ({
      value: v.id,
      label: v.plateNumber,
      subLabel: `${v.model} (${v.type})`,
      badge: v.status,
      badgeColor: v.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-sky-500/20 text-sky-400',
    })),
  ];

  // NextUI select options for maintenance status
  const maintStatusOptions: SelectOption[] = [
    { value: '', label: 'All Statuses' },
    { value: 'SCHEDULED', label: 'Scheduled', badge: 'PLAN', badgeColor: 'bg-amber-500/20 text-amber-400' },
    { value: 'IN_PROGRESS', label: 'In Progress', badge: 'WIP', badgeColor: 'bg-cyan-500/20 text-cyan-400' },
    { value: 'COMPLETED', label: 'Completed', badge: 'DONE', badgeColor: 'bg-emerald-500/20 text-emerald-400' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">Expenses & Maintenance</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono font-medium border border-slate-700">
              {allExpenses.length} Expense Logs
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Track operational spending, fuel refuels, road tolls, and workshop service schedules.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <CreateExpenseModal vehicles={vehicles} isAdmin={isAdmin} />
          <CreateMaintenanceModal vehicles={vehicles} isAdmin={isAdmin} />
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Total Operating Costs</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            ${totalExpenseSum.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </div>
          <div className="text-[0.65rem] text-slate-500">Across {allExpenses.length} transactions</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Fuel & Charging</span>
            <Fuel className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">
            ${fuelExpenseSum.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </div>
          <div className="text-[0.65rem] text-emerald-500/80">
            {Math.round((fuelExpenseSum / (totalExpenseSum || 1)) * 100)}% of total spend
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Workshop Repairs</span>
            <Wrench className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold text-amber-400 font-mono">
            ${maintExpenseSum.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </div>
          <div className="text-[0.65rem] text-amber-500/80">
            {Math.round((maintExpenseSum / (totalExpenseSum || 1)) * 100)}% of total spend
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Service Queue</span>
            <Clock className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {pendingMaintenanceCount}
          </div>
          <div className="text-[0.65rem] text-cyan-400">Pending & active tasks</div>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Link
            href="/expenses?tab=expenses"
            className={`px-4 py-3 text-xs font-bold border-b-2 transition flex items-center gap-2 ${
              currentTab === 'expenses'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>Operating Expense Ledger</span>
            <span className="px-1.5 py-0.5 rounded-full text-[0.65rem] bg-slate-800 text-slate-300">
              {allExpenses.length}
            </span>
          </Link>

          <Link
            href="/expenses?tab=maintenance"
            className={`px-4 py-3 text-xs font-bold border-b-2 transition flex items-center gap-2 ${
              currentTab === 'maintenance'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>Maintenance Schedule</span>
            <span className="px-1.5 py-0.5 rounded-full text-[0.65rem] bg-slate-800 text-slate-300">
              {allMaintenance.length}
            </span>
          </Link>
        </div>
      </div>

      {/* TAB 1: EXPENSES LEDGER */}
      {currentTab === 'expenses' && (
        <div className="space-y-4">
          {/* NextUI-Styled Filters Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <form method="GET" action="/expenses" className="flex flex-wrap items-center gap-3">
              <input type="hidden" name="tab" value="expenses" />

              {/* NextUI Category Select */}
              <div className="w-48 sm:w-56">
                <NextUISelect
                  name="type"
                  defaultValue={typeFilter || ''}
                  options={categoryOptions}
                  icon={<Filter className="w-3.5 h-3.5" />}
                />
              </div>

              {/* NextUI Vehicle Select */}
              <div className="w-64 sm:w-72">
                <NextUISelect
                  name="vehicleId"
                  defaultValue={vehicleFilter || ''}
                  options={vehicleOptions}
                  icon={<Truck className="w-3.5 h-3.5" />}
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition cursor-pointer text-xs"
              >
                Apply Filter
              </button>

              {(typeFilter || vehicleFilter) && (
                <Link
                  href="/expenses?tab=expenses"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center gap-1.5 border border-slate-800 transition text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </Link>
              )}
            </form>

            <span className="text-slate-400 text-[0.7rem]">
              Showing <strong className="text-white">{filteredExpenses.length}</strong> recorded receipts
            </span>
          </div>

          {/* Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/40 text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Vehicle Asset</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Description / Reference</th>
                    <th className="py-3 px-4 text-right">Amount (USD)</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredExpenses.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No expense records match the selected filter.
                      </td>
                    </tr>
                  ) : (
                    filteredExpenses.slice(0, 50).map((e) => {
                      const veh = vehicleMap.get(e.vehicleId);
                      const typeBadge = {
                        FUEL: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                        MAINTENANCE: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
                        TOLL: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                        OTHER: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                      }[e.type] || 'bg-slate-800 text-slate-300';

                      return (
                        <tr key={e.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 font-mono text-slate-300">{e.date}</td>
                          <td className="py-3 px-4">
                            {veh ? (
                              <Link
                                href={'/vehicles/' + veh.id}
                                className="font-semibold text-white hover:text-emerald-400 transition"
                              >
                                {veh.plateNumber}{' '}
                                <span className="font-normal text-slate-400 text-[0.7rem]">
                                  ({veh.model})
                                </span>
                              </Link>
                            ) : (
                              <span className="font-mono text-slate-500">{e.vehicleId}</span>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[0.65rem] font-bold border ${typeBadge}`}>
                              {e.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-300 max-w-sm truncate">
                            {e.note || '?'}
                          </td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-white">
                            ${e.amount.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <DeleteItemButton
                              id={e.id}
                              type="expense"
                              isAdmin={isAdmin}
                            />
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MAINTENANCE SCHEDULE */}
      {currentTab === 'maintenance' && (
        <div className="space-y-4">
          {/* NextUI-Styled Filters Bar */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <form method="GET" action="/expenses" className="flex flex-wrap items-center gap-3">
              <input type="hidden" name="tab" value="maintenance" />

              {/* NextUI Maintenance Status Select */}
              <div className="w-48 sm:w-56">
                <NextUISelect
                  name="maintStatus"
                  defaultValue={maintStatusFilter || ''}
                  options={maintStatusOptions}
                  icon={<Filter className="w-3.5 h-3.5" />}
                />
              </div>

              {/* NextUI Vehicle Select */}
              <div className="w-64 sm:w-72">
                <NextUISelect
                  name="vehicleId"
                  defaultValue={vehicleFilter || ''}
                  options={vehicleOptions}
                  icon={<Truck className="w-3.5 h-3.5" />}
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition cursor-pointer text-xs"
              >
                Apply Filter
              </button>

              {(maintStatusFilter || vehicleFilter) && (
                <Link
                  href="/expenses?tab=maintenance"
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center gap-1.5 border border-slate-800 transition text-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </Link>
              )}
            </form>

            <span className="text-slate-400 text-[0.7rem]">
              Total <strong className="text-white">{filteredMaintenance.length}</strong> tasks in log
            </span>
          </div>

          {/* Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/40 text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-4">Due Date</th>
                    <th className="py-3 px-4">Vehicle Asset</th>
                    <th className="py-3 px-4">Task Description</th>
                    <th className="py-3 px-4">Estimated Cost</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredMaintenance.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No maintenance tasks match the selected filter.
                      </td>
                    </tr>
                  ) : (
                    filteredMaintenance.map((m) => {
                      const veh = vehicleMap.get(m.vehicleId);

                      return (
                        <tr key={m.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 font-mono text-slate-300">{m.dueDate}</td>
                          <td className="py-3 px-4">
                            {veh ? (
                              <Link
                                href={'/vehicles/' + veh.id}
                                className="font-semibold text-white hover:text-amber-400 transition"
                              >
                                {veh.plateNumber}{' '}
                                <span className="font-normal text-slate-400 text-[0.7rem]">
                                  ({veh.model})
                                </span>
                              </Link>
                            ) : (
                              <span className="font-mono text-slate-500">{m.vehicleId}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 font-medium text-slate-200">
                            {m.description}
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-white">
                            ${m.estimatedCost.toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <MaintenanceStatusToggle
                              taskId={m.id}
                              currentStatus={m.status}
                              vehicleId={m.vehicleId}
                              isAdmin={isAdmin}
                            />
                          </td>
                          <td className="py-3 px-4 text-right">
                            <DeleteItemButton
                              id={m.id}
                              type="maintenance"
                              isAdmin={isAdmin}
                            />
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}