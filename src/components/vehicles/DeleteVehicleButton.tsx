'use client';

import { useTransition } from 'react';
import { deleteVehicleAction } from '@/actions/vehicles';
import { Trash2 } from 'lucide-react';

export default function DeleteVehicleButton({
  vehicleId,
  isAdmin
}: {
  vehicleId: string;
  isAdmin: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  if (!isAdmin) {
    return (
      <span 
        title="Admin privileges required to decommission vehicle"
        className="p-1.5 text-slate-600 cursor-not-allowed inline-flex"
      >
        <Trash2 className="w-4 h-4 opacity-30" />
      </span>
    );
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete / decommission this vehicle?')) {
      startTransition(async () => {
        await deleteVehicleAction(vehicleId);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      title="Delete / Decommission Vehicle"
      className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 disabled:opacity-40 transition-all cursor-pointer"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
