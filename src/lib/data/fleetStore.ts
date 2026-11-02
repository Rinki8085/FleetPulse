import { 
  Vehicle, 
  Driver, 
  Expense, 
  MaintenanceTask,
  MaintenanceStatus, 
  Trip, 
  User, 
  FleetStats, 
  VehicleStatus,
  ExpenseType 
} from '@/types/fleet';
import { 
  initialVehicles, 
  initialDrivers, 
  initialExpenses, 
  initialMaintenanceTasks, 
  initialTrips, 
  initialUsers 
} from './mockData';

declare global {
  var __fleetStore: {
    vehicles: Vehicle[];
    drivers: Driver[];
    expenses: Expense[];
    maintenanceTasks: MaintenanceTask[];
    trips: Trip[];
    users: User[];
  } | undefined;
}

const store = globalThis.__fleetStore ?? {
  vehicles: [...initialVehicles],
  drivers: [...initialDrivers],
  expenses: [...initialExpenses],
  maintenanceTasks: [...initialMaintenanceTasks],
  trips: [...initialTrips],
  users: [...initialUsers]
};

if (process.env.NODE_ENV !== 'production') {
  globalThis.__fleetStore = store;
}

export interface GetVehiclesOptions {
  search?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: 'plateNumber' | 'odometer' | 'year' | 'model';
  sortOrder?: 'asc' | 'desc';
}

