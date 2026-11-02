'use server';

import { revalidatePath } from 'next/cache';
import { 
  getVehicles, 
  getVehicleById, 
  createVehicle, 
  updateVehicle, 
  deleteVehicle,
  createExpense,
  deleteExpense,
  createMaintenanceTask,
  updateMaintenanceTask,
  deleteMaintenanceTask,
  getFleetStats
} from '@/lib/data/fleetStore';
import { VehicleStatus, ExpenseType, MaintenanceStatus } from '@/types/fleet';

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
  const plateNumber = (formData.get('plateNumber') as string)?.trim();
  const model = (formData.get('model') as string)?.trim();
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
  const driverId = formData.get('driverId') as string;

  await updateVehicle(id, {
    ...(model && { model }),
    ...(status && { status }),
    ...(!isNaN(odometer) && { odometer }),
    ...(driverId !== undefined && { driverId: driverId || undefined })
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

  if (!vehicleId || isNaN(amount) || !type) return;

  await createExpense({
    vehicleId,
    type,
    amount,
    date,
    note
  });

  revalidatePath('/');
  revalidatePath('/dashboard');
  revalidatePath('/expenses');
  revalidatePath('/vehicles/' + vehicleId);
}

export async function deleteExpenseAction(id: string, vehicleId?: string): Promise<void> {
  await deleteExpense(id);
  revalidatePath('/expenses');
  revalidatePath('/dashboard');
  if (vehicleId) {
    revalidatePath('/vehicles/' + vehicleId);
  }
}

export async function createMaintenanceTaskAction(formData: FormData): Promise<void> {
  const vehicleId = formData.get('vehicleId') as string;
  const description = (formData.get('description') as string)?.trim();
  const dueDate = (formData.get('dueDate') as string) || new Date().toISOString().split('T')[0];
  const estimatedCost = Number(formData.get('estimatedCost') || 0);
  const status = (formData.get('status') as MaintenanceStatus) || 'SCHEDULED';

  if (!vehicleId || !description) return;

  await createMaintenanceTask({
    vehicleId,
    description,
    dueDate,
    estimatedCost,
    status
  });

  revalidatePath('/expenses');
  revalidatePath('/dashboard');
  revalidatePath('/vehicles/' + vehicleId);
}

export async function updateMaintenanceStatusAction(id: string, status: MaintenanceStatus, vehicleId?: string): Promise<void> {
  await updateMaintenanceTask(id, { status });
  revalidatePath('/expenses');
  revalidatePath('/dashboard');
  if (vehicleId) {
    revalidatePath('/vehicles/' + vehicleId);
  }
}

export async function deleteMaintenanceTaskAction(id: string, vehicleId?: string): Promise<void> {
  await deleteMaintenanceTask(id);
  revalidatePath('/expenses');
  revalidatePath('/dashboard');
  if (vehicleId) {
    revalidatePath('/vehicles/' + vehicleId);
  }
}

export async function getStatsAction() {
  return await getFleetStats();
}
