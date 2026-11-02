export type UserRole = 'ADMIN' | 'VIEWER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export type VehicleStatus = 'ACTIVE' | 'IN_SERVICE' | 'DECOMMISSIONED';

export interface Vehicle {
  id: string;
  plateNumber: string;
  model: string;
  year: number;
  type: 'Van' | 'Truck' | 'Semi' | 'Pickup';
  status: VehicleStatus;
  odometer: number;
  driverId?: string;
  fuelLevel: number; // 0 - 100%
  latitude: number;
  longitude: number;
  lastServiceDate: string;
  createdAt: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: string;
  avatarUrl?: string;
}

export type ExpenseType = 'FUEL' | 'MAINTENANCE' | 'TOLL' | 'OTHER';

export interface Expense {
  id: string;
  vehicleId: string;
  type: ExpenseType;
  amount: number;
  date: string;
  note: string;
}

export type MaintenanceStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED';

export interface MaintenanceTask {
  id: string;
  vehicleId: string;
  description: string;
  dueDate: string;
  status: MaintenanceStatus;
  estimatedCost: number;
}

export interface Trip {
  id: string;
  vehicleId: string;
  startTime: string;
  endTime: string;
  distanceKm: number;
  startLocation: string;
  endLocation: string;
}

export interface FleetStats {
  totalVehicles: number;
  activeVehicles: number;
  inServiceVehicles: number;
  decommissionedVehicles: number;
  totalMonthlySpend: number;
  pendingMaintenanceCount: number;
  averageOdometer: number;
}
