'use server';

import { verifyCredentials, createSession, destroySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const email = (formData.get('email') as string)?.trim();

  if (!email) {
    return { success: false, error: 'Please provide a valid email address.' };
  }

  const user = await verifyCredentials(email);
  if (!user) {
    return { success: false, error: 'User not found. Use alex.rivera@fleetpulse.io or sarah.chen@fleetpulse.io' };
  }

  await createSession(user);
  redirect('/vehicles');
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect('/login');
}

export async function quickDemoLogin(email: string): Promise<void> {
  const user = await verifyCredentials(email);
  if (user) {
    await createSession(user);
    redirect('/vehicles');
  }
}
