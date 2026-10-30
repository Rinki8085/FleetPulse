// Initial fleet dataset
import { Vehicle, Driver, Expense, MaintenanceTask, Trip, User } from '@/types/fleet';

export const initialVehicles: Vehicle[] = [
  {
    "id": "veh-01",
    "plateNumber": "FP-2021-1037",
    "model": "Mercedes-Benz Sprinter 314 CDI",
    "year": 2021,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 17820,
    "driverId": "drv-01",
    "fuelLevel": 43,
    "latitude": 40.772714,
    "longitude": -74.048035,
    "lastServiceDate": "2026-02-11",
    "createdAt": "2024-02-13T08:00:00.000Z"
  },
  {
    "id": "veh-02",
    "plateNumber": "FP-2022-1074",
    "model": "Ford Transit Custom 300 EcoBlue",
    "year": 2022,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 21640,
    "driverId": "drv-02",
    "fuelLevel": 63,
    "latitude": 40.747501,
    "longitude": -74.068673,
    "lastServiceDate": "2026-03-12",
    "createdAt": "2024-03-14T08:00:00.000Z"
  },
  {
    "id": "veh-03",
    "plateNumber": "FP-2023-1111",
    "model": "Renault Master 2.3 dCi",
    "year": 2023,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 25460,
    "driverId": "drv-03",
    "fuelLevel": 63,
    "latitude": 40.776425,
    "longitude": -73.976331,
    "lastServiceDate": "2026-04-13",
    "createdAt": "2024-04-15T08:00:00.000Z"
  },
  {
    "id": "veh-04",
    "plateNumber": "FP-2024-1148",
    "model": "Iveco Daily 35S14",
    "year": 2024,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 29280,
    "driverId": "drv-04",
    "fuelLevel": 85,
    "latitude": 40.648266,
    "longitude": -73.956946,
    "lastServiceDate": "2026-05-14",
    "createdAt": "2024-05-16T08:00:00.000Z"
  },
  {
    "id": "veh-05",
    "plateNumber": "FP-2025-1185",
    "model": "Volkswagen Crafter CR35",
    "year": 2020,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 33100,
    "driverId": "drv-05",
    "fuelLevel": 44,
    "latitude": 40.721743,
    "longitude": -73.988301,
    "lastServiceDate": "2026-06-15",
    "createdAt": "2024-06-17T08:00:00.000Z"
  },
  {
    "id": "veh-06",
    "plateNumber": "FP-2020-1222",
    "model": "Volvo FH16 750 Globetrotter",
    "year": 2021,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 36920,
    "driverId": "drv-06",
    "fuelLevel": 81,
    "latitude": 40.692346,
    "longitude": -74.022425,
    "lastServiceDate": "2026-07-16",
    "createdAt": "2024-07-18T08:00:00.000Z"
  },
  {
    "id": "veh-07",
    "plateNumber": "FP-2021-1259",
    "model": "Scania R500 V8 Highline",
    "year": 2022,
    "type": "Truck",
    "status": "IN_SERVICE",
    "odometer": 40740,
    "driverId": "drv-07",
    "fuelLevel": 47,
    "latitude": 40.711771,
    "longitude": -73.99004,
    "lastServiceDate": "2026-08-17",
    "createdAt": "2024-08-19T08:00:00.000Z"
  },
  {
    "id": "veh-08",
    "plateNumber": "FP-2022-1296",
    "model": "MAN TGX 26.510",
    "year": 2023,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 44560,
    "driverId": "drv-08",
    "fuelLevel": 76,
    "latitude": 40.742073,
    "longitude": -74.041506,
    "lastServiceDate": "2026-01-18",
    "createdAt": "2024-09-20T08:00:00.000Z"
  },
  {
    "id": "veh-09",
    "plateNumber": "FP-2023-1333",
    "model": "DAF XF 480 Super Space",
    "year": 2024,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 48380,
    "driverId": "drv-09",
    "fuelLevel": 76,
    "latitude": 40.771638,
    "longitude": -74.01027,
    "lastServiceDate": "2026-02-19",
    "createdAt": "2024-01-21T08:00:00.000Z"
  },
  {
    "id": "veh-10",
    "plateNumber": "FP-2024-1370",
    "model": "Mercedes-Benz Actros 1845",
    "year": 2020,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 52200,
    "driverId": "drv-10",
    "fuelLevel": 89,
    "latitude": 40.668759,
    "longitude": -74.065554,
    "lastServiceDate": "2026-03-20",
    "createdAt": "2024-02-12T08:00:00.000Z"
  },
  {
    "id": "veh-11",
    "plateNumber": "FP-2025-1407",
    "model": "Isuzu NPR 75-190",
    "year": 2021,
    "type": "Pickup",
    "status": "ACTIVE",
    "odometer": 56020,
    "driverId": "drv-11",
    "fuelLevel": 89,
    "latitude": 40.705194,
    "longitude": -73.964995,
    "lastServiceDate": "2026-04-21",
    "createdAt": "2024-03-13T08:00:00.000Z"
  },
  {
    "id": "veh-12",
    "plateNumber": "FP-2020-1444",
    "model": "Toyota Hilux Extra Cab 2.8",
    "year": 2022,
    "type": "Pickup",
    "status": "ACTIVE",
    "odometer": 59840,
    "driverId": "drv-12",
    "fuelLevel": 48,
    "latitude": 40.77919,
    "longitude": -73.939099,
    "lastServiceDate": "2026-05-22",
    "createdAt": "2024-04-14T08:00:00.000Z"
  },
  {
    "id": "veh-13",
    "plateNumber": "FP-2021-1481",
    "model": "Ford Ranger Wildtrak 2.0",
    "year": 2023,
    "type": "Pickup",
    "status": "ACTIVE",
    "odometer": 63660,
    "driverId": "drv-13",
    "fuelLevel": 82,
    "latitude": 40.726216,
    "longitude": -74.033228,
    "lastServiceDate": "2026-06-23",
    "createdAt": "2024-05-15T08:00:00.000Z"
  },
  {
    "id": "veh-14",
    "plateNumber": "FP-2022-1518",
    "model": "Mitsubishi Fuso Canter 7C15",
    "year": 2024,
    "type": "Truck",
    "status": "IN_SERVICE",
    "odometer": 67480,
    "driverId": "drv-14",
    "fuelLevel": 64,
    "latitude": 40.730783,
    "longitude": -74.043142,
    "lastServiceDate": "2026-07-24",
    "createdAt": "2024-06-16T08:00:00.000Z"
  },
  {
    "id": "veh-15",
    "plateNumber": "FP-2023-1555",
    "model": "Peugeot Boxer 2.2 BlueHDi",
    "year": 2020,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 71300,
    "driverId": "drv-15",
    "fuelLevel": 76,
    "latitude": 40.666523,
    "longitude": -73.942703,
    "lastServiceDate": "2026-08-10",
    "createdAt": "2024-07-17T08:00:00.000Z"
  },
  {
    "id": "veh-16",
    "plateNumber": "FP-2024-1592",
    "model": "Mercedes-Benz Sprinter 314 CDI",
    "year": 2021,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 75120,
    "fuelLevel": 51,
    "latitude": 40.668026,
    "longitude": -74.076494,
    "lastServiceDate": "2026-01-11",
    "createdAt": "2024-08-18T08:00:00.000Z"
  },
  {
    "id": "veh-17",
    "plateNumber": "FP-2025-1629",
    "model": "Ford Transit Custom 300 EcoBlue",
    "year": 2022,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 78940,
    "fuelLevel": 54,
    "latitude": 40.660691,
    "longitude": -74.011231,
    "lastServiceDate": "2026-02-12",
    "createdAt": "2024-09-19T08:00:00.000Z"
  },
  {
    "id": "veh-18",
    "plateNumber": "FP-2020-1666",
    "model": "Renault Master 2.3 dCi",
    "year": 2023,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 82760,
    "fuelLevel": 45,
    "latitude": 40.758793,
    "longitude": -73.955027,
    "lastServiceDate": "2026-03-13",
    "createdAt": "2024-01-20T08:00:00.000Z"
  },
  {
    "id": "veh-19",
    "plateNumber": "FP-2021-1703",
    "model": "Iveco Daily 35S14",
    "year": 2024,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 86580,
    "fuelLevel": 45,
    "latitude": 40.767812,
    "longitude": -74.016957,
    "lastServiceDate": "2026-04-14",
    "createdAt": "2024-02-21T08:00:00.000Z"
  },
  {
    "id": "veh-20",
    "plateNumber": "FP-2022-1740",
    "model": "Volkswagen Crafter CR35",
    "year": 2020,
    "type": "Van",
    "status": "ACTIVE",
    "odometer": 90400,
    "fuelLevel": 71,
    "latitude": 40.684916,
    "longitude": -74.040936,
    "lastServiceDate": "2026-05-15",
    "createdAt": "2024-03-12T08:00:00.000Z"
  },
  {
    "id": "veh-21",
    "plateNumber": "FP-2023-1777",
    "model": "Volvo FH16 750 Globetrotter",
    "year": 2021,
    "type": "Truck",
    "status": "IN_SERVICE",
    "odometer": 94220,
    "fuelLevel": 74,
    "latitude": 40.72875,
    "longitude": -73.986374,
    "lastServiceDate": "2026-06-16",
    "createdAt": "2024-04-13T08:00:00.000Z"
  },
  {
    "id": "veh-22",
    "plateNumber": "FP-2024-1814",
    "model": "Scania R500 V8 Highline",
    "year": 2022,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 98040,
    "fuelLevel": 70,
    "latitude": 40.756663,
    "longitude": -74.076123,
    "lastServiceDate": "2026-07-17",
    "createdAt": "2024-05-14T08:00:00.000Z"
  },
  {
    "id": "veh-23",
    "plateNumber": "FP-2025-1851",
    "model": "MAN TGX 26.510",
    "year": 2023,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 101860,
    "fuelLevel": 58,
    "latitude": 40.670958,
    "longitude": -73.979046,
    "lastServiceDate": "2026-08-18",
    "createdAt": "2024-06-15T08:00:00.000Z"
  },
  {
    "id": "veh-24",
    "plateNumber": "FP-2020-1888",
    "model": "DAF XF 480 Super Space",
    "year": 2024,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 105680,
    "fuelLevel": 88,
    "latitude": 40.661631,
    "longitude": -73.989441,
    "lastServiceDate": "2026-01-19",
    "createdAt": "2024-07-16T08:00:00.000Z"
  },
  {
    "id": "veh-25",
    "plateNumber": "FP-2021-1925",
    "model": "Mercedes-Benz Actros 1845",
    "year": 2020,
    "type": "Truck",
    "status": "ACTIVE",
    "odometer": 109500,
    "fuelLevel": 61,
    "latitude": 40.775237,
    "longitude": -74.067292,
    "lastServiceDate": "2026-02-20",
    "createdAt": "2024-08-17T08:00:00.000Z"
  },
  {
    "id": "veh-26",
    "plateNumber": "FP-2022-1962",
    "model": "Isuzu NPR 75-190",
    "year": 2021,
    "type": "Pickup",
    "status": "ACTIVE",
    "odometer": 113320,
    "fuelLevel": 61,
    "latitude": 40.719963,
    "longitude": -73.968894,
    "lastServiceDate": "2026-03-21",
    "createdAt": "2024-09-18T08:00:00.000Z"
  },
  {
    "id": "veh-27",
    "plateNumber": "FP-2023-1999",
    "model": "Toyota Hilux Extra Cab 2.8",
    "year": 2022,
    "type": "Pickup",
    "status": "ACTIVE",
    "odometer": 117140,
    "fuelLevel": 61,
    "latitude": 40.767462,
    "longitude": -74.056621,
    "lastServiceDate": "2026-04-22",
    "createdAt": "2024-01-19T08:00:00.000Z"
  },
  {
    "id": "veh-28",
    "plateNumber": "FP-2024-2036",
    "model": "Ford Ranger Wildtrak 2.0",
    "year": 2023,
    "type": "Pickup",
    "status": "IN_SERVICE",
    "odometer": 120960,
    "fuelLevel": 72,
    "latitude": 40.700459,
    "longitude": -73.982952,
    "lastServiceDate": "2026-05-23",
    "createdAt": "2024-02-20T08:00:00.000Z"
  },
  {
    "id": "veh-29",
    "plateNumber": "FP-2025-2073",
    "model": "Mitsubishi Fuso Canter 7C15",
    "year": 2024,
    "type": "Truck",
    "status": "DECOMMISSIONED",
    "odometer": 124780,
    "fuelLevel": 89,
    "latitude": 40.650015,
    "longitude": -73.958665,
    "lastServiceDate": "2026-06-24",
    "createdAt": "2024-03-21T08:00:00.000Z"
  },
  {
    "id": "veh-30",
    "plateNumber": "FP-2020-2110",
    "model": "Peugeot Boxer 2.2 BlueHDi",
    "year": 2020,
    "type": "Van",
    "status": "DECOMMISSIONED",
    "odometer": 128600,
    "fuelLevel": 47,
    "latitude": 40.710066,
    "longitude": -74.074936,
    "lastServiceDate": "2026-07-10",
    "createdAt": "2024-04-12T08:00:00.000Z"
  }
];

