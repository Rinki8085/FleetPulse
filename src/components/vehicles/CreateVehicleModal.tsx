'use client';

import { useState, useTransition } from 'react';
import { createVehicleAction } from '@/actions/vehicles';
import NextUISelect, { SelectOption } from '@/components/ui/NextUISelect';
import { Plus, X, Truck, ShieldAlert } from 'lucide-react';

export default function CreateVehicleModal({ isAdmin }: { isAdmin: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (!isAdmin) {
    return (
      <button
        type="button"
        disabled
        title="Admin role required to register vehicles"
        className="px-4 py-2 rounded-xl bg-slate-800 text-slate-500 text-xs font-semibold flex items-center gap-2 cursor-not-allowed border border-slate-700/60"
      >
        <ShieldAlert className="w-4 h-4" />
        New Vehicle (Admin Only)
      </button>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await createVehicleAction(formData);
      setIsOpen(false);
    });
  };

  const typeOptions: SelectOption[] = [
    { value: 'Van', label: 'Commercial Van', subLabel: 'Last-mile delivery van', badge: 'VAN' },
    { value: 'Truck', label: 'Cargo Box Truck', subLabel: 'Medium-duty urban logistics', badge: 'TRUCK' },
    { value: 'Semi', label: 'Semi-Trailer', subLabel: 'Heavy-duty long-haul transport', badge: 'SEMI' },
    { value: 'Pickup', label: 'Pickup Utility Truck', subLabel: 'Field service & rapid response', badge: 'PICKUP' },
  ];

  const statusOptions: SelectOption[] = [
    { value: 'ACTIVE', label: 'ACTIVE (Available in Yard)', badge: 'ACTIVE', badgeColor: 'bg-emerald-500/20 text-emerald-400' },
    { value: 'IN_SERVICE', label: 'IN_SERVICE (On Route)', badge: 'ROUTE', badgeColor: 'bg-sky-500/20 text-sky-400' },
    { value: 'DECOMMISSIONED', label: 'DECOMMISSIONED', badge: 'IDLE', badgeColor: 'bg-slate-700/40 text-slate-400' },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        <Plus className="w-4 h-4" />
        New Vehicle
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-wide">Register New Vehicle</h3>
                  <p className="text-xs text-slate-400">Adds an active fleet asset to telemetry and tracking</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">License Plate *</label>
                  <input 
                    name="plateNumber" 
                    placeholder="e.g. FP-2026-99"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Model Name *</label>
                  <input 
                    name="model" 
                    placeholder="e.g. Mercedes Sprinter 314"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Vehicle Type</label>
                <NextUISelect
                  name="type"
                  defaultValue="Van"
                  options={typeOptions}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Model Year</label>
                  <input 
                    name="year" 
                    type="number"
                    defaultValue={new Date().getFullYear()}
                    min="2010"
                    max="2030"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Initial Odometer (km)</label>
                  <input 
                    name="odometer" 
                    type="number"
                    defaultValue="12000"
                    min="0"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Initial Status</label>
                <NextUISelect
                  name="status"
                  defaultValue="ACTIVE"
                  options={statusOptions}
                />
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
                  {isPending ? 'Registering...' : 'Confirm Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}