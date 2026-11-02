'use client';

import { useTransition } from 'react';
import { updateMaintenanceStatusAction } from '@/actions/vehicles';
import { MaintenanceStatus } from '@/types/fleet';

interface MaintenanceStatusToggleProps {
  taskId: string;
  currentStatus: MaintenanceStatus;
  vehicleId?: string;
  isAdmin: boolean;
}

export default function MaintenanceStatusToggle({
  taskId,
  currentStatus,
  vehicleId,
  isAdmin,
}: MaintenanceStatusToggleProps) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as MaintenanceStatus;
    startTransition(async () => {
      await updateMaintenanceStatusAction(taskId, newStatus, vehicleId);
    });
  };

  const statusStyles: Record<MaintenanceStatus, string> = {
    SCHEDULED: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    IN_PROGRESS: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    COMPLETED: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  if (!isAdmin) {
    return (
      <span
        className={`px-2.5 py-1 rounded-full text-[0.7rem] font-semibold border ${statusStyles[currentStatus]}`}
      >
        {currentStatus}
      </span>
    );
  }

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      disabled={isPending}
      className={`px-2.5 py-1 rounded-xl text-[0.7rem] font-semibold border focus:outline-none transition cursor-pointer disabled:opacity-50 ${statusStyles[currentStatus]}`}
    >
      <option value="SCHEDULED" className="bg-slate-900 text-amber-400">Scheduled</option>
      <option value="IN_PROGRESS" className="bg-slate-900 text-cyan-400">In Progress</option>
      <option value="COMPLETED" className="bg-slate-900 text-emerald-400">Completed</option>
    </select>
  );
}