export const initialDrivers: Driver[] = [
  {
    "id": "drv-01",
    "name": "Marcus Vance",
    "phone": "+1 (555) 234-8901",
    "licenseNumber": "DL-882910-A",
    "licenseExpiry": "2027-08-15"
  },
  {
    "id": "drv-02",
    "name": "Elena Rostova",
    "phone": "+1 (555) 489-1234",
    "licenseNumber": "DL-443912-B",
    "licenseExpiry": "2028-01-20"
  },
  {
    "id": "drv-03",
    "name": "James O Connor",
    "phone": "+1 (555) 302-9988",
    "licenseNumber": "DL-901844-A",
    "licenseExpiry": "2026-12-10"
  },
  {
    "id": "drv-04",
    "name": "Sofia Rodriguez",
    "phone": "+1 (555) 782-3401",
    "licenseNumber": "DL-118274-C",
    "licenseExpiry": "2027-11-04"
  },
  {
    "id": "drv-05",
    "name": "Kwame Mensah",
    "phone": "+1 (555) 604-5512",
    "licenseNumber": "DL-653920-A",
    "licenseExpiry": "2028-06-18"
  },
  {
    "id": "drv-06",
    "name": "David Chen",
    "phone": "+1 (555) 819-4402",
    "licenseNumber": "DL-720194-A",
    "licenseExpiry": "2027-04-30"
  },
  {
    "id": "drv-07",
    "name": "Liam Murphy",
    "phone": "+1 (555) 914-7261",
    "licenseNumber": "DL-399105-B",
    "licenseExpiry": "2026-11-25"
  },
  {
    "id": "drv-08",
    "name": "Amara Al-Mansoor",
    "phone": "+1 (555) 332-9014",
    "licenseNumber": "DL-847291-A",
    "licenseExpiry": "2028-09-12"
  },
  {
    "id": "drv-09",
    "name": "Lucas Rossi",
    "phone": "+1 (555) 441-2309",
    "licenseNumber": "DL-284910-C",
    "licenseExpiry": "2027-03-22"
  },
  {
    "id": "drv-10",
    "name": "Chloe Dubois",
    "phone": "+1 (555) 550-1823",
    "licenseNumber": "DL-601938-A",
    "licenseExpiry": "2028-05-14"
  },
  {
    "id": "drv-11",
    "name": "Tariq Hassan",
    "phone": "+1 (555) 718-4920",
    "licenseNumber": "DL-492019-B",
    "licenseExpiry": "2027-10-09"
  },
  {
    "id": "drv-12",
    "name": "Hannah Becker",
    "phone": "+1 (555) 883-9102",
    "licenseNumber": "DL-930184-A",
    "licenseExpiry": "2028-02-28"
  },
  {
    "id": "drv-13",
    "name": "Mateo Morales",
    "phone": "+1 (555) 209-4819",
    "licenseNumber": "DL-194820-C",
    "licenseExpiry": "2026-12-31"
  },
  {
    "id": "drv-14",
    "name": "Zoe Kowalski",
    "phone": "+1 (555) 674-8201",
    "licenseNumber": "DL-583920-A",
    "licenseExpiry": "2027-07-19"
  },
  {
    "id": "drv-15",
    "name": "Aiden Taylor",
    "phone": "+1 (555) 948-3012",
    "licenseNumber": "DL-772910-B",
    "licenseExpiry": "2028-04-05"
  }
];

