import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  // If root path and no lang-chosen cookie, allow it (language gate will handle)
  // Otherwise use intl middleware
  if (request.nextUrl.pathname === '/') {
    const langChosen = request.cookies.get('lang-chosen');
    if (!langChosen) {
      return NextResponse.next();
    }
    // Redirect to default locale if cookie exists
    return NextResponse.redirect(new URL('/en', request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};

