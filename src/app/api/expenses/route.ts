import { NextRequest, NextResponse } from 'next/server';
import { getExpenses, createExpense } from '@/lib/data/fleetStore';
import { ExpenseType } from '@/types/fleet';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const vehicleId = searchParams.get('vehicleId') || undefined;
    const type = (searchParams.get('type') as ExpenseType) || undefined;
    const month = searchParams.get('month') || undefined;
    const year = searchParams.get('year') || undefined;

    const expenses = await getExpenses({ vehicleId, type, month, year });
    return NextResponse.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return NextResponse.json({ error: 'Failed to fetch expenses' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.vehicleId || !body.amount || !body.type) {
      return NextResponse.json({ error: 'vehicleId, amount, and type are required' }, { status: 400 });
    }

    const newExpense = await createExpense({
      vehicleId: body.vehicleId,
      type: body.type,
      amount: Number(body.amount),
      date: body.date || new Date().toISOString().split('T')[0],
      note: body.note || ''
    });

    return NextResponse.json(newExpense, { status: 201 });
  } catch (error) {
    console.error('Error creating expense:', error);
    return NextResponse.json({ error: 'Failed to create expense' }, { status: 500 });
  }
}
