import { cookies } from 'next/headers';
import { User, UserRole } from '@/types/fleet';
import { initialUsers } from '@/lib/data/mockData';

const COOKIE_NAME = 'fleetpulse_session';

export interface SessionPayload {
  userId: string;
  name: string;
  email: string;
  role: UserRole;
  exp: number;
}

export async function createSession(user: User) {
  const payload: SessionPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000
  };

  const token = Buffer.from(JSON.stringify(payload)).toString('base64');
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60
  });

  return payload;
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return null;

  try {
    const str = Buffer.from(token, 'base64').toString('utf8');
    const data = JSON.parse(str) as SessionPayload;
    if (Date.now() > data.exp) {
      await destroySession();
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: '',
    maxAge: 0,
    path: '/'
  });
}

export async function verifyCredentials(email: string): Promise<User> {
  const cleanEmail = (email || '').trim().toLowerCase();

  // 1. Check existing mock users (Alex Rivera, Sarah Chen, Alex Morgan, Jordan Lee)
  const found = initialUsers.find(u => u.email.toLowerCase() === cleanEmail);
  if (found) return found;

  // 2. Check aliases for Admin demo
  if (cleanEmail.includes('alex') || cleanEmail.includes('admin') || cleanEmail.includes('manager')) {
    return {
      id: 'usr-admin',
      name: 'Alex Rivera',
      email: cleanEmail || 'alex.rivera@fleetpulse.io',
      role: 'ADMIN'
    };
  }

  // 3. Check aliases for Viewer demo
  if (cleanEmail.includes('sarah') || cleanEmail.includes('viewer') || cleanEmail.includes('jordan')) {
    return {
      id: 'usr-viewer',
      name: 'Sarah Chen',
      email: cleanEmail || 'sarah.chen@fleetpulse.io',
      role: 'VIEWER'
    };
  }

  // 4. Automatically accept ANY custom email provided!
  const namePart = cleanEmail.split('@')[0] || 'Fleet Operator';
  const formattedName = namePart
    .replace(/[._-]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());

  const role: UserRole = cleanEmail.includes('view') ? 'VIEWER' : 'ADMIN';

  return {
    id: `usr-${Date.now().toString(36)}`,
    name: formattedName,
    email: cleanEmail,
    role
  };
}
