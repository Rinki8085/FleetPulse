'use server';

import { verifyCredentials, createSession, destroySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData): Promise<void> {
  const email = (formData.get('email') as string)?.trim() || 'alex.rivera@fleetpulse.io';
  const user = await verifyCredentials(email);
  await createSession(user);
  redirect('/vehicles');
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect('/login');
}

export async function quickDemoLogin(email: string): Promise<{ success: boolean; role: string }> {
  const user = await verifyCredentials(email);
  await createSession(user);
  return { success: true, role: user.role };
}