export const initialExpenses: Expense[] = [
  {
    "id": "exp-0001",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 95,
    "date": "2026-05-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0002",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 94,
    "date": "2026-05-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0003",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-05-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0004",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 87,
    "date": "2026-05-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0005",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 40,
    "date": "2026-05-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0006",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-05-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0007",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-05-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0008",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-05-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0009",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 401,
    "date": "2026-05-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0010",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-05-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0011",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 343,
    "date": "2026-05-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0012",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 450,
    "date": "2026-05-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0013",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 86,
    "date": "2026-05-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0014",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 490,
    "date": "2026-05-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0015",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 98,
    "date": "2026-05-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0016",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 95,
    "date": "2026-05-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0017",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 30,
    "date": "2026-05-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0018",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 142,
    "date": "2026-05-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0019",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 27,
    "date": "2026-05-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0020",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0021",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 319,
    "date": "2026-05-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0022",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 76,
    "date": "2026-05-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0023",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 69,
    "date": "2026-05-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0024",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 426,
    "date": "2026-05-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0025",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 802,
    "date": "2026-05-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0026",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 86,
    "date": "2026-05-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0027",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 69,
    "date": "2026-05-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0028",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 128,
    "date": "2026-05-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0029",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 418,
    "date": "2026-05-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0030",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 140,
    "date": "2026-05-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0031",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 106,
    "date": "2026-05-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0032",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 340,
    "date": "2026-05-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0033",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-05-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0034",
    "vehicleId": "veh-04",
    "type": "OTHER",
    "amount": 90,
    "date": "2026-05-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0035",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 159,
    "date": "2026-05-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0036",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 133,
    "date": "2026-05-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0037",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 26,
    "date": "2026-05-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0038",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 644,
    "date": "2026-05-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0039",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-05-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0040",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 36,
    "date": "2026-05-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0041",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-05-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0042",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 94,
    "date": "2026-05-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0043",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 442,
    "date": "2026-05-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0044",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 118,
    "date": "2026-05-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0045",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-05-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0046",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 53,
    "date": "2026-05-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0047",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-05-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0048",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 36,
    "date": "2026-05-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0049",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 80,
    "date": "2026-05-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0050",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 730,
    "date": "2026-05-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0051",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 815,
    "date": "2026-05-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0052",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 97,
    "date": "2026-05-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0053",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 26,
    "date": "2026-05-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0054",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 100,
    "date": "2026-05-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0055",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 135,
    "date": "2026-05-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0056",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 156,
    "date": "2026-05-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0057",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-05-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0058",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 667,
    "date": "2026-05-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0059",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 89,
    "date": "2026-05-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0060",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-05-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0061",
    "vehicleId": "veh-04",
    "type": "OTHER",
    "amount": 80,
    "date": "2026-05-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0062",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 812,
    "date": "2026-05-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0063",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 51,
    "date": "2026-05-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0064",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 139,
    "date": "2026-05-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0065",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 37,
    "date": "2026-05-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0066",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 119,
    "date": "2026-05-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0067",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 760,
    "date": "2026-05-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0068",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 144,
    "date": "2026-05-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0069",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 129,
    "date": "2026-05-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0070",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 348,
    "date": "2026-05-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0071",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 112,
    "date": "2026-05-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0072",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 140,
    "date": "2026-05-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0073",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 111,
    "date": "2026-05-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0074",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 85,
    "date": "2026-05-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0075",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-05-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0076",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 122,
    "date": "2026-05-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0077",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0078",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 18,
    "date": "2026-05-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0079",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 45,
    "date": "2026-05-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0080",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 151,
    "date": "2026-05-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0081",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 136,
    "date": "2026-05-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0082",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-05-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0083",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-05-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0084",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 18,
    "date": "2026-05-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0085",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 96,
    "date": "2026-05-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0086",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 855,
    "date": "2026-05-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0087",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 125,
    "date": "2026-05-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0088",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0089",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 90,
    "date": "2026-05-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0090",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 74,
    "date": "2026-05-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0091",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-05-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0092",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 101,
    "date": "2026-05-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0093",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 115,
    "date": "2026-05-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0094",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 560,
    "date": "2026-05-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0095",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 93,
    "date": "2026-05-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0096",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0097",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 65,
    "date": "2026-05-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0098",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 46,
    "date": "2026-05-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0099",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 56,
    "date": "2026-05-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0100",
    "vehicleId": "veh-11",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-05-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0101",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 37,
    "date": "2026-05-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0102",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-05-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0103",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0104",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 525,
    "date": "2026-05-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0105",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 38,
    "date": "2026-05-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0106",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 34,
    "date": "2026-05-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0107",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 82,
    "date": "2026-05-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0108",
    "vehicleId": "veh-04",
    "type": "OTHER",
    "amount": 46,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0109",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 83,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0110",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0111",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 113,
    "date": "2026-05-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0112",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 126,
    "date": "2026-05-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0113",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 847,
    "date": "2026-05-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0114",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 61,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0115",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-05-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0116",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 77,
    "date": "2026-05-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0117",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 57,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0118",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 56,
    "date": "2026-05-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0119",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 143,
    "date": "2026-06-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0120",
    "vehicleId": "veh-02",
    "type": "MAINTENANCE",
    "amount": 716,
    "date": "2026-06-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0121",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 87,
    "date": "2026-06-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0122",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 665,
    "date": "2026-06-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0123",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 90,
    "date": "2026-06-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0124",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 19,
    "date": "2026-06-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0125",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-06-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0126",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 157,
    "date": "2026-06-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0127",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-06-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0128",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 567,
    "date": "2026-06-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0129",
    "vehicleId": "veh-15",
    "type": "MAINTENANCE",
    "amount": 346,
    "date": "2026-06-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0130",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-06-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0131",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 28,
    "date": "2026-06-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0132",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-06-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0133",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 79,
    "date": "2026-06-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0134",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 117,
    "date": "2026-06-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0135",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-06-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0136",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 99,
    "date": "2026-06-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0137",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 494,
    "date": "2026-06-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0138",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 19,
    "date": "2026-06-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0139",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 88,
    "date": "2026-06-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0140",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 850,
    "date": "2026-06-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0141",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 695,
    "date": "2026-06-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0142",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 149,
    "date": "2026-06-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0143",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 150,
    "date": "2026-06-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0144",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0145",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0146",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-06-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0147",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 57,
    "date": "2026-06-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0148",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 97,
    "date": "2026-06-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0149",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 389,
    "date": "2026-06-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0150",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0151",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 129,
    "date": "2026-06-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0152",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 95,
    "date": "2026-06-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0153",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0154",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0155",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-06-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0156",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-06-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0157",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 19,
    "date": "2026-06-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0158",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 319,
    "date": "2026-06-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0159",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 46,
    "date": "2026-06-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0160",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-06-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0161",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 352,
    "date": "2026-06-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0162",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 50,
    "date": "2026-06-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0163",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 88,
    "date": "2026-06-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0164",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 47,
    "date": "2026-06-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0165",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 472,
    "date": "2026-06-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0166",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-06-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0167",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 97,
    "date": "2026-06-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0168",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-06-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0169",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 296,
    "date": "2026-06-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0170",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 55,
    "date": "2026-06-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0171",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 425,
    "date": "2026-06-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0172",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 62,
    "date": "2026-06-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0173",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 248,
    "date": "2026-06-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0174",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 304,
    "date": "2026-06-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0175",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-06-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0176",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-06-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0177",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 143,
    "date": "2026-06-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0178",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 305,
    "date": "2026-06-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0179",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 44,
    "date": "2026-06-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0180",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-06-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0181",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 832,
    "date": "2026-06-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0182",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 35,
    "date": "2026-06-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0183",
    "vehicleId": "veh-15",
    "type": "MAINTENANCE",
    "amount": 841,
    "date": "2026-06-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0184",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 569,
    "date": "2026-06-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0185",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 32,
    "date": "2026-06-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0186",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 538,
    "date": "2026-06-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0187",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 56,
    "date": "2026-06-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0188",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 155,
    "date": "2026-06-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0189",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-06-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0190",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 575,
    "date": "2026-06-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0191",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 600,
    "date": "2026-06-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0192",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 700,
    "date": "2026-06-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0193",
    "vehicleId": "veh-09",
    "type": "OTHER",
    "amount": 58,
    "date": "2026-06-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0194",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 131,
    "date": "2026-06-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0195",
    "vehicleId": "veh-11",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-06-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0196",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 99,
    "date": "2026-06-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0197",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 125,
    "date": "2026-06-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0198",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 97,
    "date": "2026-06-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0199",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 43,
    "date": "2026-06-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0200",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 140,
    "date": "2026-06-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0201",
    "vehicleId": "veh-02",
    "type": "OTHER",
    "amount": 45,
    "date": "2026-06-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0202",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 84,
    "date": "2026-06-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0203",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 405,
    "date": "2026-06-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0204",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 130,
    "date": "2026-06-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0205",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 54,
    "date": "2026-06-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0206",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 72,
    "date": "2026-06-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0207",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 120,
    "date": "2026-06-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0208",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 81,
    "date": "2026-06-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0209",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 513,
    "date": "2026-06-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0210",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 47,
    "date": "2026-06-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0211",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 136,
    "date": "2026-06-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0212",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 341,
    "date": "2026-06-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0213",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 591,
    "date": "2026-06-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0214",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 114,
    "date": "2026-06-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0215",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 764,
    "date": "2026-06-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0216",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 57,
    "date": "2026-06-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0217",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-06-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0218",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 141,
    "date": "2026-06-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0219",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 602,
    "date": "2026-06-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0220",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 88,
    "date": "2026-06-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0221",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-06-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0222",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 92,
    "date": "2026-06-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0223",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 111,
    "date": "2026-06-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0224",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 320,
    "date": "2026-06-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0225",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-06-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0226",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 104,
    "date": "2026-06-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0227",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 24,
    "date": "2026-06-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0228",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 81,
    "date": "2026-06-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0229",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-06-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0230",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-06-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0231",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 90,
    "date": "2026-06-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0232",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 121,
    "date": "2026-06-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0233",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-06-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0234",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 74,
    "date": "2026-06-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0235",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 133,
    "date": "2026-06-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0236",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-06-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0237",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-06-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0238",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-07-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0239",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-07-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0240",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 849,
    "date": "2026-07-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0241",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 527,
    "date": "2026-07-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0242",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 77,
    "date": "2026-07-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0243",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 850,
    "date": "2026-07-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0244",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 98,
    "date": "2026-07-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0245",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 51,
    "date": "2026-07-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0246",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 108,
    "date": "2026-07-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0247",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 88,
    "date": "2026-07-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0248",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 36,
    "date": "2026-07-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0249",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 21,
    "date": "2026-07-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0250",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 83,
    "date": "2026-07-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0251",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 581,
    "date": "2026-07-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0252",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 120,
    "date": "2026-07-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0253",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-07-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0254",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 78,
    "date": "2026-07-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0255",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-07-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0256",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 27,
    "date": "2026-07-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0257",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 79,
    "date": "2026-07-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0258",
    "vehicleId": "veh-16",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-07-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0259",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 153,
    "date": "2026-07-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0260",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 62,
    "date": "2026-07-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0261",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 73,
    "date": "2026-07-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0262",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 139,
    "date": "2026-07-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0263",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 88,
    "date": "2026-07-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0264",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 654,
    "date": "2026-07-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0265",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-07-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0266",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 66,
    "date": "2026-07-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0267",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 127,
    "date": "2026-07-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0268",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-07-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0269",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 318,
    "date": "2026-07-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0270",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 750,
    "date": "2026-07-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0271",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 587,
    "date": "2026-07-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0272",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 142,
    "date": "2026-07-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0273",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-07-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0274",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 118,
    "date": "2026-07-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0275",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 70,
    "date": "2026-07-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0276",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 46,
    "date": "2026-07-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0277",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 37,
    "date": "2026-07-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0278",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 110,
    "date": "2026-07-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0279",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 842,
    "date": "2026-07-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0280",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 36,
    "date": "2026-07-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0281",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 63,
    "date": "2026-07-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0282",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 458,
    "date": "2026-07-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0283",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-07-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0284",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 24,
    "date": "2026-07-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0285",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 95,
    "date": "2026-07-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0286",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 490,
    "date": "2026-07-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0287",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 98,
    "date": "2026-07-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0288",
    "vehicleId": "veh-16",
    "type": "TOLL",
    "amount": 38,
    "date": "2026-07-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0289",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 56,
    "date": "2026-07-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0290",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 38,
    "date": "2026-07-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0291",
    "vehicleId": "veh-02",
    "type": "OTHER",
    "amount": 75,
    "date": "2026-07-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0292",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-07-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0293",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 146,
    "date": "2026-07-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0294",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 789,
    "date": "2026-07-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0295",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 89,
    "date": "2026-07-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0296",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-07-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0297",
    "vehicleId": "veh-15",
    "type": "MAINTENANCE",
    "amount": 364,
    "date": "2026-07-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0298",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 47,
    "date": "2026-07-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0299",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 250,
    "date": "2026-07-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0300",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 578,
    "date": "2026-07-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0301",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 266,
    "date": "2026-07-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0302",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 75,
    "date": "2026-07-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0303",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 95,
    "date": "2026-07-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0304",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 154,
    "date": "2026-07-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0305",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 82,
    "date": "2026-07-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0306",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-07-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0307",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 115,
    "date": "2026-07-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0308",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-07-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0309",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 739,
    "date": "2026-07-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0310",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 156,
    "date": "2026-07-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0311",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 48,
    "date": "2026-07-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0312",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 411,
    "date": "2026-07-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0313",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 85,
    "date": "2026-07-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0314",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 79,
    "date": "2026-07-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0315",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 231,
    "date": "2026-07-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0316",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 42,
    "date": "2026-07-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0317",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 24,
    "date": "2026-07-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0318",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-07-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0319",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 58,
    "date": "2026-07-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0320",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-07-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0321",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 680,
    "date": "2026-07-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0322",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 66,
    "date": "2026-07-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0323",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 113,
    "date": "2026-07-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0324",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 275,
    "date": "2026-07-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0325",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 30,
    "date": "2026-07-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0326",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-07-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0327",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 87,
    "date": "2026-07-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0328",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 64,
    "date": "2026-07-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0329",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 657,
    "date": "2026-07-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0330",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-07-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0331",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 32,
    "date": "2026-07-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0332",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-07-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0333",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 105,
    "date": "2026-07-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0334",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 94,
    "date": "2026-07-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0335",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 102,
    "date": "2026-07-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0336",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 30,
    "date": "2026-07-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0337",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 93,
    "date": "2026-07-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0338",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 94,
    "date": "2026-07-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0339",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 37,
    "date": "2026-07-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0340",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 79,
    "date": "2026-07-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0341",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-08-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0342",
    "vehicleId": "veh-04",
    "type": "MAINTENANCE",
    "amount": 503,
    "date": "2026-08-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0343",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 95,
    "date": "2026-08-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0344",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-08-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0345",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 121,
    "date": "2026-08-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0346",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 762,
    "date": "2026-08-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0347",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 412,
    "date": "2026-08-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0348",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 127,
    "date": "2026-08-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0349",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 848,
    "date": "2026-08-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0350",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 48,
    "date": "2026-08-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0351",
    "vehicleId": "veh-02",
    "type": "MAINTENANCE",
    "amount": 629,
    "date": "2026-08-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0352",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 40,
    "date": "2026-08-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0353",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 127,
    "date": "2026-08-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0354",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 28,
    "date": "2026-08-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0355",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 51,
    "date": "2026-08-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0356",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 102,
    "date": "2026-08-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0357",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 40,
    "date": "2026-08-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0358",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 18,
    "date": "2026-08-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0359",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 30,
    "date": "2026-08-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0360",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 104,
    "date": "2026-08-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0361",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 127,
    "date": "2026-08-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0362",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-08-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0363",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 811,
    "date": "2026-08-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0364",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 83,
    "date": "2026-08-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0365",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 128,
    "date": "2026-08-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0366",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 323,
    "date": "2026-08-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0367",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 91,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0368",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 55,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0369",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 66,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0370",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 423,
    "date": "2026-08-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0371",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 68,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0372",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 522,
    "date": "2026-08-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0373",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 76,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0374",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-08-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0375",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 128,
    "date": "2026-08-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0376",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 630,
    "date": "2026-08-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0377",
    "vehicleId": "veh-04",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-08-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0378",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 84,
    "date": "2026-08-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0379",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-08-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0380",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 141,
    "date": "2026-08-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0381",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 95,
    "date": "2026-08-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0382",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-08-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0383",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 47,
    "date": "2026-08-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0384",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 22,
    "date": "2026-08-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0385",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 135,
    "date": "2026-08-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0386",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 119,
    "date": "2026-08-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0387",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 110,
    "date": "2026-08-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0388",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 645,
    "date": "2026-08-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0389",
    "vehicleId": "veh-09",
    "type": "OTHER",
    "amount": 42,
    "date": "2026-08-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0390",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 93,
    "date": "2026-08-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0391",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 76,
    "date": "2026-08-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0392",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-08-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0393",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 150,
    "date": "2026-08-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0394",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 104,
    "date": "2026-08-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0395",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 120,
    "date": "2026-08-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0396",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 24,
    "date": "2026-08-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0397",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 136,
    "date": "2026-08-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0398",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 315,
    "date": "2026-08-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0399",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 35,
    "date": "2026-08-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0400",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 548,
    "date": "2026-08-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0401",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 99,
    "date": "2026-08-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0402",
    "vehicleId": "veh-17",
    "type": "MAINTENANCE",
    "amount": 269,
    "date": "2026-08-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0403",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-08-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0404",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 246,
    "date": "2026-08-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0405",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 23,
    "date": "2026-08-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0406",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 87,
    "date": "2026-08-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0407",
    "vehicleId": "veh-02",
    "type": "MAINTENANCE",
    "amount": 256,
    "date": "2026-08-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0408",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 62,
    "date": "2026-08-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0409",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 128,
    "date": "2026-08-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0410",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 73,
    "date": "2026-08-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0411",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 36,
    "date": "2026-08-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0412",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 96,
    "date": "2026-08-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0413",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 111,
    "date": "2026-08-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0414",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-08-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0415",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 34,
    "date": "2026-08-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0416",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 505,
    "date": "2026-08-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0417",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 256,
    "date": "2026-08-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0418",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 63,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0419",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 467,
    "date": "2026-08-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0420",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 61,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0421",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 93,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0422",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 518,
    "date": "2026-08-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0423",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 97,
    "date": "2026-08-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0424",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0425",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 60,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0426",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 43,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0427",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 85,
    "date": "2026-08-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0428",
    "vehicleId": "veh-17",
    "type": "MAINTENANCE",
    "amount": 741,
    "date": "2026-08-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0429",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 67,
    "date": "2026-08-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0430",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 347,
    "date": "2026-08-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0431",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 101,
    "date": "2026-08-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0432",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 24,
    "date": "2026-08-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0433",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 34,
    "date": "2026-08-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0434",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 35,
    "date": "2026-08-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0435",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 234,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0436",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 407,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0437",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-08-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0438",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 107,
    "date": "2026-08-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0439",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 363,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0440",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 802,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0441",
    "vehicleId": "veh-15",
    "type": "TOLL",
    "amount": 27,
    "date": "2026-08-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0442",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 87,
    "date": "2026-08-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0443",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 809,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0444",
    "vehicleId": "veh-20",
    "type": "MAINTENANCE",
    "amount": 759,
    "date": "2026-08-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0445",
    "vehicleId": "veh-02",
    "type": "OTHER",
    "amount": 98,
    "date": "2026-08-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0446",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 140,
    "date": "2026-08-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0447",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 358,
    "date": "2026-08-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0448",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 98,
    "date": "2026-08-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0449",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 68,
    "date": "2026-08-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0450",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-08-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0451",
    "vehicleId": "veh-17",
    "type": "MAINTENANCE",
    "amount": 774,
    "date": "2026-08-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0452",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 67,
    "date": "2026-08-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0453",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 242,
    "date": "2026-08-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0454",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 80,
    "date": "2026-09-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0455",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 66,
    "date": "2026-09-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0456",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-09-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0457",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 43,
    "date": "2026-09-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0458",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 65,
    "date": "2026-09-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0459",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 43,
    "date": "2026-09-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0460",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 776,
    "date": "2026-09-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0461",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 96,
    "date": "2026-09-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0462",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 149,
    "date": "2026-09-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0463",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 98,
    "date": "2026-09-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0464",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 645,
    "date": "2026-09-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0465",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 482,
    "date": "2026-09-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0466",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 68,
    "date": "2026-09-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0467",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 346,
    "date": "2026-09-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0468",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 510,
    "date": "2026-09-04",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0469",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 104,
    "date": "2026-09-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0470",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 118,
    "date": "2026-09-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0471",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 67,
    "date": "2026-09-04",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0472",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 78,
    "date": "2026-09-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0473",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 113,
    "date": "2026-09-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0474",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 73,
    "date": "2026-09-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0475",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 724,
    "date": "2026-09-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0476",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 28,
    "date": "2026-09-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0477",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 604,
    "date": "2026-09-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0478",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-09-07",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0479",
    "vehicleId": "veh-09",
    "type": "OTHER",
    "amount": 99,
    "date": "2026-09-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0480",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 485,
    "date": "2026-09-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0481",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-09-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0482",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 509,
    "date": "2026-09-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0483",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 144,
    "date": "2026-09-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0484",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 110,
    "date": "2026-09-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0485",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 81,
    "date": "2026-09-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0486",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 69,
    "date": "2026-09-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0487",
    "vehicleId": "veh-01",
    "type": "OTHER",
    "amount": 83,
    "date": "2026-09-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0488",
    "vehicleId": "veh-02",
    "type": "MAINTENANCE",
    "amount": 749,
    "date": "2026-09-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0489",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-09-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0490",
    "vehicleId": "veh-04",
    "type": "OTHER",
    "amount": 50,
    "date": "2026-09-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0491",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 50,
    "date": "2026-09-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0492",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 46,
    "date": "2026-09-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0493",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-09-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0494",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 381,
    "date": "2026-09-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0495",
    "vehicleId": "veh-16",
    "type": "TOLL",
    "amount": 19,
    "date": "2026-09-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0496",
    "vehicleId": "veh-20",
    "type": "FUEL",
    "amount": 105,
    "date": "2026-09-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0497",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 147,
    "date": "2026-09-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0498",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 108,
    "date": "2026-09-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0499",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 71,
    "date": "2026-09-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0500",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 65,
    "date": "2026-09-13",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0501",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-09-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0502",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 106,
    "date": "2026-09-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0503",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 21,
    "date": "2026-09-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0504",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 238,
    "date": "2026-09-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0505",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 470,
    "date": "2026-09-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0506",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-09-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0507",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 141,
    "date": "2026-09-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0508",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 32,
    "date": "2026-09-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0509",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-09-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0510",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 58,
    "date": "2026-09-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0511",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 110,
    "date": "2026-09-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0512",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 128,
    "date": "2026-09-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0513",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 602,
    "date": "2026-09-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0514",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 67,
    "date": "2026-09-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0515",
    "vehicleId": "veh-17",
    "type": "MAINTENANCE",
    "amount": 801,
    "date": "2026-09-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0516",
    "vehicleId": "veh-19",
    "type": "OTHER",
    "amount": 70,
    "date": "2026-09-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0517",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-09-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0518",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-09-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0519",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 115,
    "date": "2026-09-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0520",
    "vehicleId": "veh-10",
    "type": "MAINTENANCE",
    "amount": 779,
    "date": "2026-09-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0521",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 67,
    "date": "2026-09-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0522",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 104,
    "date": "2026-09-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0523",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-09-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0524",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 825,
    "date": "2026-09-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0525",
    "vehicleId": "veh-16",
    "type": "MAINTENANCE",
    "amount": 307,
    "date": "2026-09-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0526",
    "vehicleId": "veh-18",
    "type": "TOLL",
    "amount": 28,
    "date": "2026-09-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0527",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-09-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0528",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 156,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0529",
    "vehicleId": "veh-02",
    "type": "FUEL",
    "amount": 133,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0530",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 134,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0531",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-09-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0532",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 827,
    "date": "2026-09-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0533",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 77,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0534",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 85,
    "date": "2026-09-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0535",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 38,
    "date": "2026-09-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0536",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-09-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0537",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 132,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0538",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 841,
    "date": "2026-09-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0539",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 98,
    "date": "2026-09-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0540",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 94,
    "date": "2026-09-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0541",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 115,
    "date": "2026-09-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0542",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 363,
    "date": "2026-09-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0543",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 21,
    "date": "2026-09-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0544",
    "vehicleId": "veh-02",
    "type": "OTHER",
    "amount": 66,
    "date": "2026-09-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0545",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 56,
    "date": "2026-09-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0546",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 32,
    "date": "2026-09-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0547",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 640,
    "date": "2026-09-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0548",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 83,
    "date": "2026-09-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0549",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-09-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0550",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 711,
    "date": "2026-09-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0551",
    "vehicleId": "veh-14",
    "type": "MAINTENANCE",
    "amount": 389,
    "date": "2026-09-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0552",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 93,
    "date": "2026-09-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0553",
    "vehicleId": "veh-17",
    "type": "MAINTENANCE",
    "amount": 570,
    "date": "2026-09-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0554",
    "vehicleId": "veh-18",
    "type": "OTHER",
    "amount": 78,
    "date": "2026-09-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0555",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 77,
    "date": "2026-09-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0556",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 49,
    "date": "2026-09-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0557",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 142,
    "date": "2026-09-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0558",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 228,
    "date": "2026-09-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0559",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 696,
    "date": "2026-09-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0560",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 865,
    "date": "2026-09-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0561",
    "vehicleId": "veh-13",
    "type": "FUEL",
    "amount": 154,
    "date": "2026-09-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0562",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 23,
    "date": "2026-09-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0563",
    "vehicleId": "veh-15",
    "type": "OTHER",
    "amount": 45,
    "date": "2026-09-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0564",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 506,
    "date": "2026-09-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0565",
    "vehicleId": "veh-19",
    "type": "TOLL",
    "amount": 21,
    "date": "2026-09-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0566",
    "vehicleId": "veh-20",
    "type": "OTHER",
    "amount": 53,
    "date": "2026-09-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0567",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 40,
    "date": "2026-10-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0568",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 23,
    "date": "2026-10-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0569",
    "vehicleId": "veh-05",
    "type": "OTHER",
    "amount": 47,
    "date": "2026-10-01",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0570",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 277,
    "date": "2026-10-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0571",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 92,
    "date": "2026-10-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0572",
    "vehicleId": "veh-09",
    "type": "FUEL",
    "amount": 123,
    "date": "2026-10-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0573",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 45,
    "date": "2026-10-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0574",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 843,
    "date": "2026-10-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0575",
    "vehicleId": "veh-14",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-10-01",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0576",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 534,
    "date": "2026-10-01",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0577",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 154,
    "date": "2026-10-01",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0578",
    "vehicleId": "veh-01",
    "type": "FUEL",
    "amount": 158,
    "date": "2026-10-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0579",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 39,
    "date": "2026-10-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0580",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 151,
    "date": "2026-10-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0581",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-10-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0582",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 126,
    "date": "2026-10-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0583",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 150,
    "date": "2026-10-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0584",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 32,
    "date": "2026-10-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0585",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 19,
    "date": "2026-10-04",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0586",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-10-04",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0587",
    "vehicleId": "veh-02",
    "type": "OTHER",
    "amount": 96,
    "date": "2026-10-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0588",
    "vehicleId": "veh-03",
    "type": "MAINTENANCE",
    "amount": 859,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0589",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 145,
    "date": "2026-10-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0590",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 322,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0591",
    "vehicleId": "veh-07",
    "type": "MAINTENANCE",
    "amount": 751,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0592",
    "vehicleId": "veh-08",
    "type": "OTHER",
    "amount": 46,
    "date": "2026-10-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0593",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 440,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0594",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 764,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0595",
    "vehicleId": "veh-17",
    "type": "OTHER",
    "amount": 99,
    "date": "2026-10-07",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0596",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 100,
    "date": "2026-10-07",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0597",
    "vehicleId": "veh-19",
    "type": "MAINTENANCE",
    "amount": 758,
    "date": "2026-10-07",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0598",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 531,
    "date": "2026-10-10",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0599",
    "vehicleId": "veh-03",
    "type": "OTHER",
    "amount": 92,
    "date": "2026-10-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0600",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-10-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0601",
    "vehicleId": "veh-07",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-10-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0602",
    "vehicleId": "veh-11",
    "type": "OTHER",
    "amount": 80,
    "date": "2026-10-10",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0603",
    "vehicleId": "veh-12",
    "type": "TOLL",
    "amount": 31,
    "date": "2026-10-10",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0604",
    "vehicleId": "veh-14",
    "type": "FUEL",
    "amount": 92,
    "date": "2026-10-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0605",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 101,
    "date": "2026-10-10",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0606",
    "vehicleId": "veh-01",
    "type": "MAINTENANCE",
    "amount": 690,
    "date": "2026-10-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0607",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 336,
    "date": "2026-10-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0608",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 18,
    "date": "2026-10-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0609",
    "vehicleId": "veh-07",
    "type": "FUEL",
    "amount": 82,
    "date": "2026-10-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0610",
    "vehicleId": "veh-08",
    "type": "TOLL",
    "amount": 44,
    "date": "2026-10-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0611",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 33,
    "date": "2026-10-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0612",
    "vehicleId": "veh-10",
    "type": "FUEL",
    "amount": 131,
    "date": "2026-10-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0613",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 351,
    "date": "2026-10-13",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0614",
    "vehicleId": "veh-13",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-10-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0615",
    "vehicleId": "veh-16",
    "type": "FUEL",
    "amount": 139,
    "date": "2026-10-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0616",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 159,
    "date": "2026-10-13",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0617",
    "vehicleId": "veh-20",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-10-13",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0618",
    "vehicleId": "veh-02",
    "type": "MAINTENANCE",
    "amount": 703,
    "date": "2026-10-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0619",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 137,
    "date": "2026-10-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0620",
    "vehicleId": "veh-08",
    "type": "FUEL",
    "amount": 107,
    "date": "2026-10-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0621",
    "vehicleId": "veh-09",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-10-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0622",
    "vehicleId": "veh-11",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-10-16",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0623",
    "vehicleId": "veh-12",
    "type": "FUEL",
    "amount": 99,
    "date": "2026-10-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0624",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 269,
    "date": "2026-10-16",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0625",
    "vehicleId": "veh-14",
    "type": "OTHER",
    "amount": 91,
    "date": "2026-10-16",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0626",
    "vehicleId": "veh-17",
    "type": "FUEL",
    "amount": 100,
    "date": "2026-10-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0627",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 79,
    "date": "2026-10-16",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0628",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 86,
    "date": "2026-10-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0629",
    "vehicleId": "veh-04",
    "type": "TOLL",
    "amount": 28,
    "date": "2026-10-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0630",
    "vehicleId": "veh-05",
    "type": "MAINTENANCE",
    "amount": 587,
    "date": "2026-10-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0631",
    "vehicleId": "veh-06",
    "type": "FUEL",
    "amount": 83,
    "date": "2026-10-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0632",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 61,
    "date": "2026-10-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0633",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 869,
    "date": "2026-10-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0634",
    "vehicleId": "veh-09",
    "type": "MAINTENANCE",
    "amount": 740,
    "date": "2026-10-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0635",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 44,
    "date": "2026-10-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0636",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 540,
    "date": "2026-10-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0637",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 55,
    "date": "2026-10-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0638",
    "vehicleId": "veh-15",
    "type": "FUEL",
    "amount": 95,
    "date": "2026-10-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0639",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 45,
    "date": "2026-10-19",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0640",
    "vehicleId": "veh-17",
    "type": "TOLL",
    "amount": 18,
    "date": "2026-10-19",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0641",
    "vehicleId": "veh-18",
    "type": "MAINTENANCE",
    "amount": 406,
    "date": "2026-10-19",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0642",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 100,
    "date": "2026-10-19",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0643",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 26,
    "date": "2026-10-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0644",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 37,
    "date": "2026-10-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0645",
    "vehicleId": "veh-03",
    "type": "TOLL",
    "amount": 29,
    "date": "2026-10-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0646",
    "vehicleId": "veh-05",
    "type": "FUEL",
    "amount": 82,
    "date": "2026-10-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0647",
    "vehicleId": "veh-06",
    "type": "OTHER",
    "amount": 47,
    "date": "2026-10-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0648",
    "vehicleId": "veh-10",
    "type": "TOLL",
    "amount": 20,
    "date": "2026-10-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0649",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 144,
    "date": "2026-10-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0650",
    "vehicleId": "veh-12",
    "type": "MAINTENANCE",
    "amount": 620,
    "date": "2026-10-22",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0651",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 74,
    "date": "2026-10-22",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0652",
    "vehicleId": "veh-16",
    "type": "TOLL",
    "amount": 25,
    "date": "2026-10-22",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0653",
    "vehicleId": "veh-19",
    "type": "FUEL",
    "amount": 145,
    "date": "2026-10-22",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0654",
    "vehicleId": "veh-04",
    "type": "FUEL",
    "amount": 131,
    "date": "2026-10-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0655",
    "vehicleId": "veh-06",
    "type": "TOLL",
    "amount": 27,
    "date": "2026-10-25",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0656",
    "vehicleId": "veh-07",
    "type": "OTHER",
    "amount": 82,
    "date": "2026-10-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0657",
    "vehicleId": "veh-08",
    "type": "MAINTENANCE",
    "amount": 670,
    "date": "2026-10-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0658",
    "vehicleId": "veh-10",
    "type": "OTHER",
    "amount": 53,
    "date": "2026-10-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0659",
    "vehicleId": "veh-11",
    "type": "FUEL",
    "amount": 90,
    "date": "2026-10-25",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0660",
    "vehicleId": "veh-12",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-10-25",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0661",
    "vehicleId": "veh-13",
    "type": "MAINTENANCE",
    "amount": 819,
    "date": "2026-10-25",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0662",
    "vehicleId": "veh-01",
    "type": "TOLL",
    "amount": 27,
    "date": "2026-10-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0663",
    "vehicleId": "veh-02",
    "type": "TOLL",
    "amount": 42,
    "date": "2026-10-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0664",
    "vehicleId": "veh-03",
    "type": "FUEL",
    "amount": 139,
    "date": "2026-10-28",
    "note": "Shell Diesel refuel (full tank)"
  },
  {
    "id": "exp-0665",
    "vehicleId": "veh-05",
    "type": "TOLL",
    "amount": 41,
    "date": "2026-10-28",
    "note": "Interstate expressway toll pass"
  },
  {
    "id": "exp-0666",
    "vehicleId": "veh-06",
    "type": "MAINTENANCE",
    "amount": 696,
    "date": "2026-10-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0667",
    "vehicleId": "veh-11",
    "type": "MAINTENANCE",
    "amount": 751,
    "date": "2026-10-28",
    "note": "Brake pad replacement and synthetic oil change"
  },
  {
    "id": "exp-0668",
    "vehicleId": "veh-13",
    "type": "OTHER",
    "amount": 81,
    "date": "2026-10-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0669",
    "vehicleId": "veh-16",
    "type": "OTHER",
    "amount": 86,
    "date": "2026-10-28",
    "note": "Vehicle deep cleaning & sanitization"
  },
  {
    "id": "exp-0670",
    "vehicleId": "veh-18",
    "type": "FUEL",
    "amount": 87,
    "date": "2026-10-28",
    "note": "Shell Diesel refuel (full tank)"
  }
];

