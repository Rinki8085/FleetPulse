'use client';

import { useTransition } from 'react';
import { deleteExpenseAction, deleteMaintenanceTaskAction } from '@/actions/vehicles';
import { Trash2 } from 'lucide-react';

interface DeleteItemButtonProps {
  id: string;
  vehicleId?: string;
  type: 'expense' | 'maintenance';
  isAdmin: boolean;
}

export default function DeleteItemButton({
  id,
  vehicleId,
  type,
  isAdmin,
}: DeleteItemButtonProps) {
  const [isPending, startTransition] = useTransition();

  if (!isAdmin) return null;

  const handleDelete = () => {
    const label = type === 'expense' ? 'expense record' : 'maintenance task';
    if (confirm(`Are you sure you want to delete this ${label}?`)) {
      startTransition(async () => {
        if (type === 'expense') {
          await deleteExpenseAction(id, vehicleId);
        } else {
          await deleteMaintenanceTaskAction(id, vehicleId);
        }
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      title="Delete record"
      className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-500 hover:text-rose-400 disabled:opacity-40 transition-all cursor-pointer"
    >
      <Trash2 className="w-3.5 h-3.5" />
    </button>
  );
}
