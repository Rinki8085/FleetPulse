'use client';

import { useState, useTransition } from 'react';
import { addExpenseAction } from '@/actions/vehicles';
import { Vehicle, ExpenseType } from '@/types/fleet';
import { Plus, X, DollarSign, Fuel, Wrench, Receipt, Tag } from 'lucide-react';

interface CreateExpenseModalProps {
  vehicles: Vehicle[];
  defaultVehicleId?: string;
  isAdmin: boolean;
}

export default function CreateExpenseModal({
  vehicles,
  defaultVehicleId,
  isAdmin,
}: CreateExpenseModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (!isAdmin) {
    return (
      <button
        type="button"
        disabled
        title="Admin role required to log expenses"
        className="px-4 py-2 rounded-xl bg-slate-800 text-slate-500 text-xs font-semibold flex items-center gap-2 cursor-not-allowed border border-slate-700/60"
      >
        <DollarSign className="w-4 h-4" />
        Log Expense (Admin Only)
      </button>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await addExpenseAction(formData);
      setIsOpen(false);
    });
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        <Plus className="w-4 h-4" />
        Log New Expense
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Log Fleet Operating Expense
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fuel refuel, workshop service, highway toll, or misc charge
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Vehicle Asset *</label>
                <select
                  name="vehicleId"
                  defaultValue={defaultVehicleId || vehicles[0]?.id || ''}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.plateNumber} — {v.model} ({v.type})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Expense Category *</label>
                  <select
                    name="type"
                    defaultValue="FUEL"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                  >
                    <option value="FUEL">⛽ FUEL (Refueling / EV Charge)</option>
                    <option value="MAINTENANCE">🔧 MAINTENANCE (Repair / Service)</option>
                    <option value="TOLL">🛣️ TOLL (Electronic Toll Road)</option>
                    <option value="OTHER">📦 OTHER (Parking, Inspection, Misc)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Amount (USD) *</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-bold">$</span>
                    <input
                      name="amount"
                      type="number"
                      step="0.01"
                      min="1"
                      placeholder="125.50"
                      required
                      className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Date *</label>
                  <input
                    name="date"
                    type="date"
                    defaultValue={todayStr}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Notes / Invoice Ref</label>
                  <input
                    name="note"
                    placeholder="e.g. Shell Station NYC - 45L Diesel"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-slate-800/80 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  {isPending ? 'Logging Expense...' : 'Confirm Expense'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