export const initialMaintenanceTasks: MaintenanceTask[] = [
  {
    "id": "maint-01",
    "vehicleId": "veh-07",
    "description": "Differential fluid flush & transmission check",
    "dueDate": "2026-11-05",
    "status": "IN_PROGRESS",
    "estimatedCost": 450
  },
  {
    "id": "maint-02",
    "vehicleId": "veh-14",
    "description": "Air filter replacement & 40,000km routine inspection",
    "dueDate": "2026-11-12",
    "status": "SCHEDULED",
    "estimatedCost": 280
  },
  {
    "id": "maint-03",
    "vehicleId": "veh-21",
    "description": "Front brake rotor resurfacing and caliper seal kit",
    "dueDate": "2026-11-18",
    "status": "SCHEDULED",
    "estimatedCost": 620
  },
  {
    "id": "maint-04",
    "vehicleId": "veh-28",
    "description": "Full engine diagnostics for check engine light code P0420",
    "dueDate": "2026-11-02",
    "status": "IN_PROGRESS",
    "estimatedCost": 510
  },
  {
    "id": "maint-05",
    "vehicleId": "veh-03",
    "description": "Tire rotation and electronic wheel alignment",
    "dueDate": "2026-10-15",
    "status": "COMPLETED",
    "estimatedCost": 190
  },
  {
    "id": "maint-06",
    "vehicleId": "veh-09",
    "description": "HVAC cabin blower motor repair",
    "dueDate": "2026-10-22",
    "status": "COMPLETED",
    "estimatedCost": 340
  }
];

