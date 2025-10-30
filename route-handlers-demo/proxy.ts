import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL('/', request.url));

  const response = NextResponse.next();
  const themePreference = request.cookies.get('theme')?.value;

  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');

  // if (request.nextUrl.pathname === '/profile') {
  //   return NextResponse.rewrite(new URL('/hello', request.nextUrl));
  // }

  return response;
}

// export const config = {
//   matcher: '/profile',
// };
