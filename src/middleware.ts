import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'fleetpulse_session';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get(COOKIE_NAME)?.value;

  const isProtected = 
    pathname.startsWith('/vehicles') || 
    pathname.startsWith('/dashboard') || 
    pathname.startsWith('/map') || 
    pathname.startsWith('/reports') ||
    pathname.startsWith('/expenses');

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (pathname === '/login' && token) {
    const url = request.nextUrl.clone();
    url.pathname = '/vehicles';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/vehicles/:path*', 
    '/dashboard/:path*', 
    '/map/:path*', 
    '/reports/:path*', 
    '/expenses/:path*',
    '/login'
  ],
};