export const initialTrips: Trip[] = [
  {
    "id": "trip-01",
    "vehicleId": "veh-01",
    "startTime": "2026-10-28T08:30:00Z",
    "endTime": "2026-10-28T12:15:00Z",
    "distanceKm": 142.5,
    "startLocation": "Distribution Hub A, Newark",
    "endLocation": "Metro Depot, Brooklyn"
  },
  {
    "id": "trip-02",
    "vehicleId": "veh-02",
    "startTime": "2026-10-28T09:00:00Z",
    "endTime": "2026-10-28T14:40:00Z",
    "distanceKm": 218,
    "startLocation": "Logistics Terminal, Queens",
    "endLocation": "Port Authority Warehouse, Elizabeth"
  },
  {
    "id": "trip-03",
    "vehicleId": "veh-05",
    "startTime": "2026-10-29T07:15:00Z",
    "endTime": "2026-10-29T11:50:00Z",
    "distanceKm": 176.3,
    "startLocation": "Midtown Hub, Manhattan",
    "endLocation": "Northway Industrial Park, Jersey City"
  }
];

export const initialUsers: User[] = [
  {
    "id": "usr-01",
    "name": "Alex Rivera",
    "email": "alex.rivera@fleetpulse.io",
    "role": "ADMIN"
  },
  {
    "id": "usr-02",
    "name": "Sarah Chen",
    "email": "sarah.chen@fleetpulse.io",
    "role": "VIEWER"
  },
  {
    "id": "usr-03",
    "name": "Alex Morgan",
    "email": "admin@fleetpulse.dev",
    "role": "ADMIN"
  },
  {
    "id": "usr-04",
    "name": "Jordan Lee",
    "email": "viewer@fleetpulse.dev",
    "role": "VIEWER"
  }
];
