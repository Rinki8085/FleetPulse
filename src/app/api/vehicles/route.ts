import { NextRequest, NextResponse } from 'next/server';
import { getVehicles, createVehicle } from '@/lib/data/fleetStore';
import { VehicleStatus } from '@/types/fleet';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'ALL';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const sortBy = (searchParams.get('sortBy') as 'plateNumber' | 'odometer' | 'year' | 'model') || 'plateNumber';
    const sortOrder = (searchParams.get('sortOrder') as 'asc' | 'desc') || 'asc';

    const result = await getVehicles({
      search,
      status,
      page,
      limit,
      sortBy,
      sortOrder
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json({ error: 'Failed to fetch vehicles' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.plateNumber || !body.model) {
      return NextResponse.json(
        { error: 'Plate number and model are required' },
        { status: 400 }
      );
    }

    const newVehicle = await createVehicle({
      plateNumber: body.plateNumber,
      model: body.model,
      year: body.year ? Number(body.year) : new Date().getFullYear(),
      type: body.type || 'Van',
      status: (body.status as VehicleStatus) || 'ACTIVE',
      odometer: body.odometer ? Number(body.odometer) : 0,
      driverId: body.driverId || undefined,
      fuelLevel: body.fuelLevel ? Number(body.fuelLevel) : 100
    });

    return NextResponse.json(newVehicle, { status: 201 });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json({ error: 'Failed to create vehicle' }, { status: 500 });
  }
}
