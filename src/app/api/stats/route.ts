import { NextResponse } from 'next/server';
import { getFleetStats } from '@/lib/data/fleetStore';

export async function GET() {
  try {
    const stats = await getFleetStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching fleet stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
