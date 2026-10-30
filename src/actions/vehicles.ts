'use server';

import { revalidatePath } from 'next/cache';
import { 
  getVehicles, 
  getVehicleById, 
  createVehicle, 
  updateVehicle, 
  deleteVehicle,
  createExpense,
  getFleetStats
} from '@/lib/data/fleetStore';
import { VehicleStatus, ExpenseType } from '@/types/fleet';

export async function fetchVehicles(options?: {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
}) {
  return await getVehicles(options);
}

export async function fetchVehicle(id: string) {
  return await getVehicleById(id);
}

export async function createVehicleAction(formData: FormData): Promise<void> {
  const plateNumber = formData.get('plateNumber') as string;
  const model = formData.get('model') as string;
  const year = Number(formData.get('year') || new Date().getFullYear());
  const type = (formData.get('type') as 'Van' | 'Truck' | 'Semi' | 'Pickup') || 'Van';
  const status = (formData.get('status') as VehicleStatus) || 'ACTIVE';
  const odometer = Number(formData.get('odometer') || 0);
  const driverId = (formData.get('driverId') as string) || undefined;

  if (!plateNumber || !model) return;

  await createVehicle({
    plateNumber,
    model,
    year,
    type,
    status,
    odometer,
    driverId
  });

  revalidatePath('/');
  revalidatePath('/vehicles');
}

export async function updateVehicleAction(id: string, formData: FormData): Promise<void> {
  const model = formData.get('model') as string;
  const status = formData.get('status') as VehicleStatus;
  const odometer = Number(formData.get('odometer'));

  await updateVehicle(id, {
    ...(model && { model }),
    ...(status && { status }),
    ...(!isNaN(odometer) && { odometer })
  });

  revalidatePath('/');
  revalidatePath('/vehicles');
  revalidatePath('/vehicles/' + id);
}

export async function deleteVehicleAction(id: string): Promise<void> {
  await deleteVehicle(id);
  revalidatePath('/');
  revalidatePath('/vehicles');
}

export async function addExpenseAction(formData: FormData): Promise<void> {
  const vehicleId = formData.get('vehicleId') as string;
  const type = formData.get('type') as ExpenseType;
  const amount = Number(formData.get('amount'));
  const date = (formData.get('date') as string) || new Date().toISOString().split('T')[0];
  const note = (formData.get('note') as string) || '';

  if (!vehicleId || !amount || !type) return;

  await createExpense({
    vehicleId,
    type,
    amount,
    date,
    note
  });

  revalidatePath('/');
  revalidatePath('/dashboard');
  revalidatePath('/vehicles/' + vehicleId);
}

export async function getStatsAction() {
  return await getFleetStats();
}
