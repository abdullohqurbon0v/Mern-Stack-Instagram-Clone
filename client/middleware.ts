import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedPaths = ['/dashboard', '/profile',];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  const pathname = request.nextUrl.pathname;

  if (!token && protectedPaths.includes(pathname)) {
    const loginUrl = new URL('/signin', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (token && (pathname === '/signin' || pathname === '/signup')) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
