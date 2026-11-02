import { NextResponse } from 'next/server';
import { verifyCredentials, createSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = body.email || 'alex.rivera@fleetpulse.io';
    const user = await verifyCredentials(email);
    const session = await createSession(user);
    return NextResponse.json({ success: true, user: session });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Login failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