export async function getVehicles(options: GetVehiclesOptions = {}) {
  const {
    search = '',
    status = 'ALL',
    page = 1,
    limit = 10,
    sortBy = 'plateNumber',
    sortOrder = 'asc'
  } = options;

  let filtered = [...store.vehicles];

  if (search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(v => 
      v.plateNumber.toLowerCase().includes(q) ||
      v.model.toLowerCase().includes(q) ||
      v.type.toLowerCase().includes(q)
    );
  }

  if (status && status !== 'ALL') {
    filtered = filtered.filter(v => v.status === status);
  }

  filtered.sort((a, b) => {
    let aVal: string | number = a[sortBy];
    let bVal: string | number = b[sortBy];
    if (typeof aVal === 'string') aVal = aVal.toLowerCase();
    if (typeof bVal === 'string') bVal = bVal.toLowerCase();

    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * limit;
  const paginatedVehicles = filtered.slice(startIndex, startIndex + limit);

  const items = paginatedVehicles.map(veh => ({
    ...veh,
    driver: store.drivers.find(d => d.id === veh.driverId)
  }));

  return {
    vehicles: items,
    total,
    page: currentPage,
    totalPages,
    limit
  };
}

export async function getVehicleById(id: string) {
  const vehicle = store.vehicles.find(v => v.id === id);
  if (!vehicle) return null;

  const driver = store.drivers.find(d => d.id === vehicle.driverId);
  const vehicleExpenses = store.expenses.filter(e => e.vehicleId === id);
  const vehicleTasks = store.maintenanceTasks.filter(m => m.vehicleId === id);
  const vehicleTrips = store.trips.filter(t => t.vehicleId === id);

  return {
    ...vehicle,
    driver,
    expenses: vehicleExpenses,
    maintenanceTasks: vehicleTasks,
    trips: vehicleTrips
  };
}

export async function createVehicle(data: {
  plateNumber: string;
  model: string;
  year: number;
  type: 'Van' | 'Truck' | 'Semi' | 'Pickup';
  status: VehicleStatus;
  odometer: number;
  driverId?: string;
  fuelLevel?: number;
}) {
  const nextNum = store.vehicles.length + 1;
  const newVehicle: Vehicle = {
    id: 'veh-' + String(nextNum).padStart(2, '0'),
    plateNumber: data.plateNumber.toUpperCase().trim(),
    model: data.model.trim(),
    year: data.year,
    type: data.type,
    status: data.status,
    odometer: data.odometer,
    driverId: data.driverId || undefined,
    fuelLevel: data.fuelLevel ?? 100,
    latitude: 40.7128 + ((Math.random() - 0.5) * 0.1),
    longitude: -74.0060 + ((Math.random() - 0.5) * 0.1),
    lastServiceDate: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  };

  store.vehicles.unshift(newVehicle);
  return newVehicle;
}

export async function updateVehicle(id: string, data: Partial<Vehicle>) {
  const index = store.vehicles.findIndex(v => v.id === id);
  if (index === -1) return null;

  store.vehicles[index] = {
    ...store.vehicles[index],
    ...data
  };

  return store.vehicles[index];
}

export async function deleteVehicle(id: string) {
  const index = store.vehicles.findIndex(v => v.id === id);
  if (index === -1) return false;

  store.vehicles.splice(index, 1);
  return true;
}

export async function getExpenses(options: {
  vehicleId?: string;
  type?: ExpenseType;
  month?: string;
  year?: string;
} = {}) {
  let list = [...store.expenses];

  if (options.vehicleId) {
    list = list.filter(e => e.vehicleId === options.vehicleId);
  }

  if (options.type) {
    list = list.filter(e => e.type === options.type);
  }

  if (options.year && options.month) {
    const prefix = options.year + '-' + options.month.padStart(2, '0');
    list = list.filter(e => e.date.startsWith(prefix));
  }

  return list.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function createExpense(data: {
  vehicleId: string;
  type: ExpenseType;
  amount: number;
  date: string;
  note: string;
}) {
  const newExpense: Expense = {
    id: 'exp-' + String(store.expenses.length + 1).padStart(4, '0'),
    ...data
  };

  store.expenses.unshift(newExpense);
  return newExpense;
}

export async function getMaintenanceTasks(vehicleId?: string) {
  if (vehicleId) {
    return store.maintenanceTasks.filter(m => m.vehicleId === vehicleId);
  }
  return [...store.maintenanceTasks];
}

export async function getDrivers() {
  return [...store.drivers];
}

export async function getFleetStats(): Promise<FleetStats> {
  const totalVehicles = store.vehicles.length;
  const activeVehicles = store.vehicles.filter(v => v.status === 'ACTIVE').length;
  const inServiceVehicles = store.vehicles.filter(v => v.status === 'IN_SERVICE').length;
  const decommissionedVehicles = store.vehicles.filter(v => v.status === 'DECOMMISSIONED').length;

  const currentMonth = '2026-10';
  const monthlyExpenses = store.expenses.filter(e => e.date.startsWith(currentMonth));
  const totalMonthlySpend = monthlyExpenses.reduce((sum, e) => sum + e.amount, 0);

  const pendingMaintenanceCount = store.maintenanceTasks.filter(m => m.status !== 'COMPLETED').length;
  const totalOdometer = store.vehicles.reduce((sum, v) => sum + v.odometer, 0);
  const averageOdometer = totalVehicles > 0 ? Math.round(totalOdometer / totalVehicles) : 0;

  return {
    totalVehicles,
    activeVehicles,
    inServiceVehicles,
    decommissionedVehicles,
    totalMonthlySpend,
    pendingMaintenanceCount,
    averageOdometer
  };
}

export async function getAllVehiclesForMap() {
  return store.vehicles.map(v => ({
    id: v.id,
    plateNumber: v.plateNumber,
    model: v.model,
    status: v.status,
    latitude: v.latitude,
    longitude: v.longitude,
    speed: v.status === 'ACTIVE' ? Math.floor(45 + Math.random() * 30) : 0,
    heading: Math.floor(Math.random() * 360)
  }));
}

export async function createMaintenanceTask(data: {
  vehicleId: string;
  description: string;
  dueDate: string;
  estimatedCost: number;
  status?: MaintenanceStatus;
}) {
  const newTask: MaintenanceTask = {
    id: 'maint-' + String(store.maintenanceTasks.length + 1).padStart(3, '0'),
    status: data.status || 'SCHEDULED',
    ...data
  };
  store.maintenanceTasks.unshift(newTask);
  return newTask;
}

export async function updateMaintenanceTask(id: string, data: Partial<MaintenanceTask>) {
  const idx = store.maintenanceTasks.findIndex(m => m.id === id);
  if (idx !== -1) {
    store.maintenanceTasks[idx] = { ...store.maintenanceTasks[idx], ...data };
    return store.maintenanceTasks[idx];
  }
  return null;
}

export async function deleteMaintenanceTask(id: string) {
  const idx = store.maintenanceTasks.findIndex(m => m.id === id);
  if (idx !== -1) {
    store.maintenanceTasks.splice(idx, 1);
    return true;
  }
  return false;
}

export async function deleteExpense(id: string) {
  const idx = store.expenses.findIndex(e => e.id === id);
  if (idx !== -1) {
    store.expenses.splice(idx, 1);
    return true;
  }
  return false;
}

export async function getVehicleTrips(vehicleId: string) {
  return store.trips.filter(t => t.vehicleId === vehicleId);
}
