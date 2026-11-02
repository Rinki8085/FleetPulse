'use client';

import { useTransition } from 'react';
import { updateMaintenanceStatusAction } from '@/actions/vehicles';
import { MaintenanceStatus } from '@/types/fleet';
import NextUISelect, { SelectOption } from '@/components/ui/NextUISelect';

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

  const options: SelectOption[] = [
    { value: 'SCHEDULED', label: 'Scheduled', badge: 'PLAN', badgeColor: 'bg-amber-500/20 text-amber-400' },
    { value: 'IN_PROGRESS', label: 'In Progress', badge: 'WIP', badgeColor: 'bg-cyan-500/20 text-cyan-400' },
    { value: 'COMPLETED', label: 'Completed', badge: 'DONE', badgeColor: 'bg-emerald-500/20 text-emerald-400' },
  ];

  const handleSelect = (val: string) => {
    startTransition(async () => {
      await updateMaintenanceStatusAction(taskId, val as MaintenanceStatus, vehicleId);
    });
  };

  return (
    <div className="w-36">
      <NextUISelect
        value={currentStatus}
        options={options}
        onChange={handleSelect}
        disabled={isPending}
      />
    </div>
  );
}