import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/chat'];
const authRoutes = ['/signin', '/signup'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  // Block unauthenticated users from protected routes
  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // Redirect authenticated users away from auth pages
//   if (token && authRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/chat', request.url));
//   }

  return NextResponse.next();
}

export const config = {
  matcher: ['/signin', '/signup'],
};
